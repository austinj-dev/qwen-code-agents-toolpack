/**
 * Tools Index for Qwen CLI Plugin
 * Loads all converted Claude skills as Qwen tools
 */

const fs = require('fs');
const path = require('path');

// Dynamically load all tools from the current directory
const toolsDir = __dirname;  // Current directory
const tools = {};

// Read all JavaScript files in the tools directory
const toolFiles = fs.readdirSync(toolsDir).filter(file => file.endsWith('.js') && file !== 'index.js');

for (const file of toolFiles) {
    try {
        const toolPath = path.join(toolsDir, file);
        const tool = require(toolPath);
        // Use the tool name as the key
        tools[tool.name] = tool;
    } catch (error) {
        console.error(`Failed to load tool: \${file}`, error.message);
    }
}

// Export all tools
module.exports = tools;

// Only log if this file is run directly (not imported)
if (require.main === module) {
  console.log(`Loaded \${Object.keys(tools).length} tools from the tools directory`);
}