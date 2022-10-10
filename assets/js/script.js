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
 * Hero name, Move speed, Attack range, Attack type, Ultimate ability name,
 * Base Strength, Base Agility, Base Intelligence.
 */
function returnHeroesArray() {
    let heroesArray = [

        /*
        The stats below and most of the hero icons were sourced from 
        the official dota 2 website, 'https://www.dota2.com/heroes'.
        valid for patch 7.32c of DOTA 2.
        */

        // Strength Heroes    
        ['Abaddon', 325, 150, 'melee', 'Borrowed Time', 22, 23, 18],
        ['Alchemist', 305, 150, 'melee', 'Chemical Rage', 23, 22, 25],
        ['Axe', 310, 150, 'melee', 'Culling Blade', 25, 20, 18],
        ['Beastmaster', 305, 150, 'melee', 'Primal Roar', 23, 18, 16],
        ['Brewmaster', 310, 150, 'melee', 'Primal Split', 23, 19, 15],
        ['Bristleback', 295, 150, 'melee', 'Warpath', 22, 17, 14],
        ['Centaur Warrunner', 300, 150, 'melee', 'Stampede', 27, 15, 15],
        ['Chaos Knight', 325, 150, 'melee', 'Phantasm', 22, 18, 18],
        ['Clockwerk', 310, 150, 'melee', 'Hookshot', 26, 13, 18],
        ['Dawnbreaker', 310, 150, 'melee', 'Solar Guardian', 27, 14, 20],
        ['Doom (name)', 285, 150, 'melee', 'Doom (spell)', 24, 15, 15],
        ['Dragon Knight', 310, 150, 'melee', 'Elder Dragon Form', 21, 16, 18],
        ['Earth Spirit', 290, 150, 'melee', 'Magnitize', 22, 17, 20],
        ['Earthshaker', 315, 150, 'melee', 'Echo Slam', 22, 12, 18],
        ['Elder Titan', 310, 150, 'melee', 'Earth Splitter', 26, 16, 23],
        ['Huskar', 295, 400, 'ranged', 'Life Break', 20, 10, 18],
        ['IO', 320, 500, 'ranged', 'Relocate', 17, 14, 23],
        ['Kunkka', 315, 150, 'melee', 'Ghostship', 24, 14, 18],
        // Legion Commander icon sourced from Dota 2 fandom wiki
        ['Legion Commander', 330, 150, 'melee', 'Duel', 25, 18, 20],
        ['Lifestealer', 320, 150, 'melee', 'Infest', 25, 19, 15],
        ['Lycan', 305, 150, 'melee', 'Shapeshift', 26, 16, 23],
        ['Magnus', 305, 150, 'melee', 'Reverse Polarity', 25, 15, 19],
        ['Marci', 315, 150, 'melee', 'Unleash', 23, 20, 19],
        // Mars icon sourced from Dota 2 fandom wiki
        ['Mars', 310, 250, 'melee', 'Arena of Blood', 23, 20, 21],
        ['Night Stalker', 295, 150, 'melee', 'Dark Ascension', 23, 18, 15],
        ['Omniknight', 315, 150, 'melee', 'Guardian Angel', 23, 15, 16],
        ['Phoenix', 280, 525, 'ranged', 'Supernova', 23, 12, 16],
        ['Primal Beast', 310, 150, 'melee', 'Pulverize', 26, 15, 16],
        ['Pudge', 280, 175, 'melee', 'Dismember', 25, 14, 16],
        ['Sand King', 290, 150, 'melee', 'Epicenter', 22, 19, 19],
        ['Slardar', 300, 150, 'melee', 'Corrosive Haze', 21, 17, 15],
        ['Snapfire', 300, 500, 'ranged', 'Mortimer Kisses', 20, 16, 21],
        ['Spirit Breaker', 295, 150, 'melee', 'Nether Strike', 28, 17, 14],
        ['Sven', 325, 150, 'melee', "God's Strength", 22, 21, 16],
        ['Tidehunter', 300, 150, 'melee', 'Ravage', 27, 15, 18],
        ['Timbersaw', 290, 150, 'melee', 'Chakram', 25, 16, 23],
        ['Tiny', 285, 150, 'melee', 'Grow', 30, 0, 17],
        ['Treant Protector', 285, 150, 'melee', 'Overgrowth', 25, 15, 20],
        ['Tusk', 310, 150, 'melee', 'Walrus Punch!', 23, 23, 18],
        ['Underlord', 290, 200, 'melee', "Fiend's Gate", 25, 12, 17],
        ['Undying', 300, 150, 'melee', 'Flesh Golem', 22, 10, 27],
        ['Wraith King', 315, 150, 'melee', 'Reincarnation', 22, 16, 18],

        // Agility Heroes
        ['Anti-Mage', 310, 150, 'melee', 'Mana Void', 21, 24, 12],
        ['Arc Warden', 285, 625, 'ranged', 'Tempest Double', 22, 20, 24],
        ['Bloodseeker', 300, 150, 'melee', 'Rupture', 24, 22, 17],
        ['Bounty Hunter', 325, 150, 'melee', 'Track', 20, 21, 22],
        ['Broodmother', 285, 150, 'melee', 'Spawn Spiderlings', 18, 19, 18],
        ['Clinkz', 290, 600, 'ranged', 'Death Pact', 16, 22, 18],
        // Drow Ranger icon sourced from Dota 2 fandom wiki
        ['Drow Ranger', 300, 625, 'ranged', 'Marksmanship', 16, 20, 15],
        ['Ember Spirit', 300, 150, 'melee', 'Fire Remnant', 22, 22, 20],
        ['Faceless Void', 300, 150, 'melee', 'Chronosphere', 20, 19, 15],
        ['Gyrocopter', 315, 365, 'ranged', 'Call Down', 22, 26, 21],
        ['Hoodwink', 310, 575, 'ranged', 'Sharpshooter', 17, 24, 21],
        ['Juggernaut', 300, 150, 'melee', 'Omnislash', 20, 34, 14],
        ['Lone Druid', 325, 550, 'ranged', 'True Form', 18, 20, 13],
        ['Luna', 325, 330, 'ranged', 'Eclipse', 21, 24, 23],
        ['Medusa', 275, 600, 'ranged', 'Stone Gaze', 17, 22, 23],
        ['Meepo', 330, 150, 'melee', 'Divided We Stand', 24, 17, 20],
        ['Mirana', 290, 630, 'ranged', 'Moonlight Shadow', 18, 24, 22],
        ['Monkey King', 300, 300, 'melee', "Wukong's Command", 18, 22, 20],
        ['Morphling', 285, 350, 'ranged', 'Morph', 22, 24, 19],
        ['Naga Siren', 330, 150, 'melee', 'Song of the Siren', 21, 21, 21],
        ['Nyx Assassin', 310, 150, 'melee', 'Vendetta', 17, 18, 21],
        ['Pangolier', 300, 150, 'melee', 'Rolling Thunder', 17, 18, 16],
        ['Phantom Assassin', 305, 150, 'melee', 'Coup de Grace', 19, 23, 15],
        ['Phantom Lancer', 290, 150, 'melee', 'Juxtapose', 19, 26, 21],
        ['Razor', 280, 475, 'ranged', 'Eye of the Storm', 22, 22, 21],
        ['Riki', 315, 150, 'melee', 'Cloak and Dagger', 18, 18, 14],
        ['Shadow Fiend', 305, 500, 'ranged', 'Requiem of Souls', 19, 20, 18],
        ['Slark', 300, 150, 'melee', 'Shadow Dance', 20, 21, 16],
        ['Sniper', 285, 550, 'ranged', 'Assassinate', 19, 27, 15],
        ['Spectre', 290, 150, 'melee', 'Haunt', 23, 25, 16],
        ['Templar Assassin', 305, 160, 'ranged', 'Psionic Trap', 21, 23, 20],
        ['Terrorblade', 315, 150, 'melee', 'Sunder', 16, 22, 19],
        ['Troll Warlord', 290, 500, 'ranged', 'Battle Trance', 21, 21, 13],
        ['Ursa', 310, 150, 'melee', 'Enrage', 25, 18, 16],
        ['Vengeful Spirit', 295, 400, 'ranged', 'Nether Swap', 19, 20, 19],
        ['Venomancer', 280, 450, 'ranged', 'Poison Nova', 19, 24, 19],
        ['Viper', 275, 575, 'ranged', 'Viper Strike', 21, 21, 17],
        ['Weaver', 275, 425, 'ranged', 'Time Lapse', 16, 17, 20],

        // Intelligence Heroes
        ['Ancient Apparition', 285, 675, 'ranged', 'Ice Blast', 20, 20, 23],
        ['Bane', 305, 400, 'ranged', "Fiend's Grip", 22, 22, 22],
        ['Batrider', 310, 400, 'ranged', 'Flaming Lasso', 28, 15, 22],
        ['Chen', 305, 650, 'ranged', 'Hand of God', 25, 15, 19],
        ['Crystal Maiden', 280, 600, 'ranged', 'Freezing Field', 17, 16, 16],
        ['Dark Seer', 295, 150, 'melee', 'Wall of Replica', 22, 19, 21],
        ['Dark Willow', 290, 475, 'ranged', 'Bedlam & Terrorize', 20, 18, 21],
        ['Dazzle', 305, 575, 'ranged', 'Good Juju & Bad Juju', 18, 20, 25],
        ['Death Prophet', 285, 600, 'ranged', 'Exorcism', 21, 16, 24],
        ['Disruptor', 295, 625, 'ranged', 'Static Storm', 21, 15, 20],
        ['Enchantress', 320, 575, 'ranged', 'Untouchable', 17, 19, 22],
        ['Enigma', 290, 500, 'ranged', 'Black Hole', 21, 14, 19],
        ['Grimstroke', 290, 600, 'ranged', 'Soulbind', 21, 18, 25],
        ['Invoker', 285, 600, 'ranged', 'Invoke', 18, 14, 15],
        ['Jakiro', 290, 400, 'ranged', 'Macropyre', 25, 15, 26],
        ['Keeper of the Light', 320, 600, 'ranged', 'Spirit Form', 18, 15, 23],
        ['Leshrac', 325, 575, 'ranged', 'Pulse Nova', 20, 23, 22],
        ['Lich', 295, 550, 'ranged', 'Chain Frost', 20, 17, 24],
        ['Lina', 290, 670, 'ranged', 'Laguna Blade', 20, 23, 30],
        ['Lion', 290, 600, 'ranged', 'Finger of Death', 18, 18, 18],
        ["Nature's Prophet", 295, 600, 'ranged', 'Wrath of Nature', 21, 22, 23],
        ['Necrophos', 280, 500, 'ranged', "Reaper's Scythe", 18, 12, 21],
        ['Ogre Magi', 290, 150, 'melee', 'Multicast', 23, 14, 15],
        ['Oracle', 295, 620, 'ranged', 'False Promise', 20, 15, 26],
        ['Outworld Destroyer', 320, 450, 'ranged', "Sanity's Eclipse", 21, 22, 30],
        ['Puck', 290, 550, 'ranged', 'Dream Coil', 17, 22, 23],
        ['Pugna', 330, 630, 'ranged', 'Life Drain', 19, 24, 24],
        ['Queen of Pain', 290, 550, 'ranged', 'Sonic Wave', 18, 22, 25],
        ['Rubick', 290, 550, 'ranged', 'Spell Steal', 21, 23, 25],
        ['Shadow Demon', 290, 500, 'ranged', 'Demonic Purge', 23, 18, 22],
        ['Shadow Shaman', 285, 400, 'ranged', 'Mass Serpent Ward', 23, 16, 25],
        ['Silencer', 290, 600, 'ranged', 'Global Silence', 19, 22, 25],
        ['Skywrath Mage', 325, 625, 'ranged', 'Mystic Flare', 21, 13, 25],
        ['Storm Spirit', 285, 480, 'ranged', 'Ball Lightning', 21, 22, 23],
        ['Techies', 300, 700, 'ranged', 'Proximity Mines', 19, 14, 25],
        ['Tinker', 290, 500, 'ranged', 'Rearm', 19, 13, 30],
        ['Visage', 280, 600, 'ranged', 'Summon Familiars', 22, 11, 22],
        ['Void Spirit', 290, 200, 'melee', 'Astral Step', 22, 19, 24],
        ['Warlock', 300, 600, 'ranged', 'Chaotic Offering', 24, 10, 25],
        ['Windranger', 290, 600, 'ranged', 'Focus Fire', 18, 17, 18],
        ['Winter Wyvern', 285, 425, 'ranged', "Winter's Curse", 22, 16, 26],
        ['Witch Doctor', 300, 550, 'ranged', 'Death Ward', 18, 13, 22],
        ['Zeus', 315, 380, 'ranged', "Thundergod's Wrath", 19, 11, 22]
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
            baseStr: '',
            baseAgi: '',
            baseInt: '',
        };

        let heroArray = heroesArray[i];
        heroObject.heroName = heroArray[0];
        heroObject.moveSpeed = heroArray[1];
        heroObject.attackRange = heroArray[2];
        heroObject.attackType = heroArray[3];
        heroObject.ultimateName = heroArray[4];
        heroObject.baseStr = heroArray[5];
        heroObject.baseAgi = heroArray[6];
        heroObject.baseInt = heroArray[7];
        heroesObjects.push(heroObject);
    }
    return heroesObjects;
}

