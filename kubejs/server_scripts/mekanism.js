ServerEvents.recipes((e) => {
    // integrated mechanism
    e.custom({
        type: "create:sequenced_assembly",
        ingredient: {
            item: 'create:golden_sheet'
        },
        results: [{ item: 'create_dd:integrated_mechanism' }],
        loops: 2,
        sequence: [
            {
                type: "create:deploying",
                ingredients: [{ item: 'create_dd:incomplete_integrated_mechanism' }, { item: 'create:precision_mechanism' }],
                results: [{ item: 'create_dd:incomplete_integrated_mechanism' }],
            },
            {
                type: "create:deploying",
                ingredients: [{ item: 'create_dd:incomplete_integrated_mechanism' }, { item: 'mekanism:ingot_osmium' }],
                results: [{ item: 'create_dd:incomplete_integrated_mechanism' }],
            },
            {
                type: "create:deploying",
                ingredients: [{ item: 'create_dd:incomplete_integrated_mechanism' }, { item: 'create:electron_tube' }],
                results: [{ item: 'create_dd:incomplete_integrated_mechanism' }],
            },
        ],
        transitionalItem: { item: 'create_dd:incomplete_integrated_mechanism' }
    }).id('kubejs:integrated_mechanism')

    // metallurgic_infuser
    e.remove({ id: 'mekanism:metallurgic_infuser' })
    e.shaped(
        Item.of('mekanism:metallurgic_infuser', 1),
        [
            'IFI',
            'RMR',
            'IFI'
        ],
        {
            I: 'minecraft:iron_ingot',
            F: 'minecraft:blast_furnace',
            R: 'minecraft:redstone_block',
            M: 'create_dd:integrated_mechanism'
        })

    // steel casing
    e.remove({ id: 'mekanism:steel_casing' })
    e.shaped(
        Item.of('mekanism:steel_casing', 1),
        [
            'SGS',
            'GMG',
            'SGS'
        ],
        {
            S: 'mekanism:ingot_steel',
            G: '#forge:glass/silica',
            M: 'create_dd:integrated_mechanism'
        })
    // logistical transport cable 
    e.remove({ id: 'mekanism:transmitter/logistical_transporter/basic' })
    e.shaped(
        Item.of('mekanism:basic_logistical_transporter', 4),
        [
            'SCS',
            'GMG',
            'SCS'
        ],
        {
            S: 'mekanism:ingot_steel',
            G: '#forge:glass/silica',
            M: 'create_dd:integrated_mechanism',
            C: 'mekanism:basic_control_circuit'
        })
})