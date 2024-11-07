PlayerEvents.loggedIn(event => {
  const player = event.player;
  
  // Check if the player has received their inventory
  if (!player.persistentData.givenInventory) {
      player.persistentData.givenInventory = true;

      // Give the player the FTB Quests book
      player.give('ftbquests:book');
  }
});