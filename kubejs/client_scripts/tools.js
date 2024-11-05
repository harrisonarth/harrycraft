REIEvents.hide('item', event => {
    console.log('Hello! The Misc item hide event has fired!');
    
    // List of materials to apply to each tool type
    const materials = [
        'bone', 'coal', 'ender', 'fiery', 'glowstone', 'lapis', 
        'nether', 'paper', 'prismarine', 'quartz', 'redstone', 
        'slime',
    ];
    
    // List of tool types by mod
    const toolsByMod = {
        'vanillaaiots': ['aiot'],
        'simplytools': ['hammer', 'excavator', 'hammer_head', 'excavator_head',],
        'morevanillatools': ['sword', 'shovel', 'axe', 'pickaxe', 'hoe',],
    };
    
    // Generate and hide items dynamically
    Object.entries(toolsByMod).forEach(([mod, tools]) => {
        materials.forEach(material => {
            tools.forEach(tool => {
                const itemID = `${mod}:${material}_${tool}`;
                event.hide(itemID);
            });
        });
    });
});