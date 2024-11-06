ServerEvents.tags('item', event => {
    console.log('Hello! The tag event fired!');
    //adds Construction Wand tag for quest
    event.add ('forge:build_wands', 
        'constructionwand:stone_wand',
        'constructionwand:iron_wand',
        'constructionwand:diamond_wand',
        'constructionwand:infinity_wand',
    )
})