/**
 * TypeScript Definitions for Qwen CLI Agents Toolpack
 * Provides type definitions for tools, agents, and commands
 */

// Tool interface
interface QwenTool {
  name: string;
  description: string;
  parameters?: {
    type: string;
    properties: Record<string, any>;
    required?: string[];
  };
  handler: (params?: any) => Promise<any>;
}

// Agent interface
interface QwenAgent {
  name: string;
  description: string;
  model: string;
  plugin: string;
  execute: (context?: any, input?: string) => Promise<any>;
}

// Command interface
interface QwenCommand {
  name: string;
  description: string;
  plugin: string;
  args?: Array<{
    name: string;
    description: string;
    required?: boolean;
  }>;
  flags?: Array<{
    name: string;
    description: string;
    type?: string;
    default?: any;
  }>;
  handler: (args?: any, flags?: any) => Promise<any>;
}

// Plugin interface
interface QwenPlugin {
  name: string;
  description: string;
  version: string;
  initialize: () => Promise<any>;
}

// All tools
interface ToolsIndex {
  [key: string]: QwenTool;
}

// All agents  
interface AgentsIndex {
  [key: string]: QwenAgent;
}

// All commands
interface CommandsIndex {
  [key: string]: QwenCommand;
}

// Export interfaces
declare const tools: ToolsIndex;
declare const agents: AgentsIndex;
declare const commands: CommandsIndex;

// Plugin export
export { QwenTool, QwenAgent, QwenCommand, QwenPlugin, tools, agents, commands };