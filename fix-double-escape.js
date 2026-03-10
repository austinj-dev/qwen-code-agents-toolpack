#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix double-escaped template literals to single escape
function fixDoubleEscapedTemplates(content) {
  // Replace double-escaped templates (\\\\${) with single-escaped (\\${)
  content = content.replace(/\\\\\$/g, '\\$');
  return content;
}

// Find all JS files that might have double-escaped templates
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

// Process all JS files to fix double-escaped templates
function processFiles() {
  const files = findFiles('./qwen-plugin');
  let fixedCount = 0;

  for (const file of files) {
    try {
      let content = fs.readFileSync(file, 'utf8');
      
      // Check if file contains double-escaped template patterns
      const hasDoubleEscaped = /\\\\\$\{/.test(content);
      
      if (hasDoubleEscaped) {
        content = fixDoubleEscapedTemplates(content);
        
        // Write the fixed content back to the file
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Fixed double-escaped templates in: ${file}`);
        fixedCount++;
      }
    } catch (error) {
      console.error(`Error processing file ${file}:`, error.message);
    }
  }
  
  console.log(`\nFixed double-escaped templates in ${fixedCount} files.`);
}

console.log('Starting to fix double-escaped template literal issues...');
processFiles();
console.log('Double-escaped template fixing completed!');