const { spawn } = require('child_process');
const readline = require('readline');

// Test script to verify the MCP server functionality
async function testMcpServer() {
  console.log('Starting MCP server test...');
  
  // Spawn the server process
  const serverProcess = spawn('node', ['dist/server.js'], {
    cwd: __dirname,
    stdio: ['pipe', 'pipe', 'pipe']  // stdin, stdout, stderr
  });

  // Set up readline interface to read server responses from stdout
  const stdoutRl = readline.createInterface({
    input: serverProcess.stdout
  });

  // Handle stderr separately
  serverProcess.stderr.on('data', (data) => {
    // Only log error messages that are not related to file loading issues
    const stderrMessage = data.toString();
    if (!stderrMessage.includes('Failed to load') && !stderrMessage.includes('MCP server listening')) {
      console.error('Server stderr:', stderrMessage);
    }
  });

  // Send a tools/list request to the server after a brief delay
  setTimeout(() => {
    const listRequest = {
      jsonrpc: "2.0",
      method: 'tools/list',
      params: {},
      id: 1
    };

    console.log('Sending tools/list request...');
    console.log(JSON.stringify(listRequest, null, 2));
    
    // Send the request to the server (MCP protocol expects newlines)
    serverProcess.stdin.write(JSON.stringify(listRequest) + '\n');
  }, 500); // Wait 500ms for server to start

  // Wait for response from stdout
  stdoutRl.once('line', (line) => {
    console.log('Received raw response from stdout:');
    console.log(line);
    
    try {
      const response = JSON.parse(line);
      if (response.result && response.result.tools) {
        console.log(`\n✓ Successfully received ${response.result.tools.length} tools from the server!`);
        console.log('First few tools:', response.result.tools.slice(0, 10).map(t => t.name));
      } else {
        console.log('Response format:', response);
      }
    } catch (e) {
      console.log('✗ Error parsing response:', e.message);
      console.log('Raw response:', line);
    }
    
    // Kill the server process
    serverProcess.kill();
  });

  // Handle process errors
  serverProcess.on('error', (err) => {
    console.error('Server process error:', err);
  });

  // Handle process close
  serverProcess.on('close', (code) => {
    console.log(`Server process exited with code ${code}`);
  });
}

// Run the test
testMcpServer().catch(console.error);