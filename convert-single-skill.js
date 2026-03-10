const fs = require('fs');
const path = require('path');

/**
 * Helper function to convert string to camelCase
 * @param {string} str - Input string
 * @returns {string} - CamelCase string
 */
function camelCase(str) {
    return str
        .replace(/[^a-zA-Z0-9]/g, ' ')
        .replace(/\s(.)/g, (m) => m[1].toUpperCase())
        .replace(/^(.)/, (m) => m[0].toUpperCase());
}

/**
 * Convert a Claude skill to a Qwen tool
 * @param {string} skillPath - Path to the Claude skill file
 * @param {string} pluginName - Name of the plugin
 * @returns {string} - JavaScript code for the Qwen tool
 */
function convertSkillToQwenTool(skillPath, pluginName) {
    // Skills are directories containing SKILL.md files, let's check if it's a directory
    const stat = fs.statSync(skillPath);

    let skillContent;
    let skillName;

    if (stat.isDirectory()) {
        // For skills that are directories with SKILL.md inside
        const skillMdPath = path.join(skillPath, 'SKILL.md');
        if (fs.existsSync(skillMdPath)) {
            skillContent = fs.readFileSync(skillMdPath, 'utf8');
            // Extract skill name from directory name
            skillName = path.basename(skillPath);
        } else {
            // Check if the directory has a README.md or similar
            const files = fs.readdirSync(skillPath);
            const skillFile = files.find(f => f.toLowerCase().includes('skill') || f.endsWith('.md'));
            if (skillFile) {
                skillContent = fs.readFileSync(path.join(skillPath, skillFile), 'utf8');
                skillName = path.basename(skillPath);
            } else {
                return null; // No skill file found
            }
        }
    } else {
        // Direct skill file
        skillContent = fs.readFileSync(skillPath, 'utf8');
        skillName = path.basename(skillPath, path.extname(skillPath));
    }

    // Extract YAML front matter if present
    let description = 'A skill for ' + pluginName;
    let skillTitle = skillName;

    if (skillContent.startsWith('---')) {
        const frontMatterEnd = skillContent.indexOf('---', 3);
        if (frontMatterEnd !== -1) {
            const frontMatter = skillContent.substring(3, frontMatterEnd);
            const lines = frontMatter.split('\n');

            for (const line of lines) {
                const match = line.match(/^(\w+):\s*(.*)$/);
                if (match) {
                    const key = match[1].trim();
                    let value = match[2].trim();
                    if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
                    if (value.startsWith("'") && value.endsWith("'")) value = value.slice(1, -1);

                    if (key === 'name') {
                        skillName = value;
                    } else if (key === 'description') {
                        description = value;
                    }
                }
            }

            skillContent = skillContent.substring(frontMatterEnd + 3).trim();
        }
    }

    // Extract title from markdown if not set via frontmatter
    const titleMatch = skillContent.match(/^#\s+(.+)$/m);
    if (titleMatch && !skillTitle) {
        skillTitle = titleMatch[1];
    } else if (!skillTitle) {
        skillTitle = skillName;
    }

    // Create Qwen tool JavaScript
    const toolJs = `/**
 * Qwen Tool: ${skillName}
 * Plugin: ${pluginName}
 * Description: ${description}
 */

/**
 * Execute the ${skillName} skill
 * @param {Object} params - Parameters for the skill
 * @returns {Object} Result of the skill execution
 */
async function execute${camelCase(skillName)}Skill(params = {}) {
    // Implementation of the ${skillName} skill
    // This is a converted Claude skill for Qwen CLI
    console.log('Executing ${skillName} skill from ${pluginName} plugin');

    // The skill content would typically be used to guide AI behavior
    // For a Qwen tool, we return the skill information
    const skillInfo = {
        name: '${skillName}',
        plugin: '${pluginName}',
        description: \`${description}\`,
        content: \`${skillContent.replace(/`/g, '\\`')}\`
    };

    // In a real implementation, this would execute actual functionality
    // For now, we return the skill information as structured data
    return {
        status: 'success',
        skill: skillInfo,
        message: 'Executed ${skillName} skill'
    };
}

// Qwen tool specification
module.exports = {
    name: '${skillName}',
    description: '${description}',
    parameters: {
        type: 'object',
        properties: {
            params: {
                type: 'object',
                description: 'Optional parameters for the skill',
            }
        },
        required: []
    },
    handler: execute${camelCase(skillName)}Skill
};
`;

    return toolJs;
}

// Example usage for git-advanced-workflows skill
const skillPath = path.join(__dirname, 'plugins', 'developer-essentials', 'skills', 'git-advanced-workflows');
const pluginName = 'developer-essentials';

const toolCode = convertSkillToQwenTool(skillPath, pluginName);
if (toolCode) {
    const outputPath = path.join(__dirname, 'qwen-plugin', 'tools', `${pluginName}-${path.basename(skillPath)}.js`);
    fs.writeFileSync(outputPath, toolCode);
    console.log(`Converted skill ${path.basename(skillPath)} from ${pluginName} to Qwen tool`);
} else {
    console.log(`Could not convert skill at ${skillPath}`);
}