const fs = require('fs');
const path = require('path');

// Read the marketplace.json file
const marketplacePath = path.join(__dirname, '.claude-plugin', 'marketplace.json');
const marketplaceData = JSON.parse(fs.readFileSync(marketplacePath, 'utf8'));

console.log('Total plugins:', marketplaceData.plugins.length);

const pluginsInfo = [];

for (const plugin of marketplaceData.plugins) {
    const pluginInfo = {
        name: plugin.name,
        description: plugin.description,
        commands: plugin.commands || [],
        agents: plugin.agents || [],
        skills: plugin.skills || [],
        category: plugin.category
    };
    pluginsInfo.push(pluginInfo);
}

// Print summary
console.log('\nPlugin Summary:');
console.log('================');
let totalCommands = 0;
let totalAgents = 0;
let totalSkills = 0;

pluginsInfo.forEach(plugin => {
    totalCommands += plugin.commands.length;
    totalAgents += plugin.agents.length;
    totalSkills += plugin.skills.length;
    
    console.log(`\n${plugin.name} (${plugin.category}):`);
    console.log(`  Description: ${plugin.description}`);
    console.log(`  Commands: ${plugin.commands.length}`);
    console.log(`  Agents: ${plugin.agents.length}`);
    console.log(`  Skills: ${plugin.skills.length}`);
});

console.log(`\nTotal Summary:`);
console.log(`Total Commands: ${totalCommands}`);
console.log(`Total Agents: ${totalAgents}`);
console.log(`Total Skills: ${totalSkills}`);
console.log(`Total Components: ${totalCommands + totalAgents + totalSkills}`);

// Create a mapping of all files to convert
const conversionMap = [];

// Process each plugin
for (const plugin of marketplaceData.plugins) {
    const baseSourcePath = path.join(__dirname, 'plugins', plugin.name);
    
    // Add commands to conversion map
    for (const cmd of plugin.commands || []) {
        const cmdPath = path.join(baseSourcePath, cmd);
        conversionMap.push({
            type: 'command',
            pluginName: plugin.name,
            originalPath: cmdPath,
            description: plugin.description
        });
    }
    
    // Add agents to conversion map
    for (const agent of plugin.agents || []) {
        const agentPath = path.join(baseSourcePath, agent);
        conversionMap.push({
            type: 'agent',
            pluginName: plugin.name,
            originalPath: agentPath,
            description: plugin.description
        });
    }
    
    // Add skills to conversion map
    for (const skill of plugin.skills || []) {
        // Skills might be directories with SKILL.md inside
        const skillPath = path.join(baseSourcePath, skill);
        conversionMap.push({
            type: 'skill',
            pluginName: plugin.name,
            originalPath: skillPath,
            description: plugin.description
        });
    }
}

console.log(`\nTotal files to convert: ${conversionMap.length}`);

// Write conversion map to file for reference
const outputPath = path.join(__dirname, 'qwen-plugin', 'conversion-map.json');
fs.writeFileSync(outputPath, JSON.stringify(conversionMap, null, 2));
console.log('\nConversion map written to ' + outputPath);