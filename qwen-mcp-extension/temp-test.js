// Simple test to see the actual structure of the MCP SDK
import fs from 'fs';

// Check the actual index file
try {
  const indexPath = './node_modules/@modelcontextprotocol/sdk/dist/index.js';
  if (fs.existsSync(indexPath)) {
    console.log("Index file exists");
  } else {
    console.log("Index file does not exist");
    
    // Check if server index exists directly 
    const serverIndexPath = './node_modules/@modelcontextprotocol/sdk/dist/server/index.js';
    if (fs.existsSync(serverIndexPath)) {
      console.log("Server index file exists");
    } else {
      console.log("Server index file does not exist");
    }
  }

  // Look for all js files in the SDK dist
  const files = fs.readdirSync('./node_modules/@modelcontextprotocol/sdk/dist/');
  console.log("Files in dist:", files);

  // Check server directory
  const serverFiles = fs.readdirSync('./node_modules/@modelcontextprotocol/sdk/dist/server/');
  console.log("Server directory files:", serverFiles);
  
  // Try to dynamically import
  import('@modelcontextprotocol/sdk/dist/server/index.js')
    .then(module => {
      console.log('Module imported successfully:', Object.keys(module));
    })
    .catch(err => {
      console.log('Import failed:', err.message);
      
      // Try different path
      import('@modelcontextprotocol/sdk/dist/server/index')
        .then(module => {
          console.log('Alternative path worked:', Object.keys(module));
        })
        .catch(err2 => {
          console.log('Both paths failed');
        });
    });

} catch (error) {
  console.log("Error:", error.message);
}