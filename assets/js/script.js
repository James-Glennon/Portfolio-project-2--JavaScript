/**
 * Returns an array of all Dota2 Heroes and their attributes in the following order;
 * Hero name, Move speed, Attack range, Attack Type, Ultimate ability name.
 */
function returnHeroArray() {
let heroesArray = [
    // Strength Heroes    
    ['Abaddon', 325, 150, 'melee', 'Borrowed Time'],
    ['Alchemist', 305, 150, 'melee', 'Chemical Rage'],
    ['Axe', 310, 150, 'melee', 'Culling Blade'],
    ['Beastmaster', 305, 150, 'melee', 'Primal Roar'],
    ['Brewmaster', 310, 150, 'melee', 'Primal Split'],
    ['Bristleback', 295, 150, 'melee', 'Warpath'],
    ['Centaur Warrunner', 150, 300, 'melee', 'Stampede'],
    ['Chaos Knight', 325, 150, 'melee', 'Phantasm'],
    ['Clockwerk', 310, 150, 'melee', 'Hookshot'],
    ['Dawnbreaker', 310, 150, 'melee', 'Solar Guardian'],
    ['Doom (name)', 285, 150, 'melee', 'Doom (spell)'],
    ['Dragon Knight', 310, 150, 'melee', 'Elder Dragon Form'],
    ['Earth Spirit', 290, 150, 'melee', 'Magnitize'],
    ['Earthshaker', 315, 150, 'melee', 'Echo Slam'],
    ['Elder Titan', 310, 150, 'melee', 'Earth Splitter'],
    ['Huskar', 295, 400, 'ranged', 'Life Break'],
    ['IO', 320, 500, 'ranged', 'Relocate'],
    ['Kunkka', 315, 150, 'melee', 'Ghostship'],
    ['Legion Commander', 330, 150, 'melee', 'Duel'],
    ['Lifestealer', 320, 150, 'melee', 'Infest'],
    ['Lycan', 305, 150, 'melee', 'Shapeshift'],
    ['Magnus', 305, 150, 'melee', 'Reverse Polarity'],
    ['Marci', 315, 150, 'melee', 'Unleash'],
    ['Mars', 310, 250, 'melee', 'Arena of Blood'],
    ['Night Stalker', 295, 150, 'melee', 'Dark Ascension'],
    ['Omniknight', 315, 150, 'melee', 'Guardian Angel'],
    ['Phoenix', 280, 525, 'ranged', 'Supernova'],
    ['Primal Beast', 310, 150, 'melee', 'Pulverize'],
    ['Pudge', 280, 175, 'melee', 'Dismember'],
    ['Sand King', 290,  150, 'melee', 'Epicenter'],
    ['Slardar', 300, 150, 'melee', 'Corrosive Haze'],
    ['Snapfire', 300, 500, 'ranged', 'Mortimer Kisses'],
    ['Spirit Breaker', 295, 150, 'melee', 'Nether Strike'],
    ['Sven', 325, 150, 'melee', "God's Strength"],
    ['Tidehunter', 300, 150, 'melee', 'Ravage'],
    ['Timbersaw', 290, 150, 'melee', 'Chakram'],
    ['Tiny', 285, 150, 'melee', 'Grow'],
    ['Treant Protector', 285, 150, 'melee', 'Overgrowth'],
    ['Tusk', 310,  150, 'melee', 'Walrus Punch!'],
    ['Underlord', 290, 200, 'melee', "Fiend's Gate"],
    ['Undying', 300, 150, 'melee', 'Flesh Golem'],
    ['Wraith King', 315, 150, 'melee', 'Reincarnation'],

]

return heroesArray};

/**
 * Converts the heroArray() into a key/value paired object. 
 */
function createHeroObject(){

let heroObject = {
    heroName: '',
    moveSpeed: '',
    attackRange: '',
    attackType: '',
    ultimateName: '',
};

let heroesArray = returnHeroArray(); 
for (let i = 0; i < heroesArray.length; i++){
    let heroArray = heroesArray[i];
    heroObject.heroName = heroArray[0];
    heroObject.moveSpeed = heroArray[1];
    heroObject.attackRange = heroArray[2];
    heroObject.attackType = heroArray[3];
    heroObject.ultimateName = heroArray[4];
    console.log(heroObject);
}

}
createHeroObject();