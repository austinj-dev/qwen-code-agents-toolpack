#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix JavaScript escape sequences that appear in documentation
function fixEscapeSequences(content) {
  // Fix common problematic escape sequences by doubling the backslash
  // \u followed by hex digits (for Unicode escapes) - this is likely causing issues
  content = content.replace(/\\u([0-9a-fA-F]{4}|[^0-9a-fA-F])/g, '\\\\u$1');
  
  // Fix other common escapes that might be problematic in certain contexts
  // \x followed by hex digits (for hex escapes)
  content = content.replace(/\\x([0-9a-fA-F]{2}|[^0-9a-fA-F])/g, '\\\\x$1');
  
  // Fix \n, \t, \r, \v, \f that might appear in documentation if they cause issues
  // But be careful, as \n in bash examples should remain as \n in the documentation
  
  return content;
}

// Find all JS files 
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

// Process all JS files to fix escape sequence issues
function processFiles() {
  const files = findFiles('./qwen-plugin');
  let fixedCount = 0;

  for (const file of files) {
    try {
      let content = fs.readFileSync(file, 'utf8');
      
      // Check if file contains patterns that might cause JavaScript escape issues
      const hasUnicodeEscapes = /\\u[0-9a-fA-F]/.test(content);
      
      if (hasUnicodeEscapes) {
        const originalContent = content;
        content = fixEscapeSequences(content);
        
        if (content !== originalContent) {
          // Write the fixed content back to the file
          fs.writeFileSync(file, content, 'utf8');
          console.log(`Fixed escape sequences in: ${file}`);
          fixedCount++;
        }
      }
    } catch (error) {
      console.error(`Error processing file ${file}:`, error.message);
    }
  }
  
  console.log(`\nFixed escape sequences in ${fixedCount} files.`);
}

console.log('Starting to fix JavaScript escape sequence issues...');
processFiles();
console.log('Escape sequence fixing completed!');