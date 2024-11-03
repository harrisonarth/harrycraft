REIEvents.hide('item', event => {
    console.log('Hello! The Supplementaries item hide event has fired!');
    
    const itemsToHide = [
        'supplementaries:bomb_projectile',
        'supplementaries:bomb_blue_projectile',
        'supplementaries:bomb_spiky_projectile',
        'supplementaries:gunpowder',
    ];

    itemsToHide.forEach(item => event.hide(item));
});

REIEvents.groupEntries(event => {
    console.log('Hello! The Supplementaries grouping event has fired!');

    const groups = [
        {
            id: 'kubejs:rei_groups/flags',
            name: 'Flags',
            pattern: /^supplementaries:flag_.*/,
        },
        {
            id: 'kubejs:rei_groups/presents',
            name: 'Present Colors',
            pattern: /^supplementaries:present_.*/,
        },
        {
            id: 'kubejs:rei_groups/trapped_presents',
            name: 'Trapped Present Colors',
            pattern: /^supplementaries:trapped_present_.*/,
        },
        {
            id: 'kubejs:rei_groups/candle_holder',
            name: 'Candle Holder Colors',
            pattern: /^supplementaries:candle_holder_.*/,
        },
        {
            id: 'kubejs:rei_groups/awning',
            name: 'Awning Colors',
            pattern: /^supplementaries:awning_.*/,
        },
    ];

    groups.forEach(group => {
        event.groupItems(group.id, group.name, [group.pattern]);
    });

    const useNbt = [
        { id: 'supplementaries:bamboo_spikes_tipped', name: 'Tipped Bamboo Spikes' },
        { id: 'supplementaries:bunting', name: 'Bunting Colors' },
    ]
    
    useNbt.forEach(itemInfo => {
        const item = Item.of(itemInfo.id)
        const { namespace, path } = Utils.id(item.id)
        event.groupSameItem(`kubejs:rei_groups/${namespace}/${path}`, itemInfo.name, item)
    })
});