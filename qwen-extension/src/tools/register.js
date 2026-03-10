/**
 * Qwen Extension: Tool Registration Helper
 * Provides proper integration with Qwen's tool system
 */

import tools from './tools/index.js';

/**
 * Register tools with Qwen's tool system
 * @param {Object} context - Extension context
 * @returns {Array} Array of properly formatted tools for Qwen
 */
function registerTools(context) {
    const qwenFormattedTools = [];
    
    for (const [name, tool] of Object.entries(tools)) {
        // Ensure each tool follows Qwen's tool specification
        const qwenTool = {
            name: tool.name || name,
            description: tool.description || 'No description',
            parameters: tool.parameters || {
                type: 'object',
                properties: {},
                required: []
            },
            handler: tool.handler || (() => ({ status: 'error', message: 'No handler defined' })),
            // Additional Qwen tool properties
            category: 'agents-toolpack',
            tags: ['agents', 'tools', 'converted']
        };
        
        qwenFormattedTools.push(qwenTool);
    }
    
    console.log(`Registered ${qwenFormattedTools.length} tools with Qwen tool system`);
    return qwenFormattedTools;
}

export { registerTools, tools };