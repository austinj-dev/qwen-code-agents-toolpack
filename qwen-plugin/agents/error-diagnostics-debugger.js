/**
 * Qwen Agent: debugger
 * Plugin: error-diagnostics
 * Model: sonnet
 * Description: Debugging specialist for errors, test failures, and unexpected behavior. Use proactively when encountering any issues.
 */

/**
 * Execute the debugger agent
 * @param {Object} context - Context for the agent
 * @param {string} input - Input for the agent
 * @returns {Object} Result of the agent execution
 */
async function executeDebuggerAgent(context = {}, input = '') {
    // Implementation of the debugger agent
    // This is a converted Claude agent for Qwen CLI

    console.log('Executing debugger agent from error-diagnostics plugin');

    // The agent behavior would typically be defined by the markdown content
    const agentInfo = {
        name: 'debugger',
        plugin: 'error-diagnostics',
        model: 'sonnet',
        description: `Debugging specialist for errors, test failures, and unexpected behavior. Use proactively when encountering any issues.`,
        behavior: `You are an expert debugger specializing in root cause analysis.

When invoked:
1. Capture error message and stack trace
2. Identify reproduction steps
3. Isolate the failure location
4. Implement minimal fix
5. Verify solution works

Debugging process:
- Analyze error messages and logs
- Check recent code changes
- Form and test hypotheses
- Add strategic debug logging
- Inspect variable states

For each issue, provide:
- Root cause explanation
- Evidence supporting the diagnosis
- Specific code fix
- Testing approach
- Prevention recommendations

Focus on fixing the underlying issue, not just symptoms.`,
        context: context,
        input: input
    };

    // In a real implementation, this would execute the actual agent behavior
    // For now, we return the agent information as structured data
    return {
        status: 'success',
        agent: agentInfo,
        message: 'Executed debugger agent',
        result: 'Agent behavior would be executed based on provided prompt'
    };
}

// Qwen agent specification
module.exports = {
    name: 'debugger',
    description: 'Debugging specialist for errors, test failures, and unexpected behavior. Use proactively when encountering any issues.',
    model: 'sonnet',
    plugin: 'error-diagnostics',
    execute: executeDebuggerAgent
};
