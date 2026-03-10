/**
 * Qwen Tool: temporal-python-testing
 * Plugin: backend-development
 * Description: Test Temporal workflows with pytest, time-skipping, and mocking strategies. Covers unit testing, integration testing, replay testing, and local development setup. Use when implementing Temporal workflow tests or debugging test failures.
 */

/**
 * Execute the temporal-python-testing skill
 * @param {Object} params - Parameters for the skill
 * @returns {Object} Result of the skill execution
 */
async function executeTemporalPythonTestingSkill(params = {}) {
    // Implementation of the temporal-python-testing skill
    // This is a converted Claude skill for Qwen CLI
    console.log('Executing temporal-python-testing skill from backend-development plugin');
    
    // The skill content would typically be used to guide AI behavior
    // For a Qwen tool, we return the skill information
    const skillInfo = {
        name: 'temporal-python-testing',
        plugin: 'backend-development',
        description: `Test Temporal workflows with pytest, time-skipping, and mocking strategies. Covers unit testing, integration testing, replay testing, and local development setup. Use when implementing Temporal workflow tests or debugging test failures.`,
        content: `# Temporal Python Testing Strategies

Comprehensive testing approaches for Temporal workflows using pytest, progressive disclosure resources for specific testing scenarios.

## When to Use This Skill

- **Unit testing workflows** - Fast tests with time-skipping
- **Integration testing** - Workflows with mocked activities
- **Replay testing** - Validate determinism against production histories
- **Local development** - Set up Temporal server and pytest
- **CI/CD integration** - Automated testing pipelines
- **Coverage strategies** - Achieve ≥80% test coverage

## Testing Philosophy

**Recommended Approach** (Source: docs.temporal.io/develop/python/testing-suite):
- Write majority as integration tests
- Use pytest with async fixtures
- Time-skipping enables fast feedback (month-long workflows → seconds)
- Mock activities to isolate workflow logic
- Validate determinism with replay testing

**Three Test Types**:
1. **Unit**: Workflows with time-skipping, activities with ActivityEnvironment
2. **Integration**: Workers with mocked activities
3. **End-to-end**: Full Temporal server with real activities (use sparingly)

## Available Resources

This skill provides detailed guidance through progressive disclosure. Load specific resources based on your testing needs:

### Unit Testing Resources
**File**: \`resources/unit-testing.md\`
**When to load**: Testing individual workflows or activities in isolation
**Contains**:
- WorkflowEnvironment with time-skipping
- ActivityEnvironment for activity testing
- Fast execution of long-running workflows
- Manual time advancement patterns
- pytest fixtures and patterns

### Integration Testing Resources
**File**: \`resources/integration-testing.md\`
**When to load**: Testing workflows with mocked external dependencies
**Contains**:
- Activity mocking strategies
- Error injection patterns
- Multi-activity workflow testing
- Signal and query testing
- Coverage strategies

### Replay Testing Resources
**File**: \`resources/replay-testing.md\`
**When to load**: Validating determinism or deploying workflow changes
**Contains**:
- Determinism validation
- Production history replay
- CI/CD integration patterns
- Version compatibility testing

### Local Development Resources
**File**: \`resources/local-setup.md\`
**When to load**: Setting up development environment
**Contains**:
- Docker Compose configuration
- pytest setup and configuration
- Coverage tool integration
- Development workflow

## Quick Start Guide

### Basic Workflow Test

\`\`\`python
import pytest
from temporalio.testing import WorkflowEnvironment
from temporalio.worker import Worker

@pytest.fixture
async def workflow_env():
    env = await WorkflowEnvironment.start_time_skipping()
    yield env
    await env.shutdown()

@pytest.mark.asyncio
async def test_workflow(workflow_env):
    async with Worker(
        workflow_env.client,
        task_queue="test-queue",
        workflows=[YourWorkflow],
        activities=[your_activity],
    ):
        result = await workflow_env.client.execute_workflow(
            YourWorkflow.run,
            args,
            id="test-wf-id",
            task_queue="test-queue",
        )
        assert result == expected
\`\`\`

### Basic Activity Test

\`\`\`python
from temporalio.testing import ActivityEnvironment

async def test_activity():
    env = ActivityEnvironment()
    result = await env.run(your_activity, "test-input")
    assert result == expected_output
\`\`\`

## Coverage Targets

**Recommended Coverage** (Source: docs.temporal.io best practices):
- **Workflows**: ≥80% logic coverage
- **Activities**: ≥80% logic coverage
- **Integration**: Critical paths with mocked activities
- **Replay**: All workflow versions before deployment

## Key Testing Principles

1. **Time-Skipping** - Month-long workflows test in seconds
2. **Mock Activities** - Isolate workflow logic from external dependencies
3. **Replay Testing** - Validate determinism before deployment
4. **High Coverage** - ≥80% target for production workflows
5. **Fast Feedback** - Unit tests run in milliseconds

## How to Use Resources

**Load specific resource when needed**:
- "Show me unit testing patterns" → Load \`resources/unit-testing.md\`
- "How do I mock activities?" → Load \`resources/integration-testing.md\`
- "Setup local Temporal server" → Load \`resources/local-setup.md\`
- "Validate determinism" → Load \`resources/replay-testing.md\`

## Additional References

- Python SDK Testing: docs.temporal.io/develop/python/testing-suite
- Testing Patterns: github.com/temporalio/temporal/blob/main/docs/development/testing.md
- Python Samples: github.com/temporalio/samples-python`
    };
    
    // In a real implementation, this would execute actual functionality
    // For now, we return the skill information as structured data
    return {
        status: 'success',
        skill: skillInfo,
        message: 'Executed temporal-python-testing skill'
    };
}

// Qwen tool specification
module.exports = {
    name: 'temporal-python-testing',
    description: 'Test Temporal workflows with pytest, time-skipping, and mocking strategies. Covers unit testing, integration testing, replay testing, and local development setup. Use when implementing Temporal workflow tests or debugging test failures.',
    parameters: {
        type: 'object',
        properties: {
            params: {
                type: 'object',
                description: 'Optional parameters for the skill',
            }
        },
        required: []
    },
    handler: executeTemporalPythonTestingSkill
};
