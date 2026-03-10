/**
 * Command: agents-use
 * Description: Activate or use a specific agent
 */

/**
 * Execute the agents-use command
 * @param {Object} args - Arguments for the command
 * @param {Object} flags - Flags for the command
 * @returns {Object} Result of the command execution
 */
async function executeAgentsUseCommand(args = {}, flags = {}) {
    const agents = require('../agents/index.js');
    
    if (!args.agent) {
        return {
            status: 'error',
            command: 'agents-use',
            message: 'Please specify an agent name'
        };
    }
    
    const agent = agents[args.agent];
    if (!agent) {
        return {
            status: 'error',
            command: 'agents-use',
            message: `Agent '\${args.agent}' not found`
        };
    }
    
    console.log(`Activating agent: \${agent.name}`);
    console.log(`Description: \${agent.description}`);
    
    // In a real implementation, this would initialize the agent for use
    // For now, we indicate that the agent is ready for use
    
    return {
        status: 'success',
        command: 'agents-use',
        result: {
            agent: args.agent,
            activated: true,
            description: agent.description
        },
        message: `Agent \${args.agent} is now active`
    };
}

// Qwen command specification
module.exports = {
    name: 'agents-use',
    description: 'Activate or use a specific agent',
    plugin: 'agents-toolpack',
    args: [
        {
            name: 'agent',
            description: 'Agent name to activate',
            required: true,
        }
    ],
    flags: [],
    handler: executeAgentsUseCommand
};