ServerEvents.recipes(event => {
  console.log('Hello! The Backpacked recipe event has fired!')
  event.shaped(
    Item.of('backpacked:backpack', 1), // arg 1: output
    [
      'AAA',
      'BCB', // arg 2: the shape (array of strings)
      'AAA'
    ],
    {
      A: 'minecraft:leather',
      B: '#forge:string',  //arg 3: the mapping object
      C: 'minecraft:iron_ingot'
    }
  )
})