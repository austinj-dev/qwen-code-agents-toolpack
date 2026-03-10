# Qwen Agents Toolpack Version 1

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-v20%2B-green.svg)](https://nodejs.org/)
[![Qwen CLI](https://img.shields.io/badge/Qwen-CLI-blue.svg)](https://github.com/qwen-ai/qwen-cli)

## Overview

The Qwen Agents Toolpack is a comprehensive collection of 65+ agent plugins with 152+ specialized agents, 61+ tools, and 71+ commands. This repository has been converted from Claude agent plugins to a Qwen CLI extension, providing developers with a rich set of AI-powered tools for various development tasks.

The toolpack includes agents and tools for:
- Backend and frontend development
- DevOps and infrastructure management
- Code review and testing
- AI/ML development
- Incident response and debugging
- Documentation and collaboration

## Prerequisites

Before installing the Qwen Agents Toolpack, ensure you have the following prerequisites:

- **Node.js**: v20 or higher
- **Qwen CLI**: Latest version installed globally
- **Git**: For cloning the repository
- **Operating System**: macOS, Linux, or Windows with WSL

### Installing Prerequisites

#### Node.js
Download and install Node.js from [nodejs.org](https://nodejs.org/) or use a version manager like `nvm`:

```bash
# Using nvm (recommended)
nvm install 20
nvm use 20
```

#### Qwen CLI
Install the Qwen CLI globally:

```bash
npm install -g @qwen-ai/cli
```

## Installation

There are two methods to install the Qwen Agents Toolpack:

### Method 1: Direct Installation (Recommended)

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/qwen-agents-toolpack.git
   cd qwen-agents-toolpack
   ```

2. Build the extension:
   ```bash
   ./build.sh
   ```

3. Install the extension:
   ```bash
   ./install.sh
   ```

### Method 2: Manual Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/qwen-agents-toolpack.git
   cd qwen-agents-toolpack
   ```

2. Manually install the extension:
   ```bash
   qwen extensions install ./qwen-extension
   ```

### Dependencies Installation

All dependencies are handled automatically during the installation process. The build script will generate the necessary files for the Qwen CLI extension.

## Verification

After installation, verify that the extension is properly installed:

### Check Installation Success
```bash
qwen --help
```
You should see new commands: `agents-list`, `agents-install`, `agents-info`, `agents-use`, `tools-run`

### Check MCP Server Connection
The extension uses the MCP protocol to connect to tools. Verify connectivity:
```bash
qwen tools-run --list
```

### List Available Tools
```bash
qwen tools-run --list
```

### List Available Agents
```bash
qwen agents-list
```

## Usage

### Agent Management
```bash
# Install all agents
qwen agents-install all

# Install specific agent
qwen agents-install backend-architect

# Get agent info
qwen agents-info frontend-developer

# Use an agent
qwen agents-use security-auditor "How can I improve the security of my API endpoints?"
```

### Tool Execution
```bash
# Run a specific tool
qwen tools-run git-advanced-workflows

# Run with parameters
qwen tools-run git-advanced-workflows --param1=value1 --param2=value2
```

### Sample Commands
```bash
# Use the backend architect agent
qwen agents-use backend-architect "Design a microservice architecture for an e-commerce platform"

# Use the frontend developer agent
qwen agents-use frontend-developer "Create a responsive navigation bar with React"

# Run a testing tool
qwen tools-run unit-test-generator
```

### Best Practices
- Always use `qwen agents-list` to see available agents before using them
- Check agent descriptions with `qwen agents-info <agent-name>` to understand their capabilities
- Use specific prompts to get better results from agents
- Combine multiple agents for complex workflows

## Repository Structure

```
qwen-agents-toolpack/
├── build.sh                  # Build script to generate the extension
├── install.sh                # Installation script
├── README.md                 # This file
├── LICENSE                   # MIT License
├── analyze-plugins.js        # Plugin analysis utility
├── convert-all-agents.js     # Convert Claude agents to Qwen agents
├── convert-all-commands.js   # Convert Claude commands to Qwen commands
├── convert-all-skills.js     # Convert Claude skills to Qwen tools
├── convert-single-skill.js   # Convert individual skills
├── fix-*.js                  # Various path fixing utilities
├── qwen-cli-package.json     # Package configuration for Qwen CLI
├── plugins/                  # Original Claude plugin sources
│   ├── code-documentation/
│   ├── debugging-toolkit/
│   ├── git-pr-workflows/
│   └── ... (60+ more plugin directories)
├── qwen-extension/           # Generated Qwen CLI extension
│   ├── package.json          # Extension manifest
│   ├── src/
│   │   ├── index.js          # Main extension entry point
│   │   ├── commands/         # Generated commands
│   │   ├── tools/            # Generated tools from skills
│   │   └── agents/           # Generated agents
│   └── README.md             # Extension-specific documentation
├── qwen-plugin/              # Intermediate plugin files
│   ├── conversion-map.json   # Mapping of original to converted files
│   └── ... (generated files)
└── settings.json.backup      # Backup of Qwen CLI settings
```

### Key Files and Directories

- **`build.sh`**: Builds the extension from source files
- **`install.sh`**: Installs the extension to Qwen CLI
- **`plugins/`**: Contains original Claude plugin definitions
- **`qwen-extension/`**: Generated Qwen CLI extension
- **`qwen-plugin/conversion-map.json`**: Maps original files to converted ones
- **`convert-*.js`**: Scripts that convert Claude plugins to Qwen format

## Building from Source

### Step-by-step Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/qwen-agents-toolpack.git
   cd qwen-agents-toolpack
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Build the extension**:
   ```bash
   ./build.sh
   ```

4. **Install the extension**:
   ```bash
   ./install.sh
   ```

### Required Dependencies

- Node.js v20+
- npm (comes with Node.js)
- Git
- Qwen CLI

### Expected Output

After running `./build.sh`, you should see:
```
Qwen Agents Toolpack Build Script
=================================
Building Qwen extension...
Running conversion scripts...
Converting commands...
Converting agents...
Converting skills...
Copying extension files...
Build completed successfully!
```

After running `./install.sh`, you should see:
```
Qwen Agents Toolpack Installation Script
========================================
Qwen CLI found. Proceeding with installation...
Installing Qwen extension from: /path/to/qwen-agents-toolpack/qwen-extension
Installation completed successfully!
```

## Troubleshooting

### Common Issues and Solutions

#### MCP Server Connection Problems
- **Issue**: Tools not appearing or not responding
- **Solution**: Restart the Qwen CLI MCP server:
  ```bash
  qwen server restart
  ```

#### Tool Visibility Issues
- **Issue**: Commands like `qwen tools-run --list` don't show expected tools
- **Solution**: Verify installation and restart the Qwen CLI:
  ```bash
  ./install.sh
  qwen server restart
  ```

#### Build Failures
- **Issue**: `./build.sh` fails with errors
- **Solution**: 
  1. Ensure Node.js v20+ is installed
  2. Check that all required dependencies are available
  3. Clear any cached files and try again:
     ```bash
     rm -rf qwen-extension/dist
     ./build.sh
     ```

#### Installation Errors
- **Issue**: `./install.sh` fails
- **Solution**:
  1. Verify Qwen CLI is installed: `qwen --version`
  2. Check that you're in the correct directory
  3. Ensure you have proper permissions to install extensions

### Additional Troubleshooting Steps

If you encounter issues:

1. **Check Qwen CLI version**:
   ```bash
   qwen --version
   ```

2. **Verify Node.js version**:
   ```bash
   node --version
   ```

3. **Clear Qwen CLI cache**:
   ```bash
   qwen cache clear
   ```

4. **Restart Qwen CLI server**:
   ```bash
   qwen server restart
   ```

## Contributing

### How Others Can Contribute

We welcome contributions to the Qwen Agents Toolpack! Here's how you can help:

- Report bugs and suggest features via GitHub Issues
- Submit pull requests with bug fixes or new features
- Improve documentation
- Add new agents, tools, or commands
- Review and test existing functionality

### Development Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/qwen-agents-toolpack.git
   cd qwen-agents-toolpack
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Make your changes
5. Test your changes by building and installing:
   ```bash
   ./build.sh
   ./install.sh
   ```

### Code Standards

- Follow JavaScript ES6+ standards
- Maintain consistent formatting using Prettier
- Write clear, descriptive commit messages
- Add tests for new functionality when possible
- Update documentation for any changes

### Pull Request Process

1. Create a feature branch from `main`
2. Make your changes
3. Test thoroughly
4. Update documentation if needed
5. Submit a pull request with a clear description of changes
6. Address any feedback from maintainers

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

The MIT License is a permissive free software license that allows reuse within proprietary software provided that all copies of the licensed software include a copy of the MIT License terms and the copyright notice.

## Support

### How to Get Help

If you need help with the Qwen Agents Toolpack:

- **Documentation**: Check this README and the extension's internal documentation
- **GitHub Issues**: Open an issue for bugs, feature requests, or questions
- **Community**: Join the Qwen community forums or Discord server

### Issue Reporting Guidelines

When reporting issues, please include:

- Qwen CLI version (`qwen --version`)
- Node.js version (`node --version`)
- Operating system and version
- Steps to reproduce the issue
- Expected vs. actual behavior
- Any relevant error messages

### Community Resources

- Qwen CLI GitHub repository: [github.com/qwen-ai/qwen-cli](https://github.com/qwen-ai/qwen-cli)
- Qwen documentation: [qwen.ai/docs](https://qwen.ai/docs)
- Community forums and Discord server links can be found on the Qwen website