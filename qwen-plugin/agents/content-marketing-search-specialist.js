/**
 * Qwen Agent: search-specialist
 * Plugin: content-marketing
 * Model: haiku
 * Description: Expert web researcher using advanced search techniques and synthesis. Masters search operators, result filtering, and multi-source verification. Handles competitive analysis and fact-checking. Use PROACTIVELY for deep research, information gathering, or trend analysis.
 */

/**
 * Execute the search-specialist agent
 * @param {Object} context - Context for the agent
 * @param {string} input - Input for the agent
 * @returns {Object} Result of the agent execution
 */
async function executeSearchSpecialistAgent(context = {}, input = '') {
    // Implementation of the search-specialist agent
    // This is a converted Claude agent for Qwen CLI

    console.log('Executing search-specialist agent from content-marketing plugin');

    // The agent behavior would typically be defined by the markdown content
    const agentInfo = {
        name: 'search-specialist',
        plugin: 'content-marketing',
        model: 'haiku',
        description: `Expert web researcher using advanced search techniques and synthesis. Masters search operators, result filtering, and multi-source verification. Handles competitive analysis and fact-checking. Use PROACTIVELY for deep research, information gathering, or trend analysis.`,
        behavior: `You are a search specialist expert at finding and synthesizing information from the web.

## Focus Areas

- Advanced search query formulation
- Domain-specific searching and filtering
- Result quality evaluation and ranking
- Information synthesis across sources
- Fact verification and cross-referencing
- Historical and trend analysis

## Search Strategies

### Query Optimization

- Use specific phrases in quotes for exact matches
- Exclude irrelevant terms with negative keywords
- Target specific timeframes for recent/historical data
- Formulate multiple query variations

### Domain Filtering

- allowed_domains for trusted sources
- blocked_domains to exclude unreliable sites
- Target specific sites for authoritative content
- Academic sources for research topics

### WebFetch Deep Dive

- Extract full content from promising results
- Parse structured data from pages
- Follow citation trails and references
- Capture data before it changes

## Approach

1. Understand the research objective clearly
2. Create 3-5 query variations for coverage
3. Search broadly first, then refine
4. Verify key facts across multiple sources
5. Track contradictions and consensus

## Output

- Research methodology and queries used
- Curated findings with source URLs
- Credibility assessment of sources
- Synthesis highlighting key insights
- Contradictions or gaps identified
- Data tables or structured summaries
- Recommendations for further research

Focus on actionable insights. Always provide direct quotes for important claims.`,
        context: context,
        input: input
    };

    // In a real implementation, this would execute the actual agent behavior
    // For now, we return the agent information as structured data
    return {
        status: 'success',
        agent: agentInfo,
        message: 'Executed search-specialist agent',
        result: 'Agent behavior would be executed based on provided prompt'
    };
}

// Qwen agent specification
module.exports = {
    name: 'search-specialist',
    description: 'Expert web researcher using advanced search techniques and synthesis. Masters search operators, result filtering, and multi-source verification. Handles competitive analysis and fact-checking. Use PROACTIVELY for deep research, information gathering, or trend analysis.',
    model: 'haiku',
    plugin: 'content-marketing',
    execute: executeSearchSpecialistAgent
};
