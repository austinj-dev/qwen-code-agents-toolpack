/**
 * Main Entry Point for Qwen CLI Plugin
 * agents-toolpack
 */

/**
 * Initialize the agents toolpack plugin
 * @returns {Object} Plugin initialization result
 */
async function initializePlugin() {
    console.log('Initializing agents-toolpack plugin...');
    
    // Load tools, agents, and commands
    const tools = require('./tools/index.js');
    const agents = require('./agents/index.js');
    const commands = require('./commands/index.js');
    
    console.log(`Loaded \${Object.keys(tools).length} tools`);
    console.log(`Loaded \${Object.keys(agents).length} agents`);
    console.log(`Loaded \${Object.keys(commands).length} commands`);
    
    return {
        status: 'success',
        tools: Object.keys(tools),
        agents: Object.keys(agents),
        commands: Object.keys(commands),
        message: 'agents-toolpack initialized successfully'
    };
}

// Export plugin initialization
module.exports = {
    name: 'agents-toolpack',
    description: 'Port of 65+ advanced agent plugins for Qwen Code CLI',
    version: '1.0.0',
    initialize: initializePlugin
};

// Initialize the plugin when loaded
initializePlugin()
    .then(result => {
        console.log(result.message);
    })
    .catch(error => {
        console.error('Failed to initialize plugin:', error);
    });