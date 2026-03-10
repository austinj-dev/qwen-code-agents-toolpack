#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to escape template literals in content - only escape unescaped ones
function escapeTemplateLiterals(content) {
  // Replace unescaped ${...} with \${...}
  content = content.replace(/([^\\])\$\{([^}]+)\}/g, '$1\\${$2}');
  // Handle the case where the pattern is at the beginning of a line/string
  content = content.replace(/^(\$\{[^}]+\})/gm, '\\$1');
  // Also handle unescaped ${{...}} with \${{...}}
  content = content.replace(/([^\\])\$\{\{([^}]+)\}\}/g, '$1\\${{$2}}');
  // Handle the case where the pattern is at the beginning of a line/string
  content = content.replace(/^(\$\{\{[^}]+\}\})/gm, '\\$1');
  
  return content;
}

// Find all JS files that might have template literal issues
function findFiles(dir, extension = '.js') {
  let results = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      results = results.concat(findFiles(fullPath, extension));
    } else if (path.extname(fullPath) === extension) {
      results.push(fullPath);
    }
  }

  return results;
}

// Process all JS files to escape template literals
function processFiles() {
  const files = findFiles('./qwen-plugin');
  let fixedCount = 0;

  for (const file of files) {
    try {
      let content = fs.readFileSync(file, 'utf8');
      
      // Check if file contains unescaped template literal syntax (not starting with backslash)
      const hasUnescapedTemplateLiterals = /[^\\]\$\{[^}]+\}/.test(content) || 
                                          /[^\\]\$\{\{[^}]+\}\}/.test(content) ||
                                          /^\$\{[^}]+\}/m.test(content) ||
                                          /^\$\{\{[^}]+\}\}/m.test(content);
      
      if (hasUnescapedTemplateLiterals) {
        const originalLength = content.length;
        content = escapeTemplateLiterals(content);
        
        // Write the fixed content back to the file
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Fixed template literals in: ${file}`);
        fixedCount++;
      }
    } catch (error) {
      console.error(`Error processing file ${file}:`, error.message);
    }
  }
  
  console.log(`\nFixed template literals in ${fixedCount} files.`);
}

console.log('Starting to fix template literal issues in all JS files...');
processFiles();
console.log('Template literal fixing completed!');