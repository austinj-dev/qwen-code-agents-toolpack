# Qwen Code CLI Plugin: Agents Toolpack

## Overview

This plugin converts 65+ Claude agent plugins into a Qwen Code CLI toolpack, providing access to specialized AI agents, tools, and commands for development, infrastructure, orchestration, security, cloud, code review, and more.

## Installation

```bash
# Install the plugin to Qwen Code CLI
qwen code cli --plugin ./qwen-plugin
```

## Available Commands

### Agent Management
```bash
# List all available agents
qwen agents list

# Get information about a specific agent
qwen agents info <agent-name>

# Install specific agents or all agents
qwen agents install <agent-name>
qwen agents install all

# Use/activate a specific agent
qwen agents use <agent-name>
```

### Tool Management
```bash
# Run a specific tool
qwen tools run <tool-name> --params="..."
```

### Plugin Information
```bash
# Get plugin info
qwen plugin info agents-toolpack
```

## Available Agents (152+)

The plugin includes 152+ specialized agents across various categories:

### Development & Architecture
- backend-architect: Expert in scalable API design and microservices
- frontend-developer: Frontend UI development expert
- graphql-architect: GraphQL API design specialist
- database-architect: Database design and optimization expert
- cloud-architect: Cloud infrastructure design specialist

### DevOps & Operations
- kubernetes-architect: Kubernetes and container orchestration
- devops-troubleshooter: Operations and deployment expert
- observability-engineer: Monitoring and observability specialist
- deployment-engineer: Deployment strategies and automation

### Security & Compliance
- security-auditor: Security analysis and penetration testing
- backend-security-coder: API security implementation
- compliance-checker: SOC2, HIPAA, GDPR compliance validation

### Quality & Testing
- test-automator: Test automation across languages
- performance-engineer: Performance optimization expert
- code-reviewer: Code quality and best practices reviewer

### AI & ML
- ai-engineer: LLM application development
- data-scientist: Machine learning and data analysis
- prompt-engineer: Prompt engineering and optimization

### Specialized Experts
- python-pro: Python development expert
- javascript-pro: JavaScript/TypeScript specialist
- rust-pro: Systems programming with Rust
- golang-pro: Go programming expert
- java-pro: Java enterprise development
- blockchain-developer: Smart contract and Web3 development

## Available Tools (61+)

The plugin includes 61+ specialized tools covering various domains:

### Git & Version Control
- git-advanced-workflows: Rebase, cherry-pick, bisect, worktrees
- git-configuration: Git setup and optimization

### API & Architecture
- api-design-principles: REST/GraphQL best practices
- architecture-patterns: Software architecture patterns
- microservices-patterns: Microservices design patterns

### Security & Compliance
- sast-configuration: Static analysis tool setup
- security-checklist: Security validation procedures
- compliance-templates: Compliance documentation

### Cloud & Infrastructure
- aws-architecture: AWS design patterns
- k8s-manifest-generator: Kubernetes manifest generation
- terraform-module-library: Infrastructure as code templates

## Available Commands (71+)

The plugin includes 71+ workflow commands:

### Development Workflows
- `feature-development`: End-to-end feature development
- `tdd-cycle`: Test-driven development workflow
- `code-review`: Code review automation
- `refactor-clean`: Code refactoring and cleanup

### Infrastructure Commands
- `k8s-deployment`: Kubernetes deployment automation
- `cloud-provision`: Cloud infrastructure setup
- `monitor-setup`: Monitoring and observability setup
- `security-hardening`: Security configuration commands

## Usage Examples

### Using an Agent
```bash
# Activate the backend architect agent
qwen agents use backend-architect

# Ask the agent to design an API
qwen backend architect "Design a REST API for a task management system"
```

### Running a Tool
```bash
# Run the git workflow optimization tool
qwen tools run developer-essentials-git-advanced-workflows --params="optimize my feature branch"
```

### Running a Command
```bash
# Execute the feature development workflow
qwen feature development --feature="User authentication system"
```

## Plugin Structure

```
qwen-plugin/
├── manifest.json          # Plugin manifest
├── index.js              # Main plugin entry point
├── package.json          # NPM package file
├── types.d.ts           # TypeScript definitions
├── claude-compat.js     # Claude compatibility layer
├── tools/               # Converted Claude skills
│   ├── index.js         # Tools loader
│   └── *.js             # Individual tools
├── agents/              # Converted Claude agents
│   ├── index.js         # Agents loader
│   └── *.js             # Individual agents
└── commands/            # Converted Claude commands
    ├── index.js         # Commands loader
    ├── agents-list.js   # List agents command
    ├── agents-install.js # Install agents command
    ├── agents-info.js   # Agent info command
    ├── agents-use.js    # Use agent command
    ├── tools-run.js     # Run tools command
    └── *.js             # Individual commands
```

## Migration from Claude Plugins

If you were previously using Claude plugins:

### Before (Claude):
```
/plugin marketplace add wshobson/agents
/plugin install <plugin-name>
/plugin invoke <plugin-name> <skill-name>
```

### After (Qwen CLI):
```
qwen code cli --plugin ./qwen-plugin
qwen agents install <agent-name>
qwen agents use <agent-name>
```

## Universal Installer Commands

The plugin includes a universal installer for convenience:

```bash
# Install all agents at once
qwen agents install all

# Install specific agent
qwen agents install backend-architect

# List available agents
qwen agents list

# Get agent information
qwen agents info python-pro
```

## Supported Categories

- **Development**: 40+ agents for coding, architecture, testing
- **Infrastructure**: Cloud, Kubernetes, DevOps agents
- **Security**: Security auditing, compliance, hardening
- **AI/ML**: LLM applications, prompt engineering
- **Languages**: Python, JavaScript, Go, Rust, Java, etc.
- **Workflows**: TDD, Git workflows, PR enhancement
- **Operations**: Monitoring, observability, troubleshooting

## Compatibility

This plugin maintains compatibility with the original Claude agent functionality while adapting to Qwen CLI patterns. The `claude-compat.js` file provides a compatibility layer for any Claude-specific patterns.

## Troubleshooting

If you encounter issues:

1. Ensure the plugin path is correct
2. Check that Node.js dependencies are available
3. Verify proper Qwen CLI installation
4. Use the `--verbose` flag for detailed output

## Support

For support, please check the original repository: https://github.com/wshobson/agents