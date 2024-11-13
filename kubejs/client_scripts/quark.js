REIEvents.hide('item', event => {
    console.log('Hello! The Quark item hide event has fired!');
    
    const itemsToHide = [
        'quark:blackstone_furnace',
        'quark:pipe',
        'quark:encased_pipe',
        'quark:chute',
        'quark:crafter',
        'quark:dragon_scale',
        'quark:deepslate_furnace',
        'quark:dirty_glass',
        'quark:dirty_glass_pane',
        'quark:hammer',
        'quark:matrix_enchanter',
        'quark:magnet',
        'quark:magnetized_block',
        'quark:rope',
        'quark:tiny_potato',
        'quark:backpack',
        'quark:crate',
        'quark:ender_watcher',
    ];

    const patternsToHide = [
        /^quark:lootr.*/,
        /^quark:.*corundum.*/,
        /^quark:hollow.*/,
        /^quark:.*chest$/,
        /^quark:egg_.*/,
        /^quark:.*shard/,
        /^quark:permafrost.*/,
        /^quark:.*_vertical_slab$/,
    ];
    
    itemsToHide.forEach(item => event.hide(item));
    patternsToHide.forEach(pattern => event.hide(pattern));

});

REIEvents.groupEntries(event => {
    console.log('Hello! The Quark grouping event has fired!');

    const groups = [
        {
            id: 'kubejs:rei_groups/framed_glass',
            name: 'Framed Glass',
            pattern: /^quark:.*_framed_glass$/,
        },
        {
            id: 'kubejs:rei_groups/framed_glass_panes',
            name: 'Framed Glass Panes',
            pattern: /^quark:.*_framed_glass_pane$/,
        },
        {
            id: 'kubejs:rei_groups/shingles',
            name: 'Shingle Colors',
            pattern: /^quark:.*_shingles$/,
        },
        {
            id: 'kubejs:rei_groups/shingles_slab',
            name: 'Shingle Slab Colors',
            pattern: /^quark:.*_shingles_slab$/,
        },
        {
            id: 'kubejs:rei_groups/shingles_stairs',
            name: 'Shingle Stairs Colors',
            pattern: /^quark:.*_shingles_stairs$/,
        },
        {
            id: 'kubejs:rei_groups/stools',
            name: 'Stools',
            pattern: /^quark:.*stool$/,
        },
        {
            id: 'kubejs:rei_groups/crystal_lamp',
            name: 'Crystal Lamps',
            pattern: /^quark:.*_crystal_lamp$/,
        },
    ];

    groups.forEach(group => {
        event.groupItems(group.id, group.name, [group.pattern]);
    });

    const useNbt = [
        { id: 'quark:ancient_tome', name: 'Ancient Tome' },
        { id: 'quark:pathfinders_quill', name: 'Pathfinders Quill' },
        { id: 'quark:seed_pouch', name: 'Seed Pouch' },
    ]
    
    useNbt.forEach(itemInfo => {
        const item = Item.of(itemInfo.id)
        const { namespace, path } = Utils.id(item.id)
        event.groupSameItem(`kubejs:rei_groups/${namespace}/${path}`, itemInfo.name, item)
    })
});