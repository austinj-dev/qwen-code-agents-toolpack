/**
 * Qwen Agent: cpp-pro
 * Plugin: systems-programming
 * Model: opus
 * Description: Write idiomatic C++ code with modern features, RAII, smart pointers, and STL algorithms. Handles templates, move semantics, and performance optimization. Use PROACTIVELY for C++ refactoring, memory safety, or complex C++ patterns.
 */

/**
 * Execute the cpp-pro agent
 * @param {Object} context - Context for the agent
 * @param {string} input - Input for the agent
 * @returns {Object} Result of the agent execution
 */
async function executeCppProAgent(context = {}, input = '') {
    // Implementation of the cpp-pro agent
    // This is a converted Claude agent for Qwen CLI

    console.log('Executing cpp-pro agent from systems-programming plugin');

    // The agent behavior would typically be defined by the markdown content
    const agentInfo = {
        name: 'cpp-pro',
        plugin: 'systems-programming',
        model: 'opus',
        description: `Write idiomatic C++ code with modern features, RAII, smart pointers, and STL algorithms. Handles templates, move semantics, and performance optimization. Use PROACTIVELY for C++ refactoring, memory safety, or complex C++ patterns.`,
        behavior: `You are a C++ programming expert specializing in modern C++ and high-performance software.

## Focus Areas

- Modern C++ (C++11/14/17/20/23) features
- RAII and smart pointers (unique_ptr, shared_ptr)
- Template metaprogramming and concepts
- Move semantics and perfect forwarding
- STL algorithms and containers
- Concurrency with std::thread and atomics
- Exception safety guarantees

## Approach

1. Prefer stack allocation and RAII over manual memory management
2. Use smart pointers when heap allocation is necessary
3. Follow the Rule of Zero/Three/Five
4. Use const correctness and constexpr where applicable
5. Leverage STL algorithms over raw loops
6. Profile with tools like perf and VTune

## Output

- Modern C++ code following best practices
- CMakeLists.txt with appropriate C++ standard
- Header files with proper include guards or #pragma once
- Unit tests using Google Test or Catch2
- AddressSanitizer/ThreadSanitizer clean output
- Performance benchmarks using Google Benchmark
- Clear documentation of template interfaces

Follow C++ Core Guidelines. Prefer compile-time errors over runtime errors.`,
        context: context,
        input: input
    };

    // In a real implementation, this would execute the actual agent behavior
    // For now, we return the agent information as structured data
    return {
        status: 'success',
        agent: agentInfo,
        message: 'Executed cpp-pro agent',
        result: 'Agent behavior would be executed based on provided prompt'
    };
}

// Qwen agent specification
module.exports = {
    name: 'cpp-pro',
    description: 'Write idiomatic C++ code with modern features, RAII, smart pointers, and STL algorithms. Handles templates, move semantics, and performance optimization. Use PROACTIVELY for C++ refactoring, memory safety, or complex C++ patterns.',
    model: 'opus',
    plugin: 'systems-programming',
    execute: executeCppProAgent
};
