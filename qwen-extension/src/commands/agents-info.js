/**
 * Extension Command: agents-info
 * Get detailed information about a specific agent
 */

/**
 * Execute the agents-info command
 * @param {Object} args - Arguments for the command
 * @param {Object} context - Extension context
 * @returns {Object} Result of the command execution
 */
export async function handler(args = {}, context = {}) {
    const agentsModule = await import('../agents/index.js');
    const agents = agentsModule.default || agentsModule;
    
    let agentName = args._ && args._[0] ? args._[0] : args.agent;
    
    if (!agentName) {
        return {
            status: 'error',
            command: 'agents-info',
            message: 'Please specify an agent name'
        };
    }
    
    const agent = agents[agentName];
    if (!agent) {
        return {
            status: 'error',
            command: 'agents-info',
            message: `Agent '${agentName}' not found`
        };
    }
    
    console.log(`Agent: ${agent.name || agentName}`);
    console.log(`Description: ${agent.description || 'No description'}`);
    console.log(`Plugin: ${agent.plugin || 'Unknown'}`);
    console.log(`Model: ${agent.model || 'inherit'}`);
    
    if (args.verbose) {
        console.log(`\nBehavior: ${agent.behavior ? (agent.behavior.substring(0, 500) + '...') : 'Not available'}`);
    }
    
    return {
        status: 'success',
        command: 'agents-info',
        result: agent,
        message: `Information for agent ${agentName}`
    };
}

export default {
    name: 'agents-info',
    description: 'Get detailed information about a specific agent',
    handler
};