/**
 * Extension Command: agents-use
 * Activate or use a specific agent
 */

/**
 * Execute the agents-use command
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
            command: 'agents-use',
            message: 'Please specify an agent name'
        };
    }
    
    const agent = agents[agentName];
    if (!agent) {
        return {
            status: 'error',
            command: 'agents-use',
            message: `Agent '${agentName}' not found`
        };
    }
    
    console.log(`Activating agent: ${agent.name || agentName}`);
    console.log(`Description: ${agent.description || 'No description'}`);
    
    // In a real implementation, this would make the agent available for use
    return {
        status: 'success',
        command: 'agents-use',
        result: {
            agent: agentName,
            activated: true,
            description: agent.description
        },
        message: `Agent ${agentName} is now ready for use`
    };
}

export default {
    name: 'agents-use',
    description: 'Activate or use a specific agent',
    handler
};