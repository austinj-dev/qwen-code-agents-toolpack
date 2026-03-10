/**
 * Extension Command: agents-list
 * List all available agents in the toolpack
 */

/**
 * Execute the agents-list command
 * @param {Object} args - Arguments for the command
 * @param {Object} context - Extension context
 * @returns {Object} Result of the command execution
 */
export async function handler(args = {}, context = {}) {
    // Import the agents from the converted set
    const agentsModule = await import('../agents/index.js');
    const agents = agentsModule.default || agentsModule;
    
    console.log('Available agents in the toolpack:');
    console.log('================================');
    
    const agentList = Object.keys(agents);
    for (const agentName of agentList) {
        const agent = agents[agentName];
        console.log(`- ${agentName}: ${agent.description || 'No description'}`);
    }
    
    console.log(`\nTotal agents: ${agentList.length}`);
    
    return {
        status: 'success',
        command: 'agents-list',
        result: {
            count: agentList.length,
            agents: agentList
        },
        message: `Listed ${agentList.length} agents`
    };
}

export default {
    name: 'agents-list',
    description: 'List all available agents in the toolpack',
    handler
};