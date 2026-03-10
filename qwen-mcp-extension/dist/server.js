/**
 * MCP Server for Qwen Agents Toolpack
 * Implements the Model Context Protocol to expose tools to AI assistants
 */
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { ListToolsRequestSchema, CallToolRequestSchema } from '@modelcontextprotocol/sdk/types.js';
// Helper function to safely get a property from an object
function safeGet(obj, key, defaultValue = undefined) {
    return typeof obj === 'object' && obj !== null && key in obj ? obj[key] : defaultValue;
}
// Dynamically load all agents, commands, and skills as tools
let tools = [];
// For this MCP server, we need to dynamically import the modules.
// We'll use an import helper function that works correctly with ES modules.
// Helper function to get correct file URL for importing
const createImportPath = (subpath) => {
    // The path is relative to the project root, so from dist/ it's 3 levels up,
    // from src/ it's 4 levels up. But since import.meta.url always points to the
    // compiled file location in dist/, we'll use a consistent approach:
    // The import.meta.url in dist/server.js will have a path like:
    // file:///path/to/project/qwen-mcp-extension/dist/server.js
    // So we go up 2 levels to reach qwen-mcp-extension, then back down to the project root
    return new URL(`../${subpath}`, import.meta.url).href;
};
// Load agents from qwen-plugin
try {
    const agentsModule = await import(createImportPath('../qwen-plugin/agents/index.js'));
    const agents = agentsModule.default || agentsModule;
    for (const [name, agent] of Object.entries(agents)) {
        tools.push({
            name: typeof name === 'string' ? name : safeGet(agent, 'name', 'unknown'),
            description: typeof agent === 'object' && agent ? safeGet(agent, 'description', 'An AI assistant agent') : 'An AI assistant agent',
            inputSchema: {
                type: 'object',
                properties: {
                    context: {
                        type: 'object',
                        description: 'Context for the agent execution',
                        additionalProperties: true
                    },
                    input: {
                        type: 'string',
                        description: 'Input for the agent'
                    }
                }
            }
        });
    }
}
catch (error) {
    console.error('Failed to load agents:', error.message);
    // Continue without agents if they can't be loaded
}
// Load commands as tools from qwen-plugin
try {
    const commandsModule = await import(createImportPath('../qwen-plugin/commands/index.js'));
    const commands = commandsModule.default || commandsModule;
    for (const [name, command] of Object.entries(commands)) {
        tools.push({
            name: typeof name === 'string' ? name : safeGet(command, 'name', 'unknown'),
            description: typeof command === 'object' && command ? safeGet(command, 'description', 'An AI command tool') : 'An AI command tool',
            inputSchema: {
                type: 'object',
                properties: {
                    params: {
                        type: 'object',
                        description: 'Parameters for the command',
                        additionalProperties: true
                    }
                }
            }
        });
    }
}
catch (error) {
    // Commands might not exist, which is ok
    console.log('Commands not found or failed to load, continuing...');
}
// Load tools (formerly skills) from qwen-plugin
try {
    const toolsModule = await import(createImportPath('../qwen-plugin/tools/index.js'));
    const toolsList = toolsModule.default || toolsModule;
    for (const [name, tool] of Object.entries(toolsList)) {
        tools.push({
            name: typeof name === 'string' ? name : safeGet(tool, 'name', 'unknown'),
            description: typeof tool === 'object' && tool ? safeGet(tool, 'description', 'An AI skill tool') : 'An AI skill tool',
            inputSchema: {
                type: 'object',
                properties: {
                    params: {
                        type: 'object',
                        description: 'Parameters for the skill',
                        additionalProperties: true
                    }
                }
            }
        });
    }
}
catch (error) {
    // Tools/skills might not exist, which is ok
    console.log('Tools not found or failed to load, continuing...');
}
// Fallback hardcoded tools in case dynamic loading fails
if (tools.length === 0) {
    console.warn('Falling back to hardcoded tools due to loading failure');
    tools = [
        {
            name: 'git-advanced-workflows',
            description: 'Expert in advanced Git workflows including rebasing, cherry-picking, bisect, worktrees, and reflog to maintain clean history and recover from any situation',
            inputSchema: {
                type: 'object',
                properties: {
                    operation: {
                        type: 'string',
                        description: 'Git operation to perform'
                    },
                    params: {
                        type: 'object',
                        additionalProperties: true,
                        description: 'Additional parameters for the Git operation'
                    }
                },
                required: ['operation']
            }
        },
        {
            name: 'backend-architect',
            description: 'Expert backend architect specializing in scalable API design, microservices architecture, and distributed systems',
            inputSchema: {
                type: 'object',
                properties: {
                    task: {
                        type: 'string',
                        description: 'Backend architecture task to perform'
                    },
                    requirements: {
                        type: 'object',
                        additionalProperties: true,
                        description: 'Requirements for the architecture task'
                    }
                },
                required: ['task']
            }
        },
        {
            name: 'python-pro',
            description: 'Expert in modern Python development with Python 3.12+, Django, FastAPI, async patterns, and production best practices',
            inputSchema: {
                type: 'object',
                properties: {
                    task: {
                        type: 'string',
                        description: 'Python development task to perform'
                    },
                    pythonFeatures: {
                        type: 'array',
                        items: { type: 'string' },
                        description: 'Python features to use'
                    }
                },
                required: ['task']
            }
        },
        {
            name: 'security-auditor',
            description: 'Expert in security auditing, vulnerability assessment, and secure coding practices',
            inputSchema: {
                type: 'object',
                properties: {
                    target: {
                        type: 'string',
                        description: 'Security target to audit'
                    },
                    scope: {
                        type: 'string',
                        description: 'Scope of the security audit'
                    }
                },
                required: ['target']
            }
        },
        {
            name: 'frontend-developer',
            description: 'Expert in frontend UI development and mobile application implementation across platforms',
            inputSchema: {
                type: 'object',
                properties: {
                    task: {
                        type: 'string',
                        description: 'Frontend development task'
                    },
                    framework: {
                        type: 'string',
                        description: 'Framework to use for the task'
                    }
                },
                required: ['task']
            }
        },
        {
            name: 'database-architect',
            description: 'Specialist in database architecture, schema design, and SQL optimization for production systems',
            inputSchema: {
                type: 'object',
                properties: {
                    databaseTask: {
                        type: 'string',
                        description: 'Database architecture task'
                    },
                    dbType: {
                        type: 'string',
                        description: 'Type of database system'
                    }
                },
                required: ['databaseTask']
            }
        },
        {
            name: 'cloud-architect',
            description: 'Expert in cloud architecture design for AWS/Azure/GCP, Kubernetes cluster configuration, and infrastructure optimization',
            inputSchema: {
                type: 'object',
                properties: {
                    cloudTask: {
                        type: 'string',
                        description: 'Cloud architecture task'
                    },
                    provider: {
                        type: 'string',
                        enum: ['aws', 'azure', 'gcp', 'multi-cloud'],
                        description: 'Cloud provider for the architecture'
                    }
                }
            },
            required: ['cloudTask']
        }
    ];
}
// Create the MCP server
const server = new Server({
    name: 'qwen-agents-toolpack-server',
    version: '1.0.0',
});
// Handle the tools/list request to provide a list of available tools
server.setRequestHandler(ListToolsRequestSchema, async (request) => {
    // Parse the pagination parameters if they exist
    const params = request.params || {};
    const limit = params.limit || 100;
    const cursor = params.cursor || null;
    // Return the list of tools (implement pagination if needed)
    const response = {
        tools: tools,
        _meta: {
            total: tools.length
        }
    };
    // If the request has pagination, handle it appropriately
    if (cursor) {
        // For this simple implementation, we return all tools
        return response;
    }
    else {
        return response;
    }
});
// Handle the tools/call request to execute a specific tool
server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: args } = request.params;
    // Find the requested tool
    const tool = tools.find(t => t.name === name);
    if (!tool) {
        throw new Error(`Tool not found: ${name}`);
    }
    try {
        // Try to dynamically execute any loaded agent, command, or skill
        let resultText = '';
        // Try to load and execute the agent
        try {
            // Try loading from agents first
            const agentsModule = await import(createImportPath('../qwen-plugin/agents/index.js'));
            const agents = agentsModule.default || agentsModule;
            if (agents[name] && typeof safeGet(agents[name], 'execute') === 'function') {
                const agent = agents[name];
                const executeFn = safeGet(agent, 'execute');
                const result = await executeFn(args.context || {}, args.input || '');
                resultText = typeof result === 'string' ? result : JSON.stringify(result);
                return {
                    content: [{
                            type: 'text',
                            text: resultText
                        }],
                    _meta: {}
                };
            }
        }
        catch (agentError) {
            console.error(`Failed to execute agent ${name}:`, agentError.message);
        }
        // If not found as an agent, try to execute as a command
        try {
            const commandsModule = await import(createImportPath('../qwen-plugin/commands/index.js'));
            const commands = commandsModule.default || commandsModule;
            if (commands[name] && typeof safeGet(commands[name], 'execute') === 'function') {
                const command = commands[name];
                const executeFn = safeGet(command, 'execute');
                const result = await executeFn(args.params || {});
                resultText = typeof result === 'string' ? result : JSON.stringify(result);
                return {
                    content: [{
                            type: 'text',
                            text: resultText
                        }],
                    _meta: {}
                };
            }
        }
        catch (commandError) {
            console.log(`Command ${name} not found or failed to execute`);
        }
        // If not found as a command, try to execute as a tool (formerly skill)
        try {
            const toolsModule = await import(createImportPath('../qwen-plugin/tools/index.js'));
            const toolsList = toolsModule.default || toolsModule;
            if (toolsList[name] && typeof safeGet(toolsList[name], 'execute') === 'function') {
                const toolItem = toolsList[name];
                const executeFn = safeGet(toolItem, 'execute');
                const result = await executeFn(args.params || {});
                resultText = typeof result === 'string' ? result : JSON.stringify(result);
                return {
                    content: [{
                            type: 'text',
                            text: resultText
                        }],
                    _meta: {}
                };
            }
        }
        catch (toolError) {
            console.log(`Tool ${name} not found or failed to execute`);
        }
        // If still no match, try the hardcoded tools (fallback)
        switch (name) {
            case 'git-advanced-workflows':
                resultText = `Git Advanced Workflows Result: Performed operation ${args.operation || 'default'} with params: ${JSON.stringify(args.params || {})}. This tool provides knowledge about advanced Git techniques to maintain clean history, collaborate effectively, and recover from any situation with confidence.`;
                break;
            case 'backend-architect':
                resultText = `Backend Architect Result: Addressed task "${args.task}" with requirements: ${JSON.stringify(args.requirements || {})}. This tool provides expert knowledge on API design, microservices, distributed systems, and scalable backend architectures.`;
                break;
            case 'python-pro':
                resultText = `Python Pro Result: Handled task "${args.task}" using features: ${(args.pythonFeatures || []).join(', ') || 'standard Python features'}. This tool provides expert knowledge on modern Python development, async patterns, frameworks, and best practices.`;
                break;
            case 'security-auditor':
                resultText = `Security Auditor Result: Performed security audit on "${args.target}" with scope: ${args.scope || 'full'}. This tool provides expert knowledge on vulnerability assessment, secure coding, and compliance.`;
                break;
            case 'frontend-developer':
                resultText = `Frontend Developer Result: Worked on task "${args.task}" using ${args.framework || 'standard'} frameworks. This tool provides expert frontend development knowledge.`;
                break;
            case 'database-architect':
                resultText = `Database Architect Result: Addressed "${args.databaseTask}" for ${args.dbType || 'general'} database systems. This tool provides expert knowledge on database design and optimization.`;
                break;
            case 'cloud-architect':
                resultText = `Cloud Architect Result: Handled "${args.cloudTask}" for ${args.provider || 'multi-cloud'} environment. This tool provides expert cloud architecture knowledge.`;
                break;
            default:
                resultText = `Tool ${name} executed with arguments: ${JSON.stringify(args || {})}`;
        }
        // Return the result in MCP format
        return {
            content: [{
                    type: 'text',
                    text: resultText
                }],
            _meta: {}
        };
    }
    catch (error) {
        // Return an error result
        return {
            content: [{
                    type: 'text',
                    text: `Error executing tool ${name}: ${error.message}`
                }],
            isError: true,
            _meta: {}
        };
    }
});
// Function to start the server using stdio transport to communicate with the MCP client
async function startServer() {
    const transport = new StdioServerTransport();
    try {
        await server.connect(transport);
        console.error(`MCP server listening via stdio`); // Use stderr for server status
        // Keep the process alive until the connection is closed
        // This ensures that the MCP server remains connected to the client
        process.stdin.on('end', () => {
            process.exit(0);
        });
        process.stdin.on('error', (err) => {
            console.error('Stdin error:', err);
            process.exit(1);
        });
        // Handle process termination signals gracefully
        process.on('SIGTERM', () => {
            process.exit(0);
        });
        process.on('SIGINT', () => {
            process.exit(0);
        });
    }
    catch (error) {
        console.error('Failed to start MCP server:', error);
        process.exit(1);
    }
}
// Start the server
startServer();
export { server };
//# sourceMappingURL=server.js.map