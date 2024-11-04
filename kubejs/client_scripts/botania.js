REIEvents.groupEntries(event => {
    console.log('Hello! The Botania grouping event has fired!');

    const groups = [
        {
            id: 'kubejs:rei_groups/mystical_flowers',
            name: 'Mystical Flowers',
            pattern: /^botania:.*_mystical_flower$/,
        },
        {
            id: 'kubejs:rei_groups/glimmering_flowers',
            name: 'Glimmering Flowers',
            pattern: /^botania:.*_shiny_flower$/,
        },
        {
            id: 'kubejs:rei_groups/glimmering_flowers',
            name: 'Glimmering Flowers',
            pattern: /^botania:.*_shiny_flower$/,
        },
        {
            id: 'kubejs:rei_groups/floating_mystical_flowers',
            name: 'Floating Mystical Flowers',
            pattern: /^botania:.*_floating_flower$/,
        },
        {
            id: 'kubejs:rei_groups/petal_block',
            name: 'Petal Blocks',
            pattern: /^botania:.*_petal_block$/,
        },
        {
            id: 'kubejs:rei_groups/shimmering_mushroom',
            name: 'Shimmering Mushrooms',
            pattern: /^botania:.*_mushroom$/,
        },
        {
            id: 'kubejs:rei_groups/tall_flowers',
            name: 'Tall Mystical Flowers',
            pattern: /^botania:.*_double_flower$/,
        },
        {
            id: 'kubejs:rei_groups/petals',
            name: 'Mystical Petals',
            pattern: /^botania:.*_petal$/,
        },
        {
            id: 'kubejs:rei_groups/lenses',
            name: 'Lenses',
            pattern: /^botania:lens_*/,
        },
        {
            id: 'kubejs:rei_groups/runes',
            name: 'Runes',
            pattern: /^botania:rune_*/,
        },
        {
            id: 'kubejs:rei_groups/crafting_patterns',
            name: 'Crafting Patterns',
            pattern: /^botania:pattern_(?!.*framed).*/,
        },
        {
            id: 'kubejs:rei_groups/azulejo',
            name: 'Azulejo Variants',
            pattern: /^botania:azulejo_*/,
        },
    ];

    groups.forEach(group => {
        event.groupItems(group.id, group.name, [group.pattern]);
    });

    const useNbt = [
        { id: 'botania:twig_wand', name: 'Wand of the Forest' },
        { id: 'botania:dreamwood_wand', name: 'Wand of the Elven Forest' },
        { id: 'botania:flight_tiara', name: 'Flugel Tiara Variants' },
        { id: 'botania:brew_vial', name: 'Potion Vials' },
        { id: 'botania:brew_flask', name: 'Potion Flasks' },
        { id: 'botania:blood_pendant', name: 'Blood Pendant Variants' },
        { id: 'botania:incense_stick', name: 'Incense Stick Variants' },
    ]
    
    useNbt.forEach(itemInfo => {
        const item = Item.of(itemInfo.id)
        const { namespace, path } = Utils.id(item.id)
        event.groupSameItem(`kubejs:rei_groups/${namespace}/${path}`, itemInfo.name, item)
    })
});