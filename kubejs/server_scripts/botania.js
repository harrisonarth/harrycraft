ServerEvents.recipes(event => {
    event.custom({
        type: "botania:terra_plate",
        ingredients: [
            {
            item: "minecraft:ender_eye"
            },
            {
            item: "minecraft:crying_obsidian"
            },
            {
            item: "minecraft:nether_wart"
            }
            ],
            "mana": 250000,
            "result": {
              "item": "minecraft:ghast_tear"
            }
    })
    event.custom({
        "type": "botania:orechid",
        "input": {
          "type": "block",
          "block": "minecraft:stone"
        },
        "output": {
          "type": "block",
          "block": "create:zinc_ore"
        },
        "weight": 19371
  })
})