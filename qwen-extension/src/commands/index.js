/**
 * Commands Index for Qwen Extension
 * Exports all extension commands
 */

import agentsList from './commands/agents-list.js';
import agentsInstall from './commands/agents-install.js';
import agentsInfo from './commands/agents-info.js';
import agentsUse from './commands/agents-use.js';
import toolsRun from './commands/tools-run.js';

// Create a commands object with all imported commands
const commands = {
  'agents-list': agentsList.default || agentsList,
  'agents-install': agentsInstall.default || agentsInstall,
  'agents-info': agentsInfo.default || agentsInfo,
  'agents-use': agentsUse.default || agentsUse,
  'tools-run': toolsRun.default || toolsRun
};

export default commands;