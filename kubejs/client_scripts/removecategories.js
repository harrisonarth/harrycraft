REIEvents.removeCategories(event => {
	console.log('Hello! The category remove event fired!');
	
	// Hide REI's tag category
	event.remove('minecraft:plugins/tag')
	event.remove('emi:tag')
	event.remove('roughlyenoughresources:loot_category')
})