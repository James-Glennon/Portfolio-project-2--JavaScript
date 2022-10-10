// Wait for page to finish loading before loading the game.
document.addEventListener('DOMContentLoaded', function () {
    randomQuestionType();
});

// Declarations

// Defines the img#"answer-image" as questionButtons array.
let questionButtons = document.getElementsByClassName("answer-image");

// Array of heroes used to generate questions. Must contain only 2 entries.
let questionArray = [];

// Declares the randomHeroes array.
let randomHeroes = [];


// Dictionary array functions

/**
 * Returns an array of all Dota2 Heroes and their attributes in the following order;
 * Hero name, Move speed, Attack range, Attack type, Ultimate ability name.
 */
function returnHeroesArray() {
    let heroesArray = [

        /*
        The stats below and most of the hero icons were sourced from 
        the official dota 2 website, 'https://www.dota2.com/heroes'.
        valid for patch 7.32c of DOTA 2.
        */

        // Strength Heroes    
        ['Abaddon', 325, 150, 'melee', 'Borrowed Time'],
        ['Alchemist', 305, 150, 'melee', 'Chemical Rage'],
        ['Axe', 310, 150, 'melee', 'Culling Blade'],
        ['Beastmaster', 305, 150, 'melee', 'Primal Roar'],
        ['Brewmaster', 310, 150, 'melee', 'Primal Split'],
        ['Bristleback', 295, 150, 'melee', 'Warpath'],
        ['Centaur Warrunner', 300, 150, 'melee', 'Stampede'],
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
        // Legion Commander icon sourced from Dota 2 fandom wiki
        ['Legion Commander', 330, 150, 'melee', 'Duel'],
        ['Lifestealer', 320, 150, 'melee', 'Infest'],
        ['Lycan', 305, 150, 'melee', 'Shapeshift'],
        ['Magnus', 305, 150, 'melee', 'Reverse Polarity'],
        ['Marci', 315, 150, 'melee', 'Unleash'],
        // Mars icon sourced from Dota 2 fandom wiki
        ['Mars', 310, 250, 'melee', 'Arena of Blood'],
        ['Night Stalker', 295, 150, 'melee', 'Dark Ascension'],
        ['Omniknight', 315, 150, 'melee', 'Guardian Angel'],
        ['Phoenix', 280, 525, 'ranged', 'Supernova'],
        ['Primal Beast', 310, 150, 'melee', 'Pulverize'],
        ['Pudge', 280, 175, 'melee', 'Dismember'],
        ['Sand King', 290, 150, 'melee', 'Epicenter'],
        ['Slardar', 300, 150, 'melee', 'Corrosive Haze'],
        ['Snapfire', 300, 500, 'ranged', 'Mortimer Kisses'],
        ['Spirit Breaker', 295, 150, 'melee', 'Nether Strike'],
        ['Sven', 325, 150, 'melee', "God's Strength"],
        ['Tidehunter', 300, 150, 'melee', 'Ravage'],
        ['Timbersaw', 290, 150, 'melee', 'Chakram'],
        ['Tiny', 285, 150, 'melee', 'Grow'],
        ['Treant Protector', 285, 150, 'melee', 'Overgrowth'],
        ['Tusk', 310, 150, 'melee', 'Walrus Punch!'],
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
        // Drow Ranger icon sourced from Dota 2 fandom wiki
        ['Drow Ranger', 300, 625, 'ranged', 'Marksmanship'],
        ['Ember Spirit', 300, 150, 'melee', 'Fire Remnant'],
        ['Faceless Void', 300, 150, 'melee', 'Chronosphere'],
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
        ['Phantom Assassin', 305, 150, 'melee', 'Coup de Grace'],
        ['Phantom Lancer', 290, 150, 'melee', 'Juxtapose'],
        ['Razor', 280, 475, 'ranged', 'Eye of the Storm'],
        ['Riki', 315, 150, 'melee', 'Cloak and Dagger'],
        ['Shadow Fiend', 305, 500, 'ranged', 'Requiem of Souls'],
        ['Slark', 300, 150, 'melee', 'Shadow Dance'],
        ['Sniper', 285, 550, 'ranged', 'Assassinate'],
        ['Spectre', 290, 150, 'melee', 'Haunt'],
        ['Templar Assassin', 305, 160, 'ranged', 'Psionic Trap'],
        ['Terrorblade', 315, 150, 'melee', 'Sunder'],
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

    return heroesArray
};

/**
 * Converts the heroArray() into key/value paired objects and pushes the objects to an array.
 * Returns the complete [{object} array].
 */
function createHeroesObjects() {

    let heroesArray = returnHeroesArray();
    let heroesObjects = [];

    for (let i = 0; i < heroesArray.length; i++) {

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
 * Determines the type of question to be presented to the user.
 * Currently supported types; attackRange, moveSpeed (2).
 */
function randomQuestionType() {
    let gamemodes = ['attackRange', 'moveSpeed'];
    let question = Math.floor(Math.random() * gamemodes.length);

    if (question === 0) {
        moveSpeedQuestion();
    } else if (question === 1) {
        attackRangeQuestion();
    };

};

// moveSpeed functions

/**
 * assigns the values of the previously declared questionArray
 * @returns [{randomHero}, {randomHero(where moveSpeed is NOT equal)}]
 */
function generateMoveSpeedQuestionArray() {
    questionArray = generateRandomMoveSpeedHeroes(2);
    return questionArray;
}

/**
 * Selects a random hero from the createHeroesObjects() array.
 * pushes the selected hero to a randomHeroes array [0].
 * while randomHeroes.length is less than num1,
 * loops through randomEntries till moveSpeed is NOT equal.
 * pushes the NOT equal entry to the randomHeroes array [1].
 * only works for a max of 2 entries.
 * @param {number of random heroes required} num1.
 */
function generateRandomMoveSpeedHeroes(num1) {
    let allHeroes = createHeroesObjects();
    randomHeroes = [];

    let randomEntry = allHeroes[(Math.floor(Math.random() * allHeroes.length))];
    randomHeroes.push(randomEntry);

    while (randomHeroes.length < num1) {
        randomEntry = allHeroes[(Math.floor(Math.random() * allHeroes.length))];

        if (randomEntry.moveSpeed === randomHeroes[0].moveSpeed) {
            continue;
        } else {
            randomHeroes.push(randomEntry);
        }
    }

    return randomHeroes;
};

/**
 * Generates a question based on heroMoveSpeed.
 * Changes button image based on heroObject.heroName.
 */
function moveSpeedQuestion() {
    document.getElementById('question-text').textContent = 'Which of these heroes has the greater base movement speed?';
    document.getElementById('question-image').src = 'assets/images/attribute-icons/movement_speed_icon.png';
    document.getElementById('question-image').alt = 'The DOTA2 movement speed icon.';


    generateMoveSpeedQuestionArray();

    document.getElementById('answer1').src = `assets/images/hero-icons/${questionArray[0].heroName}_hero_icon.png`
    document.getElementById('answer1').alt = `${questionArray[0].heroName}`
    
    document.getElementById('answer2').src = `assets/images/hero-icons/${questionArray[1].heroName}_hero_icon.png`
    document.getElementById('answer2').src = `${questionArray[1].heroName}`

    /**
     * defines the function that sets the moveSpeedQuestion listener for button A.
     */
    let eventListenerA = function () {
        if (questionArray[0].moveSpeed >= questionArray[1].moveSpeed) {
            alert(`Correct.
            ${questionArray[0].heroName} has ${questionArray[0].moveSpeed} move speed,
            while ${questionArray[1].heroName} has ${questionArray[1].moveSpeed}.`);

            incrementScore(eventListenerA, eventListenerB);

        } else {
            alert(`Incorrect.
            ${questionArray[0].heroName} has ${questionArray[0].moveSpeed} move speed,
            while ${questionArray[1].heroName} has ${questionArray[1].moveSpeed}.`);

            incrementWrongAnswer(eventListenerA, eventListenerB);
        }
    };
    questionButtons[0].addEventListener('click', eventListenerA);

    /**
     * defines the function that sets the moveSpeedQuestion listener for button B.
     */
    let eventListenerB = function () {
        if (questionArray[1].moveSpeed >= questionArray[0].moveSpeed) {
            alert(`Correct.
            ${questionArray[0].heroName} has ${questionArray[0].moveSpeed} move speed,
            while ${questionArray[1].heroName} has ${questionArray[1].moveSpeed}.`);

            incrementScore(eventListenerA, eventListenerB);

        } else {
            alert(`Incorrect.
            ${questionArray[0].heroName} has ${questionArray[0].moveSpeed} move speed,
            while ${questionArray[1].heroName} has ${questionArray[1].moveSpeed}.`);

            incrementWrongAnswer(eventListenerA, eventListenerB);
        }
    };
    questionButtons[1].addEventListener('click', eventListenerB);
};


// attackRange functions

/**
 * assigns the values of the previously declared questionArray
 * @returns [{randomHero}, {randomHero(where moveSpeed is NOT equal)}]
 */
function generateAttackRangeQuestionArray() {
    questionArray = generateRandomAttackRangeHeroes(2);
    return questionArray;
}

/**
 * Selects a random hero from the createHeroesObjects() array.
 * pushes the selected hero to a randomHeroes array [0].
 * while randomHeroes.length is less than num1,
 * loops through randomEntries till moveSpeed is NOT equal.
 * pushes the NOT equal entry to the randomHeroes array [1].
 * only works for a max of 2 entries.
 * @param {number of random heroes required} num1.
 */
function generateRandomAttackRangeHeroes(num1) {
    let allHeroes = createHeroesObjects();
    randomHeroes = [];

    let randomEntry = allHeroes[(Math.floor(Math.random() * allHeroes.length))];
    randomHeroes.push(randomEntry);

    while (randomHeroes.length < num1) {
        randomEntry = allHeroes[(Math.floor(Math.random() * allHeroes.length))];

        if (randomEntry.attackRange === randomHeroes[0].attackRange) {
            continue;
        } else {
            randomHeroes.push(randomEntry);
        }
    }

    return randomHeroes;
};

/**
 * Generates a question based on heroAttackRange.
 * Changes button image based on heroObject.heroName.
 */
function attackRangeQuestion() {
    document.getElementById('question-text').textContent = 'Which of these heroes has the longer base attack range (without abilities)?';
    document.getElementById('question-image').src = 'assets/images/attribute-icons/attack_range_icon.png';
    document.getElementById('question-image').alt = 'The DOTA2 attack range icon.';


    generateAttackRangeQuestionArray();

    document.getElementById('answer1').src = `assets/images/hero-icons/${questionArray[0].heroName}_hero_icon.png`
    document.getElementById('answer1').alt = `${questionArray[0].heroName}`

    document.getElementById('answer2').src = `assets/images/hero-icons/${questionArray[1].heroName}_hero_icon.png`
    document.getElementById('answer2').src = `${questionArray[1].heroName}`

    /**
     * defines the function that sets the attackRangeQuestion listener for button A.
     */
    let eventListenerA = function () {
        if (questionArray[0].attackRange >= questionArray[1].attackRange) {
            alert(`Correct.
            ${questionArray[0].heroName} has ${questionArray[0].attackRange} attack range,
            while ${questionArray[1].heroName} has ${questionArray[1].attackRange}.`);

            incrementScore(eventListenerA, eventListenerB);

        } else {
            alert(`Incorrect.
            ${questionArray[0].heroName} has ${questionArray[0].attackRange} attack range,
            while ${questionArray[1].heroName} has ${questionArray[1].attackRange}.`);

            incrementWrongAnswer(eventListenerA, eventListenerB);
        }
    };
    questionButtons[0].addEventListener('click', eventListenerA);

    /**
     * defines the function that sets the attackRangeQuestion listener for button B.
     */
    let eventListenerB = function () {
        if (questionArray[1].attackRange >= questionArray[0].attackRange) {
            alert(`Correct.
            ${questionArray[0].heroName} has ${questionArray[0].attackRange} attack range,
            while ${questionArray[1].heroName} has ${questionArray[1].attackRange}.`);

            incrementScore(eventListenerA, eventListenerB);

        } else {
            alert(`Incorrect.
            ${questionArray[0].heroName} has ${questionArray[0].attackRange} attack range,
            while ${questionArray[1].heroName} has ${questionArray[1].attackRange}.`);

            incrementWrongAnswer(eventListenerA, eventListenerB);
        }
    };
    questionButtons[1].addEventListener('click', eventListenerB);
};


//Increment functions

// Copied from Code Institute: Love Maths project
/**
 * Gets the current score from the DOM and increment by 1.
 * additionally removes the previously set eventListeners from button 1 and 2.
 * @param{listenerFunction to be removed from buttonA, listenerFunction to be removed from buttonB}.
 */
function incrementScore(function1, function2) {

    let oldScore = parseInt(document.getElementById('score').innerHTML);
    document.getElementById('score').innerHTML = ++oldScore;


    questionButtons[0].removeEventListener('click', function1);
    questionButtons[1].removeEventListener('click', function2);

    randomQuestionType();
}

// Copied from Code Institute: Love Maths project
/**
 * Gets the current tally of incorrect answers from the DOM and increments by 1.
 * additionally removes the previously set eventListeners from button 1 and 2.
 * @param{listenerFunction to be removed from buttonA, listenerFunction to be removed from buttonB}.
 */
function incrementWrongAnswer(function1, function2) {

    let oldScore = parseInt(document.getElementById('incorrect').innerHTML);
    document.getElementById('incorrect').innerHTML = ++oldScore;


    questionButtons[0].removeEventListener('click', function1);
    questionButtons[1].removeEventListener('click', function2);

    randomQuestionType();
}