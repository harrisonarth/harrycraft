ServerEvents.recipes(event => {
    event.remove({ id: 'create:crushing/raw_iron' })
    event.remove({ id: 'create:crushing/raw_copper' })
    event.remove({ id: 'create:crushing/raw_gold' })
    event.remove({ id: 'create:crushing/raw_zinc' })

    event.custom({
        type: "create:crushing",
        ingredients: [
            {
                item: "minecraft:raw_iron",
            },
        ],
        processingTime: 400,
        results: [
            {
                "item": "create:crushed_raw_iron",
                "count": 2     
            },
            {
                "chance": 0.75,
                "item": "create:experience_nugget"
            }
        ],
    });
    event.custom({
        type: "create:crushing",
        ingredients: [
            {
                item: "minecraft:raw_copper",
            },
        ],
        processingTime: 400,
        results: [
            {
                "item": "create:crushed_raw_copper",
                "count": 2     
            },
            {
                "chance": 0.75,
                "item": "create:experience_nugget"
            }
        ],
    });
    event.custom({
        type: "create:crushing",
        ingredients: [
            {
                item: "minecraft:raw_gold",
            },
        ],
        processingTime: 400,
        results: [
            {
                "item": "create:crushed_raw_gold",
                "count": 2     
            },
            {
                "chance": 0.75,
                "item": "create:experience_nugget"
            }
        ],
    });
    event.custom({
        type: "create:crushing",
        ingredients: [
            {
                item: "create:raw_zinc",
            },
        ],
        processingTime: 400,
        results: [
            {
                "item": "create:crushed_raw_zinc",
                "count": 2     
            },
            {
                "chance": 0.75,
                "item": "create:experience_nugget"
            }
        ],
    });
})