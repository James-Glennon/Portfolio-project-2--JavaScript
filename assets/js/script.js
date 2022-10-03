/**
 * Returns an array of all Dota2 Heroes and their attributes in the following order;
 * Hero name, Move speed, Attack range, Attack type, Ultimate ability name.
 */
function returnHeroesArray() {
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
    ['Ancient Apparition', 285, 675, 'ranged', 'Ice Blast'],
    ['Bane', 305, 400, 'ranged', "Fiend's Grip"],
    ['Batrider', 310, 400, 'ranged', 'Flaming Lasso'],
    ['Chen', 305, 650, 'ranged', 'Hand of God'],
    ['Crystal Maiden', 280, 600, 'ranged', 'Freezing Field'],
    ['Dark Seer', 295, 150, 'melee', 'Wall of Replica'],
    ['Dark Willow', 290, 475, 'ranged', 'Bedlam & Terrorize'],
    ['Dazzle', 305, 575, 'ranged', 'Good Juju & Bad Juju'],
    ['Death Prophet', 285, 600, 'ranged', 'Exorcism'],
    ['Disruptor', 295, 625, 'ranged', 'Static Storm'],
    ['Enchantress', 320, 575, 'ranged', 'Untouchable'],
    ['Enigma', 290, 500, 'ranged', 'Black Hole'],
    ['Grimstroke', 290, 600, 'ranged', 'Soulbind'],
    ['Invoker', 285, 600, 'ranged', 'Invoke'],
    ['Jakiro', 290, 400, 'ranged', 'Macropyre'],
    ['Keeper of the Light', 320, 600, 'ranged', 'Spirit Form'],
    ['Leshrac', 325, 575, 'ranged', 'Pulse Nova'],
    ['Lich', 295, 550, 'ranged', 'Chain Frost'],
    ['Lina', 290, 670, 'ranged', 'Laguna Blade'],
    ['Lion', 290, 600, 'ranged', 'Finger of Death'],
    ["Nature's Prophet", 295, 600, 'ranged', 'Wrath of Nature'],
    ['Necrophos', 280, 500, 'ranged', "Reaper's Scythe"],
    ['Ogre Magi', 290, 150, 'melee', 'Multicast'],
    ['Oracle', 295, 620, 'ranged', 'False Promise'],
    ['Outworld Destroyer', 320, 450, 'ranged', "Sanity's Eclipse"],
    ['Puck', 290, 550, 'ranged', 'Dream Coil'],
    ['Pugna', 330, 630, 'ranged', 'Life Drain'],
    ['Queen of Pain', 290, 550, 'ranged', 'Sonic Wave'],
    ['Rubick', 290, 550, 'ranged', 'Spell Steal'],
    ['Shadow Demon', 290, 500, 'ranged', 'Demonic Purge'],
    ['Shadow Shaman', 285, 400, 'ranged', 'Mass Serpent Ward'],
    ['Silencer', 290, 600, 'ranged', 'Global Silence'],
    ['Skywrath Mage', 325, 625, 'ranged', 'Mystic Flare'],
    ['Storm Spirit', 285, 480, 'ranged', 'Ball Lightning'],
    ['Techies', 300, 700, 'ranged', 'Proximity Mines'],
    ['Tinker', 290, 500, 'ranged', 'Rearm'],
    ['Visage', 280, 600, 'ranged', 'Summon Familiars'],
    ['Void Spirit', 290, 200, 'melee', 'Astral Step'],
    ['Warlock', 300, 600, 'ranged', 'Chaotic Offering'],
    ['Windranger', 290, 600, 'ranged', 'Focus Fire'],
    ['Winter Wyvern', 285, 425, 'ranged', "Winter's Curse"],
    ['Witch Doctor', 300, 550, 'ranged', 'Death Ward'],
    ['Zeus', 315, 380, 'ranged', "Thundergod's Wrath"]
];

return heroesArray};

/**
 * Converts the heroArray() into key/value paired objects and pushes the objects to an array.
 * Returns the complete [{object} array].
 */
function createHeroesObjects(){

let heroesArray = returnHeroesArray(); 
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
return heroesObjects;
}

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
    
    for (i = 42; i < 80; i++){
    agilityHeroes.push(allHeroes[i]);
   }
    console.log(agilityHeroes);
    let randomAgilityHero = agilityHeroes[(Math.floor(Math.random()*38))];
    console.log(randomAgilityHero)
}

randomAgilityHero();

/**
 * Creates an array of all Intelligence hero objects and selects one at random.
 * Logs intelligenceHeroesArray and the randomly selected hero to the console.
 */
 function randomIntelligenceHero(){
    let allHeroes = createHeroesObjects();
    let intelligenceHeroes = [];
    
    for (i = 80; i < allHeroes.length; i++){
    intelligenceHeroes.push(allHeroes[i]);
   }
    console.log(intelligenceHeroes);
    let randomIntelligenceHero = intelligenceHeroes[(Math.floor(Math.random()*38))];
    console.log(randomIntelligenceHero)
}

randomIntelligenceHero();