REIEvents.hide('item', event => {
    console.log('Hello! The Mekanism item hide event has fired!');
    
    const itemsToHide = [
        'mekanism:bounding_block',
    ];
    
    itemsToHide.forEach(item => event.hide(item));
});

REIEvents.groupEntries(event => {
    console.log('Hello! The Mekanism grouping event has fired!');

    const useNbt = [
        { id: 'mekanism:creative_fluid_tank', name: 'Creative Fluid Tank' },
        { id: 'mekanism:creative_chemical_tank', name: 'Creative Chemical Tank' },
    ]
    
    useNbt.forEach(itemInfo => {
        const item = Item.of(itemInfo.id)
        const { namespace, path } = Utils.id(item.id)
        event.groupSameItem(`kubejs:rei_groups/${namespace}/${path}`, itemInfo.name, item)
    })
});