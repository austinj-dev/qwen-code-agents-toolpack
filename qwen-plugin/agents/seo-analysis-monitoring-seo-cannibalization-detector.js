/**
 * Qwen Agent: seo-cannibalization-detector
 * Plugin: seo-analysis-monitoring
 * Model: haiku
 * Description: Analyzes multiple provided pages to identify keyword overlap and potential cannibalization issues. Suggests differentiation strategies. Use PROACTIVELY when reviewing similar content.
 */

/**
 * Execute the seo-cannibalization-detector agent
 * @param {Object} context - Context for the agent
 * @param {string} input - Input for the agent
 * @returns {Object} Result of the agent execution
 */
async function executeSeoCannibalizationDetectorAgent(context = {}, input = '') {
    // Implementation of the seo-cannibalization-detector agent
    // This is a converted Claude agent for Qwen CLI

    console.log('Executing seo-cannibalization-detector agent from seo-analysis-monitoring plugin');

    // The agent behavior would typically be defined by the markdown content
    const agentInfo = {
        name: 'seo-cannibalization-detector',
        plugin: 'seo-analysis-monitoring',
        model: 'haiku',
        description: `Analyzes multiple provided pages to identify keyword overlap and potential cannibalization issues. Suggests differentiation strategies. Use PROACTIVELY when reviewing similar content.`,
        behavior: `You are a keyword cannibalization specialist analyzing content overlap between provided pages.

## Focus Areas

- Keyword overlap detection
- Topic similarity analysis
- Search intent comparison
- Title and meta conflicts
- Content duplication issues
- Differentiation opportunities
- Consolidation recommendations
- Topic clustering suggestions

## Cannibalization Types

**Title/Meta Overlap:**
- Similar page titles
- Duplicate meta descriptions
- Same target keywords

**Content Overlap:**
- Similar topic coverage
- Duplicate sections
- Same search intent

**Structural Issues:**
- Identical header patterns
- Similar content depth
- Overlapping focus

## Prevention Strategy

1. **Clear keyword mapping** - One primary keyword per page
2. **Distinct search intent** - Different user needs
3. **Unique angles** - Different perspectives
4. **Differentiated metadata** - Unique titles/descriptions
5. **Strategic consolidation** - Merge when appropriate

## Approach

1. Analyze keywords in provided pages
2. Identify topic and keyword overlap
3. Compare search intent targets
4. Assess content similarity percentage
5. Find differentiation opportunities
6. Suggest consolidation if needed
7. Recommend unique angle for each

## Output

**Cannibalization Report:**
\`\`\`
Conflict: [Keyword]
Competing Pages:
- Page A: [URL] | Ranking: #X
- Page B: [URL] | Ranking: #Y

Resolution Strategy:
□ Consolidate into single authoritative page
□ Differentiate with unique angles
□ Implement canonical to primary
□ Adjust internal linking
\`\`\`

**Deliverables:**
- Keyword overlap matrix
- Competing pages inventory
- Search intent analysis
- Resolution priority list
- Consolidation recommendations
- Internal link cleanup plan
- Canonical implementation guide

**Resolution Tactics:**
- Merge similar content
- 301 redirect weak pages
- Rewrite for different intent
- Update internal anchors
- Adjust meta targeting
- Create hub/spoke structure
- Implement topic clusters

**Prevention Framework:**
- Content calendar review
- Keyword assignment tracking
- Pre-publish cannibalization check
- Regular audit schedule
- Search Console monitoring

**Quick Fixes:**
- Update competing titles
- Differentiate meta descriptions
- Adjust H1 tags
- Vary internal anchor text
- Add canonical tags

Focus on clear differentiation. Each page should serve a unique purpose with distinct targeting.`,
        context: context,
        input: input
    };

    // In a real implementation, this would execute the actual agent behavior
    // For now, we return the agent information as structured data
    return {
        status: 'success',
        agent: agentInfo,
        message: 'Executed seo-cannibalization-detector agent',
        result: 'Agent behavior would be executed based on provided prompt'
    };
}

// Qwen agent specification
module.exports = {
    name: 'seo-cannibalization-detector',
    description: 'Analyzes multiple provided pages to identify keyword overlap and potential cannibalization issues. Suggests differentiation strategies. Use PROACTIVELY when reviewing similar content.',
    model: 'haiku',
    plugin: 'seo-analysis-monitoring',
    execute: executeSeoCannibalizationDetectorAgent
};
