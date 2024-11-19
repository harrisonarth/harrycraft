REIEvents.hide('item', event => {
    console.log('Hello! The Apotheosis item hide event has fired!');
    
    const itemsToHide = [
        'apotheosis:ancient_material',
        'apotheosis:boss_summoner',
    ];
    
    itemsToHide.forEach(item => event.hide(item));
});

REIEvents.groupEntries(event => {
    console.log('Hello! The Apotheosis grouping event has fired!');

    const groups = [
        {
            id: 'kubejs:rei_groups/apotheosis_tomes',
            name: 'Apotheosis Tomes',
            pattern: /^apotheosis:.*_tome$/,
        },

    ];

    groups.forEach(group => {
        event.groupItems(group.id, group.name, [group.pattern]);
    });

    const useNbt = [
        { id: 'apotheosis:potion_charm', name: 'Potion Charms' },
        { id: 'apotheosis:gem', name: 'Gems' },
    ]
    
    useNbt.forEach(itemInfo => {
        const item = Item.of(itemInfo.id)
        const { namespace, path } = Utils.id(item.id)
        event.groupSameItem(`kubejs:rei_groups/${namespace}/${path}`, itemInfo.name, item)
    })
});