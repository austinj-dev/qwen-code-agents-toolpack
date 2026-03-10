/**
 * Commands Index for Qwen CLI Plugin
 * Loads all converted Claude commands as Qwen commands
 */

const fs = require('fs');
const path = require('path');

// Dynamically load all commands from the current directory
const commandsDir = __dirname;  // Current directory
const commands = {};

// Read all JavaScript files in the commands directory
const commandFiles = fs.readdirSync(commandsDir).filter(file => file.endsWith('.js') && file !== 'index.js');

for (const file of commandFiles) {
    try {
        const commandPath = path.join(commandsDir, file);
        const command = require(commandPath);
        // Use the command name as the key
        commands[command.name] = command;
    } catch (error) {
        console.error(`Failed to load command: \${file}`, error.message);
    }
}

// Export all commands
module.exports = commands;

// Only log if this file is run directly (not imported)
if (require.main === module) {
  console.log(`Loaded \${Object.keys(commands).length} commands from the commands directory`);
}