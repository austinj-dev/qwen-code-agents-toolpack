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
 * Convert a Claude command to a Qwen command
 * @param {string} commandPath - Path to the Claude command file
 * @param {string} pluginName - Name of the plugin
 * @returns {string} - JavaScript code for the Qwen command
 */
function convertCommandToQwenCommand(commandPath, pluginName) {
    // Read the command markdown file
    const commandContent = fs.readFileSync(commandPath, 'utf8');
    
    // Extract first line or first heading as description if possible
    let name = path.basename(commandPath, '.md');
    let description = 'A command from ' + pluginName;
    
    // Look for first heading in markdown to use as description
    const headingMatch = commandContent.match(/^#\s+(.+)$/m);
    if (headingMatch) {
        description = headingMatch[1];
        name = description.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    } else {
        // Use filename as name if no heading found
        name = path.basename(commandPath, '.md').toLowerCase().replace(/[^a-z0-9]+/g, '-');
    }
    
    // Create Qwen command JavaScript
    const commandJs = `/**
 * Qwen Command: ${name}
 * Plugin: ${pluginName}
 * Description: ${description}
 */

/**
 * Execute the ${name} command
 * @param {Object} args - Arguments for the command
 * @param {Object} flags - Flags for the command
 * @returns {Object} Result of the command execution
 */
async function execute${camelCase(name)}Command(args = {}, flags = {}) {
    // Implementation of the ${name} command
    // This is a converted Claude command for Qwen CLI
    
    console.log('Executing ${name} command from ${pluginName} plugin');
    
    // The command behavior would typically be defined by the markdown content
    const commandInfo = {
        name: '${name}',
        plugin: '${pluginName}',
        description: \`${description}\`,
        behavior: \`${commandContent.replace(/`/g, '\\`')}\`,
        args: args,
        flags: flags
    };
    
    // In a real implementation, this would execute the actual command behavior
    // For now, we return the command information as structured data
    return {
        status: 'success',
        command: commandInfo,
        message: 'Executed ${name} command',
        result: 'Command behavior would be executed based on provided arguments'
    };
}

// Qwen command specification
module.exports = {
    name: '${name}',
    description: '${description}',
    plugin: '${pluginName}',
    args: [
        // Define command arguments here
        // Example:
        // {
        //   name: 'feature',
        //   description: 'Feature name',
        //   required: true,
        // }
    ],
    flags: [
        // Define command flags here
        // Example:
        // {
        //   name: 'verbose',
        //   description: 'Enable verbose output',
        //   type: 'boolean',
        // }
    ],
    handler: execute${camelCase(name)}Command
};
`;

    return commandJs;
}

// Read the conversion map
const conversionMapPath = path.join(__dirname, 'qwen-plugin', 'conversion-map.json');
const conversionMap = JSON.parse(fs.readFileSync(conversionMapPath, 'utf8'));

// Filter only commands
const commands = conversionMap.filter(item => item.type === 'command');

console.log(`Converting ${commands.length} commands to Qwen commands...`);

let convertedCount = 0;
let skippedCount = 0;

for (const command of commands) {
    try {
        const commandCode = convertCommandToQwenCommand(command.originalPath, command.pluginName);
        if (commandCode) {
            // Create a safe filename
            const safePluginName = command.pluginName.replace(/[^a-z0-9-]/gi, '-').toLowerCase();
            const safeCommandName = path.basename(command.originalPath, '.md').replace(/[^a-z0-9-]/gi, '-').toLowerCase();
            const fileName = `${safePluginName}-${safeCommandName}.js`;

            const outputPath = path.join(__dirname, 'qwen-plugin', 'commands', fileName);
            fs.writeFileSync(outputPath, commandCode);
            console.log(`✓ Converted command: ${command.pluginName}/${path.basename(command.originalPath)} -> ${fileName}`);
            convertedCount++;
        } else {
            console.log(`✗ Skipped command (no content): ${command.originalPath}`);
            skippedCount++;
        }
    } catch (error) {
        console.error(`✗ Error converting command: ${command.originalPath}`, error.message);
        skippedCount++;
    }
}

console.log(`\nCommands conversion completed:`);
console.log(`Converted: ${convertedCount}`);
console.log(`Skipped: ${skippedCount}`);
console.log(`Total: ${commands.length}`);