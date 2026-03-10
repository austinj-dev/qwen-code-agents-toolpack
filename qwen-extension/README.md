# Qwen Extension: Agents Toolpack

This extension provides access to 152+ converted Claude agents as a Qwen CLI extension, with 61+ tools and 71+ commands for development, infrastructure, orchestration, security, cloud, code review, and more.

## Installation

```bash
# Install the extension from the local directory
qwen extensions install ./qwen-extension

# Or install from the repository if published
# qwen extensions install @qwen-agents/agents-toolpack
```

## Commands Available

After installation, the following commands will be available:

### Agent Management
```bash
# List all available agents
qwen agents-list

# Install specific agents or all agents
qwen agents-install <agent-name>
qwen agents-install all

# Get information about a specific agent
qwen agents-info <agent-name>

# Use/activate a specific agent
qwen agents-use <agent-name>
```

### Tool Execution
```bash
# Run a specific tool
qwen tools-run <tool-name>
```

## Available Agents (152+)

The extension includes 152+ specialized agents across various categories:

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

The extension includes 61+ specialized tools covering various domains:

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

## Usage Examples

### Using an Agent
```bash
# Activate the backend architect agent
qwen agents-use backend-architect

# Ask the agent to design an API
qwen "Design a REST API for a task management system"
```

### Running a Tool
```bash
# Run the git workflow optimization tool
qwen tools-run git-advanced-workflows
```

## Extension Structure

```
qwen-extension/
├── package.json              # Extension manifest
├── README.md                # This file
└── src/                     # Extension source code
    ├── index.js             # Main extension entry point
    ├── commands/            # Extension commands
    │   ├── agents-list.js   # List agents command
    │   ├── agents-install.js # Install agents command
    │   ├── agents-info.js   # Agent info command
    │   ├── agents-use.js    # Use agent command
    │   └── tools-run.js     # Run tools command
    ├── tools/               # Converted Claude skills
    │   └── index.js         # Tools loader
    └── agents/              # Converted Claude agents
        └── index.js         # Agents loader
```

## Uninstallation

```bash
# Uninstall the extension
qwen extensions uninstall @qwen-agents/agents-toolpack
```

## Support

This extension contains 284+ converted AI capabilities (152 agents + 61 tools + 71 commands) from the original Claude plugin system, now accessible through Qwen CLI commands.