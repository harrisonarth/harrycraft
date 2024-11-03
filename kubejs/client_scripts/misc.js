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
        'crafting_on_a_stick:chipped_anvil',
        'crafting_on_a_stick:damaged_anvil',
        'ftbquests:lootcrate',
        'ftbquests:missing_item',
        'ftbquests:custom_icon',
        'ftbquests:barrier',
        'ftbquests:stage_barrier',
        'ftbquests:detector',
        'ironfurnaces:allthemodium_furnace',
        'ironfurnaces:vibranium_furnace',
        'ironfurnaces:unobtainium_furnace',
        'ironfurnaces:upgrade_allthemodium',
        'ironfurnaces:upgrade_vibranium',
        'ironfurnaces:upgrade_unobtainium',
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
        {
            id: 'kubejs:rei_groups/botany_pot',
            name: 'Botany Pot Colors',
            pattern: /^botanypots:.*_terracotta_botany_pot/,
        },
        {
            id: 'kubejs:rei_groups/hopper_botany_pot',
            name: 'Hopper Botany Pot Colors',
            pattern: /^botanypots:.*_terracotta_hopper_botany_pot/,
        },
        {
            id: 'kubejs:rei_groups/glazed_botany_pot',
            name: 'Glazed Botany Pots',
            pattern: /^botanypots:.*_glazed_terracotta_botany_pot/,
        },
        {
            id: 'kubejs:rei_groups/glazed_hopper_botany_pot',
            name: 'Glazed Hopper Botany Pots',
            pattern: /^botanypots:.*_glazed_terracotta_hopper_botany_pot/,
        },
        {
            id: 'kubejs:rei_groups/concrete_botany_pot',
            name: 'Concrete Botany Pots',
            pattern: /^botanypots:.*_concrete_botany_pot/,
        },
        {
            id: 'kubejs:rei_groups/concrete_hopper_botany_pot',
            name: 'Concrete Hopper Botany Pots',
            pattern: /^botanypots:.*_concrete_hopper_botany_pot/,
        },
    ];

    groups.forEach(group => {
        event.groupItems(group.id, group.name, [group.pattern]);
    });
});