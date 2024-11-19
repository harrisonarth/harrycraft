REIEvents.hide('item', event => {
    console.log('Hello! The Create item hide event has fired!');
    
    const itemsToHide = [
        'create:copper_backtank_placeable',
        'create:netherite_backtank_placeable',
        'create:crushed_raw_osmium',
        'create:crushed_raw_platinum',
        'create:crushed_raw_silver',
        'create:crushed_raw_tin',
        'create:crushed_raw_lead',
        'create:crushed_raw_quicksilver',
        'create:crushed_raw_aluminum',
        'create:crushed_raw_uranium',
        'create:crushed_raw_nickel',
        'create:chromatic_compound',
        'create:refined_radiance',
        'create:shadow_steel',
        'create_dd:giant_gear',
        'create_jetpack:jetpack_placeable',
        'create_jetpack:netherite_jetpack_placeable',
    ];
    
    itemsToHide.forEach(item => event.hide(item));
});

REIEvents.groupEntries(event => {
    console.log('Hello! The Create grouping event has fired!');

    const groups = [
        {
            id: 'kubejs:rei_groups/valve_colors',
            name: 'Valve Handle Colors',
            pattern: /^create:.*_valve_handle$/,
        },
        {
            id: 'kubejs:rei_groups/seats',
            name: 'Seat Colors',
            pattern: /^create:.*_seat$/,
        },
        {
            id: 'kubejs:rei_groups/toolboxes',
            name: 'Toolboxes',
            pattern: /^create:.*_toolbox$/,
        },
    ];

    groups.forEach(group => {
        event.groupItems(group.id, group.name, [group.pattern]);
    });

    const useNbt = [
        { id: 'createcobblestone:mechanical_generator', name: 'Mechanical Generator Variants' }, 
    ]
    
    useNbt.forEach(itemInfo => {
        const item = Item.of(itemInfo.id)
        const { namespace, path } = Utils.id(item.id)
        event.groupSameItem(`kubejs:rei_groups/${namespace}/${path}`, itemInfo.name, item)
    })
});