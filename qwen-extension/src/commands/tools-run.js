/**
 * Extension Command: tools-run
 * Run a specific tool from the toolpack
 */

/**
 * Execute the tools-run command
 * @param {Object} args - Arguments for the command
 * @param {Object} context - Extension context
 * @returns {Object} Result of the command execution
 */
export async function handler(args = {}, context = {}) {
    const toolsModule = await import('../tools/index.js');
    const tools = toolsModule.default || toolsModule;
    
    let toolName = args._ && args._[0] ? args._[0] : args.tool;
    
    if (!toolName) {
        return {
            status: 'error',
            command: 'tools-run',
            message: 'Please specify a tool name'
        };
    }
    
    const tool = tools[toolName];
    if (!tool) {
        return {
            status: 'error',
            command: 'tools-run',
            message: `Tool '${toolName}' not found`
        };
    }
    
    console.log(`Running tool: ${tool.name || toolName}`);
    console.log(`Description: ${tool.description || 'No description'}`);
    
    // Execute the tool handler
    const result = await tool.handler(args.params || {});
    
    console.log(`Tool result:`, result.message);
    
    return {
        status: 'success',
        command: 'tools-run',
        result: result,
        message: `Executed tool ${toolName}`
    };
}

export default {
    name: 'tools-run',
    description: 'Run a specific tool from the toolpack',
    handler
};