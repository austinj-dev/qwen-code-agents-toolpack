/**
 * Qwen Extension: agents-toolpack
 * Main entry point for the extension
 */

/**
 * Initialize the extension
 * @param {Object} context - Qwen extension context
 * @returns {Object} Extension initialization result
 */
async function initialize(context) {
    console.log('Initializing agents-toolpack extension...');

    // Load tools and agents
    const toolsModule = await import('./tools/index.js');
    const agentsModule = await import('./agents/index.js');

    const tools = toolsModule.default || toolsModule;
    const agents = agentsModule.default || agentsModule;

    console.log(`Loaded ${Object.keys(tools).length} tools`);
    console.log(`Loaded ${Object.keys(agents).length} agents`);

    // The tools and agents should be automatically available to Qwen's AI
    // based on the extension configuration

    // Return extension information
    return {
        status: 'success',
        name: 'qwen-agents-toolpack',
        version: '1.0.0',
        tools: Object.keys(tools),
        agents: Object.keys(agents),
        message: 'agents-toolpack extension initialized successfully'
    };
}

/**
 * Export the extension interface
 */
export default {
    name: 'qwen-agents-toolpack',
    description: 'Port of 65+ Claude agent plugins with 152+ agents and 61+ tools',
    version: '1.0.0',
    initialize,
    // Export other extension metadata that Qwen might use
    metadata: {
        author: 'Seth Hobson',
        license: 'MIT',
        keywords: ['agents', 'tools', 'ai', 'development', 'infrastructure', 'security'],
        categories: ['ai', 'development', 'productivity']
    }
};