ServerEvents.recipes(event => {
  console.log('Hello! The recipe change event fired!');

  const hoeDamageRecipes = [
    { output: 'minecraft:farmland', input: ['#minecraft:dirt', '#minecraft:hoes'] },
    { output: 'farmersdelight:rich_soil_farmland', input: ['farmersdelight:rich_soil', '#minecraft:hoes'] }
  ];

  hoeDamageRecipes.forEach(recipe => {
    event.recipes.kubejs
      .shapeless(recipe.output, recipe.input)
      .damageIngredient("#minecraft:hoes");
  });

  const materials = [
    'bone', 'coal', 'emerald', 'ender', 'fiery', 'glowstone', 'lapis',
    'nether', 'obsidian', 'paper', 'prismarine', 'quartz', 'redstone',
    'slime',
  ];

  // List of tool types by mod
  const toolsByMod = {
    'vanillaaiots': ['aiot'],
    'simplytools': ['hammer', 'excavator', 'hammer_head', 'excavator_head',],
    'morevanillatools': ['sword', 'shovel', 'axe', 'pickaxe', 'hoe',],
  };
  // Generate and hide items dynamically
  Object.entries(toolsByMod).forEach(([mod, tools]) => {
    materials.forEach(material => {
      tools.forEach(tool => {
        const itemID = `${mod}:${material}_${tool}`;
        event.remove({ output: itemID });
      });
    });
  });
  // Rotten Flesh to Leather Recipe
  event.recipes.minecraft.campfire_cooking({
    ingredient: [{ item: 'minecraft:rotten_flesh' }],
    result: 'minecraft:leather',
    experience: 0.35,
    cookingtime: 600
  })
});
