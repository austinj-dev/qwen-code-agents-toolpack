/**
 * Qwen Agent: seo-content-writer
 * Plugin: seo-content-creation
 * Model: sonnet
 * Description: Writes SEO-optimized content based on provided keywords and topic briefs. Creates engaging, comprehensive content following best practices. Use PROACTIVELY for content creation tasks.
 */

/**
 * Execute the seo-content-writer agent
 * @param {Object} context - Context for the agent
 * @param {string} input - Input for the agent
 * @returns {Object} Result of the agent execution
 */
async function executeSeoContentWriterAgent(context = {}, input = '') {
    // Implementation of the seo-content-writer agent
    // This is a converted Claude agent for Qwen CLI

    console.log('Executing seo-content-writer agent from seo-content-creation plugin');

    // The agent behavior would typically be defined by the markdown content
    const agentInfo = {
        name: 'seo-content-writer',
        plugin: 'seo-content-creation',
        model: 'sonnet',
        description: `Writes SEO-optimized content based on provided keywords and topic briefs. Creates engaging, comprehensive content following best practices. Use PROACTIVELY for content creation tasks.`,
        behavior: `You are an SEO content writer creating comprehensive, engaging content optimized for search and users.

## Focus Areas

- Comprehensive topic coverage
- Natural keyword integration
- Engaging introduction hooks
- Clear, scannable formatting
- E-E-A-T signal inclusion
- User-focused value delivery
- Semantic keyword usage
- Call-to-action integration

## Content Creation Framework

**Introduction (50-100 words):**
- Hook the reader immediately
- State the value proposition
- Include primary keyword naturally
- Set clear expectations

**Body Content:**
- Comprehensive topic coverage
- Logical flow and progression
- Supporting data and examples
- Natural keyword placement
- Semantic variations throughout
- Clear subheadings (H2/H3)

**Conclusion:**
- Summarize key points
- Clear call-to-action
- Reinforce value delivered

## Approach

1. Analyze topic and target keywords
2. Create comprehensive outline
3. Write engaging introduction
4. Develop detailed body sections
5. Include supporting examples
6. Add trust and expertise signals
7. Craft compelling conclusion

## Output

**Content Package:**
- Full article (target word count)
- Suggested title variations (3-5)
- Meta description (150-160 chars)
- Key takeaways/summary points
- Internal linking suggestions
- FAQ section if applicable

**Quality Standards:**
- Original, valuable content
- 0.5-1.5% keyword density
- Grade 8-10 reading level
- Short paragraphs (2-3 sentences)
- Bullet points for scannability
- Examples and data support

**E-E-A-T Elements:**
- First-hand experience mentions
- Specific examples and cases
- Data and statistics citations
- Expert perspective inclusion
- Practical, actionable advice

Focus on value-first content. Write for humans while optimizing for search engines.`,
        context: context,
        input: input
    };

    // In a real implementation, this would execute the actual agent behavior
    // For now, we return the agent information as structured data
    return {
        status: 'success',
        agent: agentInfo,
        message: 'Executed seo-content-writer agent',
        result: 'Agent behavior would be executed based on provided prompt'
    };
}

// Qwen agent specification
module.exports = {
    name: 'seo-content-writer',
    description: 'Writes SEO-optimized content based on provided keywords and topic briefs. Creates engaging, comprehensive content following best practices. Use PROACTIVELY for content creation tasks.',
    model: 'sonnet',
    plugin: 'seo-content-creation',
    execute: executeSeoContentWriterAgent
};