/**
 * Determines the type of question to be presented to the user.
 * Currently supported types; attackRange, moveSpeed (2).
 */
function randomQuestionType() {
    let gamemodes = ['attackRange', 'moveSpeed', 'baseStr', 'baseAgi'];
    let question = Math.floor(Math.random() * gamemodes.length);

    if (question === 0) {
        moveSpeedQuestion();
    } else if (question === 1) {
        attackRangeQuestion();
    } else if (question === 2) {
        baseStrQuestion();
    } else if (question === 3){
        baseAgiQuestion();
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
    document.getElementById('answer2').alt = `${questionArray[1].heroName}`

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
    document.getElementById('answer2').alt = `${questionArray[1].heroName}`

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


// baseStr functions

/**
 * assigns the values of the previously declared questionArray
 * @returns [{randomHero}, {randomHero(where baseStr is NOT equal)}]
 */
 function generateBaseStrQuestionArray() {
    questionArray = generateRandomBaseStrHeroes(2);
    return questionArray;
}

/**
 * Selects a random hero from the createHeroesObjects() array.
 * pushes the selected hero to a randomHeroes array [0].
 * while randomHeroes.length is less than num1,
 * loops through randomEntries till baseStr is NOT equal.
 * pushes the NOT equal entry to the randomHeroes array [1].
 * only works for a max of 2 entries.
 * @param {number of random heroes required} num1.
 */
function generateRandomBaseStrHeroes(num1) {
    let allHeroes = createHeroesObjects();
    randomHeroes = [];

    let randomEntry = allHeroes[(Math.floor(Math.random() * allHeroes.length))];
    randomHeroes.push(randomEntry);

    while (randomHeroes.length < num1) {
        randomEntry = allHeroes[(Math.floor(Math.random() * allHeroes.length))];

        if (randomEntry.baseStr === randomHeroes[0].baseStr) {
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
function baseStrQuestion() {
    document.getElementById('question-text').textContent = 'Which of these heroes has the higher base strenght (level 1)?';
    document.getElementById('question-image').src = 'assets/images/attribute-icons/strength_icon.png';
    document.getElementById('question-image').alt = 'The DOTA2 strength icon.';


    generateBaseStrQuestionArray();

    document.getElementById('answer1').src = `assets/images/hero-icons/${questionArray[0].heroName}_hero_icon.png`
    document.getElementById('answer1').alt = `${questionArray[0].heroName}`
    
    document.getElementById('answer2').src = `assets/images/hero-icons/${questionArray[1].heroName}_hero_icon.png`
    document.getElementById('answer2').alt = `${questionArray[1].heroName}`

    /**
     * defines the function that sets the baseStrQuestion listener for button A.
     */
    let eventListenerA = function () {
        if (questionArray[0].baseStr >= questionArray[1].baseStr) {
            alert(`Correct.
            ${questionArray[0].heroName} has ${questionArray[0].baseStr} base strength,
            while ${questionArray[1].heroName} has ${questionArray[1].baseStr}.`);

            incrementScore(eventListenerA, eventListenerB);

        } else {
            alert(`Incorrect.
            ${questionArray[0].heroName} has ${questionArray[0].baseStr} base strenght,
            while ${questionArray[1].heroName} has ${questionArray[1].baseStr}.`);

            incrementWrongAnswer(eventListenerA, eventListenerB);
        }
    };
    questionButtons[0].addEventListener('click', eventListenerA);

    /**
     * defines the function that sets the baseStrQuestion listener for button B.
     */
    let eventListenerB = function () {
        if (questionArray[1].baseStr >= questionArray[0].baseStr) {
            alert(`Correct.
            ${questionArray[0].heroName} has ${questionArray[0].baseStr} base strength,
            while ${questionArray[1].heroName} has ${questionArray[1].baseStr}.`);

            incrementScore(eventListenerA, eventListenerB);

        } else {
            alert(`Incorrect.
            ${questionArray[0].heroName} has ${questionArray[0].baseStr} base strength,
            while ${questionArray[1].heroName} has ${questionArray[1].baseStr}.`);

            incrementWrongAnswer(eventListenerA, eventListenerB);
        }
    };
    questionButtons[1].addEventListener('click', eventListenerB);
};

// baseAgi functions


/**
 * assigns the values of the previously declared questionArray
 * @returns [{randomHero}, {randomHero(where baseAgi is NOT equal)}]
 */
 function generateBaseAgiQuestionArray() {
    questionArray = generateRandomBaseAgiHeroes(2);
    return questionArray;
}

/**
 * Selects a random hero from the createHeroesObjects() array.
 * pushes the selected hero to a randomHeroes array [0].
 * while randomHeroes.length is less than num1,
 * loops through randomEntries till baseAgi is NOT equal.
 * pushes the NOT equal entry to the randomHeroes array [1].
 * only works for a max of 2 entries.
 * @param {number of random heroes required} num1.
 */
function generateRandomBaseAgiHeroes(num1) {
    let allHeroes = createHeroesObjects();
    randomHeroes = [];

    let randomEntry = allHeroes[(Math.floor(Math.random() * allHeroes.length))];
    randomHeroes.push(randomEntry);

    while (randomHeroes.length < num1) {
        randomEntry = allHeroes[(Math.floor(Math.random() * allHeroes.length))];

        if (randomEntry.baseAgi === randomHeroes[0].baseAgi) {
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
function baseAgiQuestion() {
    document.getElementById('question-text').textContent = 'Which of these heroes has the higher base agility (level 1)?';
    document.getElementById('question-image').src = 'assets/images/attribute-icons/agility_icon.png';
    document.getElementById('question-image').alt = 'The DOTA2 agility icon.';


    generateBaseAgiQuestionArray();

    document.getElementById('answer1').src = `assets/images/hero-icons/${questionArray[0].heroName}_hero_icon.png`
    document.getElementById('answer1').alt = `${questionArray[0].heroName}`
    
    document.getElementById('answer2').src = `assets/images/hero-icons/${questionArray[1].heroName}_hero_icon.png`
    document.getElementById('answer2').alt = `${questionArray[1].heroName}`

    /**
     * defines the function that sets the baseAgiQuestion listener for button A.
     */
    let eventListenerA = function () {
        if (questionArray[0].baseAgi >= questionArray[1].baseAgi) {
            alert(`Correct.
            ${questionArray[0].heroName} has ${questionArray[0].baseAgi} base agility,
            while ${questionArray[1].heroName} has ${questionArray[1].baseAgi}.`);

            incrementScore(eventListenerA, eventListenerB);

        } else {
            alert(`Incorrect.
            ${questionArray[0].heroName} has ${questionArray[0].baseAgi} base agility,
            while ${questionArray[1].heroName} has ${questionArray[1].baseAgi}.`);

            incrementWrongAnswer(eventListenerA, eventListenerB);
        }
    };
    questionButtons[0].addEventListener('click', eventListenerA);

    /**
     * defines the function that sets the baseAgiQuestion listener for button B.
     */
    let eventListenerB = function () {
        if (questionArray[1].baseAgi >= questionArray[0].baseAgi) {
            alert(`Correct.
            ${questionArray[0].heroName} has ${questionArray[0].baseAgi} base agility,
            while ${questionArray[1].heroName} has ${questionArray[1].baseAgi}.`);

            incrementScore(eventListenerA, eventListenerB);

        } else {
            alert(`Incorrect.
            ${questionArray[0].heroName} has ${questionArray[0].baseAgi} base agility,
            while ${questionArray[1].heroName} has ${questionArray[1].baseAgi}.`);

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