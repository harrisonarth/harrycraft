ServerEvents.recipes(event => {
  console.log('Hello! The recipe change event fired!');

  event.shaped(Item.of('backpacked:backpack', 1), [
    'AAA',
    'BCB',
    'AAA'
  ], {
    A: 'minecraft:leather',
    B: '#forge:string',
    C: 'minecraft:iron_ingot'
  });

  const hoeDamageRecipes = [
    { output: 'minecraft:farmland', input: ['#minecraft:dirt', '#minecraft:hoes'] },
    { output: 'farmersdelight:rich_soil_farmland', input: ['farmersdelight:rich_soil', '#minecraft:hoes'] }
  ];

  hoeDamageRecipes.forEach(recipe => {
    event.recipes.kubejs
      .shapeless(recipe.output, recipe.input)
      .damageIngredient("#minecraft:hoes");
  });
});