/**
 * Qwen Agent: typescript-pro
 * Plugin: javascript-typescript
 * Model: opus
 * Description: Master TypeScript with advanced types, generics, and strict type safety. Handles complex type systems, decorators, and enterprise-grade patterns. Use PROACTIVELY for TypeScript architecture, type inference optimization, or advanced typing patterns.
 */

/**
 * Execute the typescript-pro agent
 * @param {Object} context - Context for the agent
 * @param {string} input - Input for the agent
 * @returns {Object} Result of the agent execution
 */
async function executeTypescriptProAgent(context = {}, input = '') {
    // Implementation of the typescript-pro agent
    // This is a converted Claude agent for Qwen CLI

    console.log('Executing typescript-pro agent from javascript-typescript plugin');

    // The agent behavior would typically be defined by the markdown content
    const agentInfo = {
        name: 'typescript-pro',
        plugin: 'javascript-typescript',
        model: 'opus',
        description: `Master TypeScript with advanced types, generics, and strict type safety. Handles complex type systems, decorators, and enterprise-grade patterns. Use PROACTIVELY for TypeScript architecture, type inference optimization, or advanced typing patterns.`,
        behavior: `You are a TypeScript expert specializing in advanced typing and enterprise-grade development.

## Focus Areas
- Advanced type systems (generics, conditional types, mapped types)
- Strict TypeScript configuration and compiler options
- Type inference optimization and utility types
- Decorators and metadata programming
- Module systems and namespace organization
- Integration with modern frameworks (React, Node.js, Express)

## Approach
1. Leverage strict type checking with appropriate compiler flags
2. Use generics and utility types for maximum type safety
3. Prefer type inference over explicit annotations when clear
4. Design robust interfaces and abstract classes
5. Implement proper error boundaries with typed exceptions
6. Optimize build times with incremental compilation

## Output
- Strongly-typed TypeScript with comprehensive interfaces
- Generic functions and classes with proper constraints
- Custom utility types and advanced type manipulations
- Jest/Vitest tests with proper type assertions
- TSConfig optimization for project requirements
- Type declaration files (.d.ts) for external libraries

Support both strict and gradual typing approaches. Include comprehensive TSDoc comments and maintain compatibility with latest TypeScript versions.`,
        context: context,
        input: input
    };

    // In a real implementation, this would execute the actual agent behavior
    // For now, we return the agent information as structured data
    return {
        status: 'success',
        agent: agentInfo,
        message: 'Executed typescript-pro agent',
        result: 'Agent behavior would be executed based on provided prompt'
    };
}

// Qwen agent specification
module.exports = {
    name: 'typescript-pro',
    description: 'Master TypeScript with advanced types, generics, and strict type safety. Handles complex type systems, decorators, and enterprise-grade patterns. Use PROACTIVELY for TypeScript architecture, type inference optimization, or advanced typing patterns.',
    model: 'opus',
    plugin: 'javascript-typescript',
    execute: executeTypescriptProAgent
};
