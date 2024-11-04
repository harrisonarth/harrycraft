REIEvents.hide('item', event => {
    console.log('Hello! The Create item hide event has fired!');
    
    const itemsToHide = [
        'create:copper_backtank_placeable',
        'create:netherite_backtank_placeable',
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
});