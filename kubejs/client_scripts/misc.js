REIEvents.hide('item', event => {
    console.log('Hello! The Misc item hide event has fired!');
    
    const itemsToHide = [
        'vanillaaiots:bone_aiot',
        'vanillaaiots:coal_aiot',
        'vanillaaiots:copper_aiot',
        'vanillaaiots:emerald_aiot',
        'vanillaaiots:ender_aiot',
        'vanillaaiots:fiery_aiot',
        'vanillaaiots:glowstone_aiot',
        'vanillaaiots:lapis_aiot',
        'vanillaaiots:nether_aiot',
        'vanillaaiots:obsidian_aiot',
        'vanillaaiots:paper_aiot',
        'vanillaaiots:prismarine_aiot',
        'vanillaaiots:quartz_aiot',
        'vanillaaiots:redstone_aiot',
        'vanillaaiots:slime_aiot',
        'vanillaaiots:enderite_aiot',
        'vanillaaiots:obsidian_infused_enderite_aiot',
        'moonlight:placeable_item',
        'ftbquests:lootcrate',
        'ftbquests:missing_item',
        'ftbquests:custom_icon',
        'ftbquests:barrier',
        'ftbquests:stage_barrier',
        'ftbquests:detector',
        'xpbook:xp_book',
    ];

    const patternsToHide = [
        /^lootr:.*/,
    ];
    
    itemsToHide.forEach(item => event.hide(item));
    patternsToHide.forEach(pattern => event.hide(pattern));
});

REIEvents.groupEntries(event => {
    console.log('Hello! The Misc grouping event has fired!');

    const groups = [
        {
            id: 'kubejs:rei_groups/sharestones',
            name: 'Sharestone Colors',
            pattern: /^waystones:.*_sharestone$/,
        },
        {
            id: 'kubejs:rei_groups/sleeping_bags',
            name: 'Sleeping Bags',
            pattern: /^comforts:sleeping_bag_.*/,
        },
        {
            id: 'kubejs:rei_groups/hammock',
            name: 'Hammock',
            pattern: /^comforts:hammock_.*/,
        },
    ];

    groups.forEach(group => {
        event.groupItems(group.id, group.name, [group.pattern]);
    });
});