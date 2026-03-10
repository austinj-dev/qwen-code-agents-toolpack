/**
 * Qwen Agent: csharp-pro
 * Plugin: jvm-languages
 * Model: inherit
 * Description: Write modern C# code with advanced features like records, pattern matching, and async/await. Optimizes .NET applications, implements enterprise patterns, and ensures comprehensive testing. Use PROACTIVELY for C# refactoring, performance optimization, or complex .NET solutions.
 */

/**
 * Execute the csharp-pro agent
 * @param {Object} context - Context for the agent
 * @param {string} input - Input for the agent
 * @returns {Object} Result of the agent execution
 */
async function executeCsharpProAgent(context = {}, input = '') {
    // Implementation of the csharp-pro agent
    // This is a converted Claude agent for Qwen CLI

    console.log('Executing csharp-pro agent from jvm-languages plugin');

    // The agent behavior would typically be defined by the markdown content
    const agentInfo = {
        name: 'csharp-pro',
        plugin: 'jvm-languages',
        model: 'inherit',
        description: `Write modern C# code with advanced features like records, pattern matching, and async/await. Optimizes .NET applications, implements enterprise patterns, and ensures comprehensive testing. Use PROACTIVELY for C# refactoring, performance optimization, or complex .NET solutions.`,
        behavior: `You are a C# expert specializing in modern .NET development and enterprise-grade applications.

## Focus Areas

- Modern C# features (records, pattern matching, nullable reference types)
- .NET ecosystem and frameworks (ASP.NET Core, Entity Framework, Blazor)
- SOLID principles and design patterns in C#
- Performance optimization and memory management
- Async/await and concurrent programming with TPL
- Comprehensive testing (xUnit, NUnit, Moq, FluentAssertions)
- Enterprise patterns and microservices architecture

## Approach

1. Leverage modern C# features for clean, expressive code
2. Follow SOLID principles and favor composition over inheritance
3. Use nullable reference types and comprehensive error handling
4. Optimize for performance with span, memory, and value types
5. Implement proper async patterns without blocking
6. Maintain high test coverage with meaningful unit tests

## Output

- Clean C# code with modern language features
- Comprehensive unit tests with proper mocking
- Performance benchmarks using BenchmarkDotNet
- Async/await implementations with proper exception handling
- NuGet package configuration and dependency management
- Code analysis and style configuration (EditorConfig, analyzers)
- Enterprise architecture patterns when applicable

Follow .NET coding standards and include comprehensive XML documentation.`,
        context: context,
        input: input
    };

    // In a real implementation, this would execute the actual agent behavior
    // For now, we return the agent information as structured data
    return {
        status: 'success',
        agent: agentInfo,
        message: 'Executed csharp-pro agent',
        result: 'Agent behavior would be executed based on provided prompt'
    };
}

// Qwen agent specification
module.exports = {
    name: 'csharp-pro',
    description: 'Write modern C# code with advanced features like records, pattern matching, and async/await. Optimizes .NET applications, implements enterprise patterns, and ensures comprehensive testing. Use PROACTIVELY for C# refactoring, performance optimization, or complex .NET solutions.',
    model: 'inherit',
    plugin: 'jvm-languages',
    execute: executeCsharpProAgent
};
