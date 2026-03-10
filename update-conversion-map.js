const fs = require('fs');
const path = require('path');

// Read the conversion map
const conversionMapPath = path.join(__dirname, 'qwen-plugin', 'conversion-map.json');
const conversionMap = JSON.parse(fs.readFileSync(conversionMapPath, 'utf8'));

// Update all originalPath values to be relative to the project root
const updatedConversionMap = conversionMap.map(item => {
    // Replace the hardcoded path with a relative path
    const updatedItem = { ...item };
    if (item.originalPath) {
        // Convert the hardcoded path to a relative path
        // From: "/Users/admin/DigiSpective/agents-main/plugins/..." 
        // To: "./plugins/..."
        updatedItem.originalPath = item.originalPath.replace('/Users/admin/DigiSpective/agents-main/', './');
    }
    return updatedItem;
});

// Write the updated conversion map back to the file
fs.writeFileSync(conversionMapPath, JSON.stringify(updatedConversionMap, null, 2));

console.log('Updated conversion-map.json with relative paths');