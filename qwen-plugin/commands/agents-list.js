/**
 * Command: agents-list
 * Description: List all available agents in the toolpack
 */

/**
 * Execute the agents-list command
 * @param {Object} args - Arguments for the command
 * @param {Object} flags - Flags for the command
 * @returns {Object} Result of the command execution
 */
async function executeAgentsListCommand(args = {}, flags = {}) {
    // Load all agents from the agents index
    const agents = require('../agents/index.js');
    
    console.log('Available agents in the toolpack:');
    console.log('================================');
    
    const agentList = Object.keys(agents);
    for (const agentName of agentList) {
        const agent = agents[agentName];
        console.log(`- \${agentName}: \${agent.description}`);
    }
    
    console.log(`\nTotal agents: \${agentList.length}`);
    
    return {
        status: 'success',
        command: 'agents-list',
        result: {
            count: agentList.length,
            agents: agentList
        },
        message: `Listed \${agentList.length} agents`
    };
}

// Qwen command specification
module.exports = {
    name: 'agents-list',
    description: 'List all available agents in the toolpack',
    plugin: 'agents-toolpack',
    args: [],
    flags: [
        {
            name: 'format',
            description: 'Output format (json, table)',
            type: 'string',
            default: 'table'
        }
    ],
    handler: executeAgentsListCommand
};