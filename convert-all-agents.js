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
 * Convert a Claude agent to a Qwen agent
 * @param {string} agentPath - Path to the Claude agent file
 * @param {string} pluginName - Name of the plugin
 * @returns {string} - JavaScript code for the Qwen agent
 */
function convertAgentToQwenAgent(agentPath, pluginName) {
    // Read the agent markdown file
    const agentContent = fs.readFileSync(agentPath, 'utf8');
    
    // Extract YAML front matter if present
    let name = path.basename(agentPath, '.md');
    let description = 'An agent from ' + pluginName;
    let model = 'inherit';
    
    let processedAgentContent = agentContent; // Create a new variable to avoid reassignment issues

    if (agentContent.startsWith('---')) {
        const frontMatterEnd = agentContent.indexOf('---', 3);
        if (frontMatterEnd !== -1) {
            const frontMatter = agentContent.substring(3, frontMatterEnd);
            const lines = frontMatter.split('\n');

            for (const line of lines) {
                const match = line.match(/^(\w+):\s*(.*)$/);
                if (match) {
                    const key = match[1].trim();
                    let value = match[2].trim();
                    if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
                    if (value.startsWith("'") && value.endsWith("'")) value = value.slice(1, -1);

                    if (key === 'name') {
                        name = value;
                    } else if (key === 'description') {
                        description = value;
                    } else if (key === 'model') {
                        model = value;
                    }
                }
            }

            // Remove front matter from content
            processedAgentContent = agentContent.substring(frontMatterEnd + 3).trim();
        }
    }

    // Now use processedAgentContent instead of agentContent in the template
    
    // Create Qwen agent JavaScript
    const agentJs = `/**
 * Qwen Agent: ${name}
 * Plugin: ${pluginName}
 * Model: ${model}
 * Description: ${description}
 */

/**
 * Execute the ${name} agent
 * @param {Object} context - Context for the agent
 * @param {string} input - Input for the agent
 * @returns {Object} Result of the agent execution
 */
async function execute${camelCase(name)}Agent(context = {}, input = '') {
    // Implementation of the ${name} agent
    // This is a converted Claude agent for Qwen CLI

    console.log('Executing ${name} agent from ${pluginName} plugin');

    // The agent behavior would typically be defined by the markdown content
    const agentInfo = {
        name: '${name}',
        plugin: '${pluginName}',
        model: '${model}',
        description: \`${description}\`,
        behavior: \`${processedAgentContent.replace(/`/g, '\\`')}\`,
        context: context,
        input: input
    };

    // In a real implementation, this would execute the actual agent behavior
    // For now, we return the agent information as structured data
    return {
        status: 'success',
        agent: agentInfo,
        message: 'Executed ${name} agent',
        result: 'Agent behavior would be executed based on provided prompt'
    };
}

// Qwen agent specification
module.exports = {
    name: '${name}',
    description: '${description}',
    model: '${model}',
    plugin: '${pluginName}',
    execute: execute${camelCase(name)}Agent
};
`;

    return agentJs;
}

// Read the conversion map
const conversionMapPath = path.join(__dirname, 'qwen-plugin', 'conversion-map.json');
const conversionMap = JSON.parse(fs.readFileSync(conversionMapPath, 'utf8'));

// Filter only agents
const agents = conversionMap.filter(item => item.type === 'agent');

console.log(`Converting ${agents.length} agents to Qwen agents...`);

let convertedCount = 0;
let skippedCount = 0;

for (const agent of agents) {
    try {
        const agentCode = convertAgentToQwenAgent(agent.originalPath, agent.pluginName);
        if (agentCode) {
            // Create a safe filename
            const safePluginName = agent.pluginName.replace(/[^a-z0-9-]/gi, '-').toLowerCase();
            const safeAgentName = path.basename(agent.originalPath, '.md').replace(/[^a-z0-9-]/gi, '-').toLowerCase();
            const fileName = `${safePluginName}-${safeAgentName}.js`;

            const outputPath = path.join(__dirname, 'qwen-plugin', 'agents', fileName);
            fs.writeFileSync(outputPath, agentCode);
            console.log(`✓ Converted agent: ${agent.pluginName}/${path.basename(agent.originalPath)} -> ${fileName}`);
            convertedCount++;
        } else {
            console.log(`✗ Skipped agent (no content): ${agent.originalPath}`);
            skippedCount++;
        }
    } catch (error) {
        console.error(`✗ Error converting agent: ${agent.originalPath}`, error.message);
        skippedCount++;
    }
}

console.log(`\nAgents conversion completed:`);
console.log(`Converted: ${convertedCount}`);
console.log(`Skipped: ${skippedCount}`);
console.log(`Total: ${agents.length}`);