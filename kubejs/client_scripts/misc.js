REIEvents.hide('item', event => {
    console.log('Hello! The Misc item hide event has fired!');
    
    const itemsToHide = [
        'moonlight:placeable_item',
        'crafting_on_a_stick:chipped_anvil',
        'crafting_on_a_stick:damaged_anvil',
        'dramaticdoors:tall_silver_door',
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
        'simplytools:paper_bundle',
        'xpbook:xp_book',
    ];

    const patternsToHide = [
        /^lootr:.*/,
        /^dramaticdoors:short_.*/,
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
            id: 'kubejs:rei_groups/canvas_sign',
            name: 'Canvas Sign Colors',
            pattern: /^farmersdelight:(?!.*hanging).*_canvas_sign$/,
        },
        {
            id: 'kubejs:rei_groups/hanging_canvas_sign',
            name: 'Hanging Canvas Sign Colors',
            pattern: /^farmersdelight:.*_hanging_canvas_sign$/,
        },
    ];

    groups.forEach(group => {
        event.groupItems(group.id, group.name, [group.pattern]);
    });

    const useNbt = [
        { id: 'sophisticatedbackpacks:backpack', name: 'Backpack' },
    ]
    
    useNbt.forEach(itemInfo => {
        const item = Item.of(itemInfo.id)
        const { namespace, path } = Utils.id(item.id)
        event.groupSameItem(`kubejs:rei_groups/${namespace}/${path}`, itemInfo.name, item)
    })
});