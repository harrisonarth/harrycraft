REIEvents.hide('item', event => {
    console.log('Hello! The Vanilla item hide event has fired!');
    
    const itemsToHide = [
        'minecraft:barrier',
        'minecraft:light',
        'minecraft:structure_block',
        'minecraft:jigsaw',
        'minecraft:structure_void',
        'minecraft:debug_stick',
        'minecraft:knowledge_book',
        'minecraft:command_block',
        'minecraft:repeating_command_block',
        'minecraft:chain_command_block',
        'minecraft:command_block_minecart',
    ];
    
    itemsToHide.forEach(item => event.hide(item));
});

REIEvents.groupEntries(event => {
    console.log('Hello! The Vanilla grouping event has fired!');

    const groups = [
        {
            id: 'kubejs:rei_groups/wool',
            name: 'Wool Colors',
            pattern: /^minecraft:.*_wool$/,
        },
        {
            id: 'kubejs:rei_groups/carpet',
            name: 'Carpet Colors',
            pattern: /^minecraft:.*_carpet$/,
        },
        {
            id: 'kubejs:rei_groups/stained_glass',
            name: 'Stained Glass Colors',
            pattern: /^minecraft:.*_stained_glass$/,
        },
        {
            id: 'kubejs:rei_groups/stained_glass_panes',
            name: 'Stained Glass Pane Colors',
            pattern: /^minecraft:.*_stained_glass_pane$/,
        },
        {
            id: 'kubejs:rei_groups/shulker',
            name: 'Shulker Box Colors',
            pattern: /^minecraft:.*_shulker_box$/,
        },
        {
            id: 'kubejs:rei_groups/terracotta',
            name: 'Terracotta Colors',
            pattern: /^minecraft:.*_terracotta$/,
        },
        {
            id: 'kubejs:rei_groups/glazed_terracotta',
            name: 'Glazed Terracotta Colors',
            pattern: /^minecraft:.*_glazed_terracotta$/,
        },
        {
            id: 'kubejs:rei_groups/concrete',
            name: 'Concrete Colors',
            pattern: /^minecraft:.*_concrete$/,
        },
        {
            id: 'kubejs:rei_groups/concrete_powder',
            name: 'Concrete Powder Colors',
            pattern: /^minecraft:.*_concrete_powder$/,
        },
        {
            id: 'kubejs:rei_groups/beds',
            name: 'Beds',
            pattern: /^minecraft:.*_bed$/,
        },
        {
            id: 'kubejs:rei_groups/banners',
            name: 'Banners',
            pattern: /^minecraft:.*_banner$/,
        },
        {
            id: 'kubejs:rei_groups/banner_patterns',
            name: 'Banner Patterns',
            pattern: /^minecraft:.*_banner_pattern$/,
        },
        {
            id: 'kubejs:rei_groups/candles',
            name: 'Candle Colors',
            pattern: /^minecraft:.*_candle$/,
        },
        {
            id: 'kubejs:rei_groups/smithing_templates',
            name: 'Smithing Templates',
            pattern: /^minecraft:.*_smithing_template$/,
        },
        {
            id: 'kubejs:rei_groups/pottery_sherds',
            name: 'Pottery Sherds',
            pattern: /^minecraft:.*_pottery_sherd$/,
        },
    ];

    groups.forEach(group => {
        event.groupItems(group.id, group.name, [group.pattern]);
    });

    const useNbt = [
        { id: 'minecraft:painting', name: 'Paintings' },
        { id: 'minecraft:goat_horn', name: 'Goat Horns' },
        { id: 'minecraft:suspicious_stew', name: 'Suspicious Stew' },
    ]

    useNbt.forEach(itemInfo => {
        const item = Item.of(itemInfo.id)
        const { namespace, path } = Utils.id(item.id)
        event.groupSameItem(`kubejs:rei_groups/${namespace}/${path}`, itemInfo.name, item)
    })
});