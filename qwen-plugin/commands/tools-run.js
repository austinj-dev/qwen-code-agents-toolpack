/**
 * Command: tools-run
 * Description: Run a specific tool from the toolpack
 */

/**
 * Execute the tools-run command
 * @param {Object} args - Arguments for the command
 * @param {Object} flags - Flags for the command
 * @returns {Object} Result of the command execution
 */
async function executeToolsRunCommand(args = {}, flags = {}) {
    const tools = require('../tools/index.js');
    
    if (!args.tool) {
        return {
            status: 'error',
            command: 'tools-run',
            message: 'Please specify a tool name'
        };
    }
    
    const tool = tools[args.tool];
    if (!tool) {
        return {
            status: 'error',
            command: 'tools-run',
            message: `Tool '\${args.tool}' not found`
        };
    }
    
    console.log(`Running tool: \${tool.name}`);
    console.log(`Description: \${tool.description}`);
    
    // Execute the tool handler
    const result = await tool.handler(args.params || {});
    
    console.log(`Tool result:`, result.message);
    
    return {
        status: 'success',
        command: 'tools-run',
        result: result,
        message: `Executed tool \${args.tool}`
    };
}

// Qwen command specification
module.exports = {
    name: 'tools-run',
    description: 'Run a specific tool from the toolpack',
    plugin: 'agents-toolpack',
    args: [
        {
            name: 'tool',
            description: 'Tool name to run',
            required: true,
        }
    ],
    flags: [
        {
            name: 'params',
            description: 'Parameters to pass to the tool',
            type: 'string',
        }
    ],
    handler: executeToolsRunCommand
};