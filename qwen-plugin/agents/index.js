/**
 * Agents Index for Qwen CLI Plugin
 * Loads all converted Claude agents as Qwen agents
 */

const fs = require('fs');
const path = require('path');

// Dynamically load all agents from the current directory
const agentsDir = __dirname;  // Current directory
const agents = {};

// Read all JavaScript files in the agents directory
const agentFiles = fs.readdirSync(agentsDir).filter(file => file.endsWith('.js') && file !== 'index.js');

for (const file of agentFiles) {
    try {
        const agentPath = path.join(agentsDir, file);
        const agent = require(agentPath);
        // Use the agent name as the key
        agents[agent.name] = agent;
    } catch (error) {
        console.error(`Failed to load agent: \${file}`, error.message);
    }
}

// Export all agents
module.exports = agents;

// Only log if this file is run directly (not imported)
if (require.main === module) {
  console.log(`Loaded \${Object.keys(agents).length} agents from the agents directory`);
}