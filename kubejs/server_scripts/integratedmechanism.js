ServerEvents.recipes((e) => {
    e.custom({
      type: "create:sequenced_assembly",
      ingredient:{
        item: 'create:golden_sheet'
      },
      results: [{item:'create_dd:integrated_mechanism'}],
      loops: 2,
      sequence: [
        {
          type: "create:deploying",
          ingredients: [{item: 'create_dd:incomplete_integrated_mechanism'},{item: 'create:precision_mechanism'}],
          results: [{item: 'create_dd:incomplete_integrated_mechanism'}],
        },
        {
          type: "create:deploying",
          ingredients: [{item: 'create_dd:incomplete_integrated_mechanism'},{item: 'mekanism:ingot_osmium'}],
          results: [{item: 'create_dd:incomplete_integrated_mechanism'}],
        },
        {
            type: "create:deploying",
            ingredients: [{item: 'create_dd:incomplete_integrated_mechanism'},{item: 'create:electron_tube'}],
            results: [{item: 'create_dd:incomplete_integrated_mechanism'}],
        },
      ],
      transitionalItem: {item: 'create_dd:incomplete_integrated_mechanism'}
    }).id('kubejs:integrated_mechanism')
  })