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
});