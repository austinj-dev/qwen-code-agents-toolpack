#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix template literals in the proper way for JavaScript template strings
function fixTemplateLiterals(content) {
  // In JavaScript template strings, to represent literal ${...} we need to escape the $ as \$ 
  // Pattern: ${{ ... }} (GitHub Actions) should become \${{ ... }}
  content = content.replace(/\$\{\{/g, '\\${{');
  
  // Pattern: ${ ... } (bash/other templates) should become \${ ... }
  content = content.replace(/\$\{/g, '\\${');
  
  return content;
}

// Also need function to undo double-escaping where it's incorrect
function fixDoubleEscaping(content) {
  // If we have \\${ pattern, it might need correction
  // In JavaScript template literals, we want \${ not \\${ for single escape
  // However, if original was \${ and became \\${ due to reprocessing, we might need to handle that case
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

// Process all JS files to fix template literals properly
function processFiles() {
  const files = findFiles('./qwen-plugin');
  let fixedCount = 0;

  for (const file of files) {
    try {
      let content = fs.readFileSync(file, 'utf8');
      
      // Count occurrences before fixing
      const originalLength = content.length;
      let hasChanges = false;
      
      // Fix the template literals
      const prevContent = content;
      content = fixTemplateLiterals(content);
      
      if (content !== prevContent) {
        hasChanges = true;
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

console.log('Starting to fix template literal issues properly...');
processFiles();
console.log('Template literal fixing completed!');