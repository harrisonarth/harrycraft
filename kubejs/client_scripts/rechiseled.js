REIEvents.groupEntries(event => {
    console.log('Hello! The Quark grouping event has fired!');

    const groups = [
        {
            id: 'kubejs:rei_groups/amethyst',
            name: 'Rechiseled: Amethyst',
            pattern: /^rechiseled:amethyst_block.*/,
        },
        {
            id: 'kubejs:rei_groups/andesite',
            name: 'Rechiseled: Andesite',
            pattern: /^rechiseled:andesite_.*/,
        },
        {
            id: 'kubejs:rei_groups/basalt',
            name: 'Rechiseled: Basalt',
            pattern: /^rechiseled:basalt_.*/,
        },
        {
            id: 'kubejs:rei_groups/basalt',
            name: 'Rechiseled: Basalt',
            pattern: /^rechiseled:basalt_.*/,
        },
        {
            id: 'kubejs:rei_groups/blackstone',
            name: 'Rechiseled: Blackstone',
            pattern: /^rechiseled:blackstone_.*/,
        },
        {
            id: 'kubejs:rei_groups/blue_ice',
            name: 'Rechiseled: Blue Ice',
            pattern: /^rechiseled:blue_ice_.*/,
        },
        {
            id: 'kubejs:rei_groups/bone_block',
            name: 'Rechiseled: Bone Block',
            pattern: /^rechiseled:bone_block_.*/,
        },
        {
            id: 'kubejs:rei_groups/coal_block',
            name: 'Rechiseled: Coal Block',
            pattern: /^rechiseled:coal_block_.*/,
        },
        {
            id: 'kubejs:rei_groups/cobbled_deepslate',
            name: 'Rechiseled: Cobbled Deepslate',
            pattern: /^rechiseled:cobbled_deepslate_.*/,
        },
        {
            id: 'kubejs:rei_groups/cobblestone',
            name: 'Rechiseled: Cobblestone',
            pattern: /^rechiseled:cobblestone_.*/,
        },
        {
            id: 'kubejs:rei_groups/copper_block',
            name: 'Rechiseled: Copper Block',
            pattern: /^rechiseled:copper_block_.*/,
        },
        {
            id: 'kubejs:rei_groups/dark_prismarine',
            name: 'Rechiseled: Dark Prismarine',
            pattern: /^rechiseled:dark_prismarine_.*/,
        },
        {
            id: 'kubejs:rei_groups/diamond_block',
            name: 'Rechiseled: Diamond Block',
            pattern: /^rechiseled:diamond_block_.*/,
        },
        {
            id: 'kubejs:rei_groups/diorite',
            name: 'Rechiseled: Diorite',
            pattern: /^rechiseled:diorite_.*/,
        },
        {
            id: 'kubejs:rei_groups/dirt',
            name: 'Rechiseled: Dirt',
            pattern: /^rechiseled:dirt_.*/,
        },
        {
            id: 'kubejs:rei_groups/emerald_block',
            name: 'Rechiseled: Emerald Block',
            pattern: /^rechiseled:emerald_block_.*/,
        },
        {
            id: 'kubejs:rei_groups/end_stone',
            name: 'Rechiseled: End Stone',
            pattern: /^rechiseled:end_stone.*/,
        },
        {
            id: 'kubejs:rei_groups/glowstone',
            name: 'Rechiseled: Glowstone',
            pattern: /^rechiseled:glowstone.*/,
        },
        {
            id: 'kubejs:rei_groups/gold_block',
            name: 'Rechiseled: Gold Block',
            pattern: /^rechiseled:gold_block_.*/,
        },
        {
            id: 'kubejs:rei_groups/granite',
            name: 'Rechiseled: Granite',
            pattern: /^rechiseled:granite_.*/,
        },
        {
            id: 'kubejs:rei_groups/granite',
            name: 'Rechiseled: Granite',
            pattern: /^rechiseled:granite_.*/,
        },
        {
            id: 'kubejs:rei_groups/iron_block',
            name: 'Rechiseled: Iron Block',
            pattern: /^rechiseled:iron_block_.*/,
        },
        {
            id: 'kubejs:rei_groups/lapis_block',
            name: 'Rechiseled: Lapis Block',
            pattern: /^rechiseled:lapis_block_.*/,
        },
        {
            id: 'kubejs:rei_groups/lapis_block',
            name: 'Rechiseled: Lapis Block',
            pattern: /^rechiseled:lapis_block_.*/,
        },
        {
            id: 'kubejs:rei_groups/mossy_cobblestone',
            name: 'Rechiseled: Mossy Cobblestone',
            pattern: /^rechiseled:mossy_cobblestone_.*/,
        },
        {
            id: 'kubejs:rei_groups/netherrack',
            name: 'Rechiseled: Netherrack',
            pattern: /^rechiseled:netherrack_.*/,
        },
        {
            id: 'kubejs:rei_groups/nether_bricks',
            name: 'Rechiseled: Nether Bricks',
            pattern: /^rechiseled:nether_bricks_.*/,
        },
        {
            id: 'kubejs:rei_groups/netherite_block',
            name: 'Rechiseled: Netherite Block',
            pattern: /^rechiseled:netherite_block_.*/,
        },
        {
            id: 'kubejs:rei_groups/obsidian',
            name: 'Rechiseled: Obsidian',
            pattern: /^rechiseled:obsidian_.*/,
        },
        {
            id: 'kubejs:rei_groups/prismarine_bricks',
            name: 'Rechiseled: Prismarine Bricks',
            pattern: /^rechiseled:prismarine_bricks_.*/,
        },
        {
            id: 'kubejs:rei_groups/purpur',
            name: 'Rechiseled: Purpur',
            pattern: /^rechiseled:purpur_.*/,
        },
        {
            id: 'kubejs:rei_groups/quartz_block',
            name: 'Rechiseled: Quartz Block',
            pattern: /^rechiseled:quartz_block_.*/,
        },
        {
            id: 'kubejs:rei_groups/red_nether_bricks',
            name: 'Rechiseled: Red Nether Bricks',
            pattern: /^rechiseled:red_nether_bricks_.*/,
        },
        {
            id: 'kubejs:rei_groups/red_sandstone',
            name: 'Rechiseled: Red Sandstone',
            pattern: /^rechiseled:red_sandstone_.*/,
        },
        {
            id: 'kubejs:rei_groups/redstone_block',
            name: 'Rechiseled: Redstone Block',
            pattern: /^rechiseled:redstone_block_.*/,
        },
        {
            id: 'kubejs:rei_groups/sandstone',
            name: 'Rechiseled: Sandstone',
            pattern: /^rechiseled:sandstone_.*/,
        },
        {
            id: 'kubejs:rei_groups/stone',
            name: 'Rechiseled: Stone',
            pattern: /^rechiseled:stone_.*/,
        },
    ];

    groups.forEach(group => {
        event.groupItems(group.id, group.name, [group.pattern]);
    });

    const wood = [
        'acacia', 'bamboo', 'birch', 'cherry', 'crimson',
        'dark_oak', 'jungle', 'mangrove', 'oak', 'spruce', 'warped'
    ];

    wood.forEach(type => {
        const groupId = `kubejs:rei_groups/${type}`;
        const groupName = `Rechiseled: ${type.charAt(0).toUpperCase() + type.slice(1)}`;
        const pattern = new RegExp(`^rechiseled:${type}_planks.*`);

        event.groupItems(groupId, groupName, [pattern]);
    });   
});