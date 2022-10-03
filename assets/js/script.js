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
    
    // Agility Heroes
    ['Anti-Mage', 310, 150, 'melee', 'Mana Void'],
    ['Arc Warden', 285, 625, 'ranged', 'Tempest Double'],
    ['Bloodseeker', 300, 150, 'melee', 'Rupture'],
    ['Bounty Hunter', 325, 150, 'melee', 'Track'],
    ['Broodmother', 285, 150, 'melee', 'Spawn Spiderlings'],
    ['Clinkz', 290, 600, 'ranged', 'Death Pact'],
    ['Drow Ranger', 300, 625, 'ranged', 'Marksmanship'],
    ['Ember Spirit', 300, 150, 'melee', 'Fire Remnant'],
    ['Faceless Void', 300, 150, 'melee','Chronosphere'],
    ['Gyrocopter', 315, 365, 'ranged', 'Call Down'],
    ['Hoodwink', 310, 575, 'ranged', 'Sharpshooter'],
    ['Juggernaut', 300, 150, 'melee', 'Omnislash'],
    ['Lone Druid', 325, 550, 'ranged', 'True Form'],
    ['Luna', 325, 330, 'ranged', 'Eclipse'],
    ['Medusa', 275, 600, 'ranged', 'Stone Gaze'],
    ['Meepo', 330, 150, 'melee', 'Divided We Stand'],
    ['Mirana', 290, 630, 'ranged', 'Moonlight Shadow'],
    ['Monkey King', 300, 300, 'melee', "Wukong's Command"],
    ['Morphling', 285, 350, 'ranged', 'Morph'],
    ['Naga Siren', 330, 150, 'melee', 'Song of the Siren'],
    ['Nyx Assassin', 310, 150, 'melee', 'Vendetta'],
    ['Pangolier', 300, 150, 'melee', 'Rolling Thunder'],
    ['Phantom Assassin', 305,  150, 'melee', 'Coup de Grace'],
    ['Phantom Lancer', 290,  150, 'melee', 'Juxtapose'],
    ['Razor', 280, 475, 'ranged', 'Eye of the Storm'],
    ['Riki', 315, 150, 'melee', 'Cloak and Dagger'],
    ['Shadow Fiend', 305, 500, 'ranged', 'Requiem of Souls'],
    ['Slark', 300,  150, 'melee', 'Shadow Dance'],
    ['Sniper', 285, 550, 'ranged', 'Assassinate'],
    ['Spectre', 290, 150, 'melee', 'Haunt'],
    ['Templar Assassin', 305, 160, 'ranged', 'Psionic Trap'],
    ['Terrorblade', 315,  150, 'melee', 'Sunder'],
    ['Troll Warlord', 290, 500, 'ranged', 'Battle Trance'],
    ['Ursa', 310, 150, 'melee', 'Enrage'],
    ['Vengeful Spirit', 295, 400, 'ranged', 'Nether Swap'],
    ['Venomancer', 280, 450, 'ranged', 'Poison Nova'],
    ['Viper', 275, 575, 'ranged', 'Viper Strike'],
    ['Weaver', 275, 425, 'ranged', 'Time Lapse'],
    
    // Intelligence Heroes
]

return heroesArray};

/**
 * Converts the heroArray() into key/value paired objects and pushes the objects to an array.
 * Returns the complete [{object} array].
 */
function createHeroesObjects(){

let heroesArray = returnHeroArray(); 
let heroesObjects = [];

for (let i = 0; i < heroesArray.length; i++){

    let heroObject = {
        heroName: '',
        moveSpeed: '',
        attackRange: '',
        attackType: '',
        ultimateName: '',
    };

    let heroArray = heroesArray[i];
    heroObject.heroName = heroArray[0];
    heroObject.moveSpeed = heroArray[1];
    heroObject.attackRange = heroArray[2];
    heroObject.attackType = heroArray[3];
    heroObject.ultimateName = heroArray[4];
    heroesObjects.push(heroObject);
}
console.log(heroesObjects);
return heroesObjects
}

createHeroesObjects();

/**
 * Creates an array of all Strength hero objects and selects one at random.
 * Logs strengthHeroesArray and the randomly selected hero to the console.
 */
function randomStrengthHero(){
    let allHeroes = createHeroesObjects();
    let strengthHeroes = [];
    
    for (i = 0; i < 42; i++){
    strengthHeroes.push(allHeroes[i]);
   }
    console.log(strengthHeroes);
    let randomStrengthHero = strengthHeroes[(Math.floor(Math.random()*42))];
    console.log(randomStrengthHero)
}

randomStrengthHero();

/**
 * Creates an array of all Agility hero objects and selects one at random.
 * Logs agilityHeroesArray and the randomly selected hero to the console.
 */
 function randomAgilityHero(){
    let allHeroes = createHeroesObjects();
    let agilityHeroes = [];
    
    for (i = 42; i < allHeroes.length; i++){
    agilityHeroes.push(allHeroes[i]);
   }
    console.log(agilityHeroes);
    let randomAgilityHero = agilityHeroes[(Math.floor(Math.random()*38))];
    console.log(randomAgilityHero)
}

randomAgilityHero();