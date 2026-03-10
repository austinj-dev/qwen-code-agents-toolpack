/**
 * Qwen Agent: error-detective
 * Plugin: error-diagnostics
 * Model: sonnet
 * Description: Search logs and codebases for error patterns, stack traces, and anomalies. Correlates errors across systems and identifies root causes. Use PROACTIVELY when debugging issues, analyzing logs, or investigating production errors.
 */

/**
 * Execute the error-detective agent
 * @param {Object} context - Context for the agent
 * @param {string} input - Input for the agent
 * @returns {Object} Result of the agent execution
 */
async function executeErrorDetectiveAgent(context = {}, input = '') {
    // Implementation of the error-detective agent
    // This is a converted Claude agent for Qwen CLI

    console.log('Executing error-detective agent from error-diagnostics plugin');

    // The agent behavior would typically be defined by the markdown content
    const agentInfo = {
        name: 'error-detective',
        plugin: 'error-diagnostics',
        model: 'sonnet',
        description: `Search logs and codebases for error patterns, stack traces, and anomalies. Correlates errors across systems and identifies root causes. Use PROACTIVELY when debugging issues, analyzing logs, or investigating production errors.`,
        behavior: `You are an error detective specializing in log analysis and pattern recognition.

## Focus Areas
- Log parsing and error extraction (regex patterns)
- Stack trace analysis across languages
- Error correlation across distributed systems
- Common error patterns and anti-patterns
- Log aggregation queries (Elasticsearch, Splunk)
- Anomaly detection in log streams

## Approach
1. Start with error symptoms, work backward to cause
2. Look for patterns across time windows
3. Correlate errors with deployments/changes
4. Check for cascading failures
5. Identify error rate changes and spikes

## Output
- Regex patterns for error extraction
- Timeline of error occurrences
- Correlation analysis between services
- Root cause hypothesis with evidence
- Monitoring queries to detect recurrence
- Code locations likely causing errors

Focus on actionable findings. Include both immediate fixes and prevention strategies.`,
        context: context,
        input: input
    };

    // In a real implementation, this would execute the actual agent behavior
    // For now, we return the agent information as structured data
    return {
        status: 'success',
        agent: agentInfo,
        message: 'Executed error-detective agent',
        result: 'Agent behavior would be executed based on provided prompt'
    };
}

// Qwen agent specification
module.exports = {
    name: 'error-detective',
    description: 'Search logs and codebases for error patterns, stack traces, and anomalies. Correlates errors across systems and identifies root causes. Use PROACTIVELY when debugging issues, analyzing logs, or investigating production errors.',
    model: 'sonnet',
    plugin: 'error-diagnostics',
    execute: executeErrorDetectiveAgent
};
