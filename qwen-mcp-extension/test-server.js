const { spawn } = require('child_process');
const readline = require('readline');

// Test script to verify the MCP server functionality
async function testMcpServer() {
  console.log('Starting MCP server test...');
  
  // Spawn the server process
  const serverProcess = spawn('node', ['dist/server.js'], {
    cwd: __dirname,
    stdio: ['pipe', 'pipe', 'pipe']
  });

  // Set up readline interface to read server responses
  const rl = readline.createInterface({
    input: serverProcess.stdout
  });

  // Send a tools/list request to the server
  const listRequest = {
    method: 'tools/list',
    params: {},
    id: 1
  };

  console.log('Sending tools/list request...');
  console.log(JSON.stringify(listRequest, null, 2));
  
  // Send the request to the server
  serverProcess.stdin.write(JSON.stringify(listRequest) + '\n');
  
  // Wait for response
  rl.once('line', (line) => {
    console.log('Received response:');
    console.log(line);
    
    try {
      const response = JSON.parse(line);
      if (response.result && response.result.tools) {
        console.log(`\n✓ Successfully received ${response.result.tools.length} tools from the server!`);
        console.log('First few tools:', response.result.tools.slice(0, 5).map(t => t.name));
      } else {
        console.log('✗ Unexpected response format:', response);
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

  serverProcess.stderr.on('data', (data) => {
    console.error('Server stderr:', data.toString());
  });
}

// Run the test
testMcpServer().catch(console.error);