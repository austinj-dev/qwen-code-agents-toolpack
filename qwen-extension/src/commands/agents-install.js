/**
 * Extension Command: agents-install
 * Install agents from the toolpack
 */

/**
 * Execute the agents-install command
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
            command: 'agents-install',
            message: 'Please specify an agent name or "all" to install all agents'
        };
    }
    
    let agentsToInstall = [];
    if (agentName === 'all') {
        // Install all agents
        agentsToInstall = Object.keys(agents);
    } else {
        // Install specific agent
        if (agents[agentName]) {
            agentsToInstall = [agentName];
        } else {
            return {
                status: 'error',
                command: 'agents-install',
                message: `Agent '${agentName}' not found`
            };
        }
    }
    
    console.log(`Installing ${agentsToInstall.length} agent(s)...`);
    
    for (const name of agentsToInstall) {
        console.log(`- Installing: ${name}`);
        // In a real implementation, this would register the agent with Qwen
    }
    
    return {
        status: 'success',
        command: 'agents-install',
        result: {
            installed: agentsToInstall,
            count: agentsToInstall.length
        },
        message: `Installed ${agentsToInstall.length} agent(s)`
    };
}

export default {
    name: 'agents-install',
    description: 'Install agents from the toolpack',
    handler
};