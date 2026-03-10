/**
 * Command: agents-info
 * Description: Get detailed information about a specific agent
 */

/**
 * Execute the agents-info command
 * @param {Object} args - Arguments for the command
 * @param {Object} flags - Flags for the command
 * @returns {Object} Result of the command execution
 */
async function executeAgentsInfoCommand(args = {}, flags = {}) {
    const agents = require('../agents/index.js');
    
    if (!args.agent) {
        return {
            status: 'error',
            command: 'agents-info',
            message: 'Please specify an agent name'
        };
    }
    
    const agent = agents[args.agent];
    if (!agent) {
        return {
            status: 'error',
            command: 'agents-info',
            message: `Agent '\${args.agent}' not found`
        };
    }
    
    console.log(`Agent: \${agent.name}`);
    console.log(`Description: \${agent.description}`);
    console.log(`Plugin: \${agent.plugin}`);
    console.log(`Model: \${agent.model || 'inherit'}`);
    
    if (flags.verbose) {
        console.log(`\nBehavior:\n\${agent.behavior ? agent.behavior.substring(0, 500) + '...' : 'Not available'}`);
    }
    
    return {
        status: 'success',
        command: 'agents-info',
        result: agent,
        message: `Information for agent \${args.agent}`
    };
}

// Qwen command specification
module.exports = {
    name: 'agents-info',
    description: 'Get detailed information about a specific agent',
    plugin: 'agents-toolpack',
    args: [
        {
            name: 'agent',
            description: 'Agent name to get information for',
            required: true,
        }
    ],
    flags: [
        {
            name: 'verbose',
            description: 'Show detailed behavior information',
            type: 'boolean',
            default: false
        }
    ],
    handler: executeAgentsInfoCommand
};