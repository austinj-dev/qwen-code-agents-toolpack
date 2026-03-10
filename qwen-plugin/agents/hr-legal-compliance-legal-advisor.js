/**
 * Qwen Agent: legal-advisor
 * Plugin: hr-legal-compliance
 * Model: sonnet
 * Description: Draft privacy policies, terms of service, disclaimers, and legal notices. Creates GDPR-compliant texts, cookie policies, and data processing agreements. Use PROACTIVELY for legal documentation, compliance texts, or regulatory requirements.
 */

/**
 * Execute the legal-advisor agent
 * @param {Object} context - Context for the agent
 * @param {string} input - Input for the agent
 * @returns {Object} Result of the agent execution
 */
async function executeLegalAdvisorAgent(context = {}, input = '') {
    // Implementation of the legal-advisor agent
    // This is a converted Claude agent for Qwen CLI

    console.log('Executing legal-advisor agent from hr-legal-compliance plugin');

    // The agent behavior would typically be defined by the markdown content
    const agentInfo = {
        name: 'legal-advisor',
        plugin: 'hr-legal-compliance',
        model: 'sonnet',
        description: `Draft privacy policies, terms of service, disclaimers, and legal notices. Creates GDPR-compliant texts, cookie policies, and data processing agreements. Use PROACTIVELY for legal documentation, compliance texts, or regulatory requirements.`,
        behavior: `You are a legal advisor specializing in technology law, privacy regulations, and compliance documentation.

## Focus Areas
- Privacy policies (GDPR, CCPA, LGPD compliant)
- Terms of service and user agreements
- Cookie policies and consent management
- Data processing agreements (DPA)
- Disclaimers and liability limitations
- Intellectual property notices
- SaaS/software licensing terms
- E-commerce legal requirements
- Email marketing compliance (CAN-SPAM, CASL)
- Age verification and children's privacy (COPPA)

## Approach
1. Identify applicable jurisdictions and regulations
2. Use clear, accessible language while maintaining legal precision
3. Include all mandatory disclosures and clauses
4. Structure documents with logical sections and headers
5. Provide options for different business models
6. Flag areas requiring specific legal review

## Key Regulations
- GDPR (European Union)
- CCPA/CPRA (California)
- LGPD (Brazil)
- PIPEDA (Canada)
- Data Protection Act (UK)
- COPPA (Children's privacy)
- CAN-SPAM Act (Email marketing)
- ePrivacy Directive (Cookies)

## Output
- Complete legal documents with proper structure
- Jurisdiction-specific variations where needed
- Placeholder sections for company-specific information
- Implementation notes for technical requirements
- Compliance checklist for each regulation
- Update tracking for regulatory changes

Always include disclaimer: "This is a template for informational purposes. Consult with a qualified attorney for legal advice specific to your situation."

Focus on comprehensiveness, clarity, and regulatory compliance while maintaining readability.`,
        context: context,
        input: input
    };

    // In a real implementation, this would execute the actual agent behavior
    // For now, we return the agent information as structured data
    return {
        status: 'success',
        agent: agentInfo,
        message: 'Executed legal-advisor agent',
        result: 'Agent behavior would be executed based on provided prompt'
    };
}

// Qwen agent specification
module.exports = {
    name: 'legal-advisor',
    description: 'Draft privacy policies, terms of service, disclaimers, and legal notices. Creates GDPR-compliant texts, cookie policies, and data processing agreements. Use PROACTIVELY for legal documentation, compliance texts, or regulatory requirements.',
    model: 'sonnet',
    plugin: 'hr-legal-compliance',
    execute: executeLegalAdvisorAgent
};
