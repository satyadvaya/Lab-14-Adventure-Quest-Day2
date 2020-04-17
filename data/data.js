const animals = {
    id: 'animals',
    title: 'Beastly Terrors',
    map: {
        top: '89%',
        left: '44%'
    },
    image: 'monsters.jpg',
    description: `
        You stumble into the deep woods and find yourself surrounded by wild animals, 
        all of whom look mean.  If you attack the right one first, perhaps the others will disperse.  
        Who do you target?
    `,
    choices: [{
        id: 'bear',
        description: 'Black bear',
        result: `
            The bear looks mean, but you suspect you can take him!  Turns out he's tougher than he looks, 
            and takes away 30 hp which will cost you 20 coins in recuperation. 
        `,
        hp: -30,
        gold: -20
    }, {
        id: 'snake',
        description: 'So slithery',
        result: `
            Before you know it, you're attacked by a giant constrictor.  And before you know it, 
            your hp and gold has been diminished by 15 apiece.
        `,
        hp: -15,
        gold: -15
    }, {
        id: 'eagle',
        description: 'That beak looks sharp',
        result: `
            This creature may be a national treasure, but he folds like wet newspaper in a fight.  
            Collect 10 hp and 20 coins.
        `,
        hp: 10,
        gold: 20
    }]
};

const waterways = {
    id: 'waterways',
    title: 'Slippery Dangers',
    map: {
        top: '57%',
        left: '67%'
    },
    image: 'dragon.jpg',
    audio: 'dragon.wav',
    action: 'dragon-growl.aiff',
    description: `
        You're navigating your escape on water.  How do fare in various liquid situations?
    `,
    choices: [{
        id: 'rapids',
        description: 'Danger is Rapidly Arising',
        result: `
            You shoot down the chute, only to find yourself tumbling over a nasty waterfall.  Ouch.  
            Loss of 25 hp and 30 coins to pay for hospital bills.            
        `,
        hp: -25,
        gold: -30
    }, {
        id: 'lazy lagoon',
        description: 'Nothing Going on Here',
        result: `
            What began as tranquil has left to exhausted and bored, and no closer to getting home.  
            15 hp and 20 coin loss to cover your malaria shots.
        `,
        hp: -15,
        gold: -20
    }, {
        id: 'open sea',
        description: 'Adrift',
        result: `
            What starts out as a voyage to nowhere lands you on a paradisical island.  35 hp and 25 gold coins earned!
        `,
        hp: 35,
        gold: 25
    }]
};

const doors = {
    id: 'doors',
    title: 'Ppen Sesame',
    map: {
        top: '31%',
        left: '5%'
    },
    image: 'treasure-chests.png',
    audio: 'treasure-chests.wav',
    action: 'chest-opening.wav',
    description: `
        You come to a dark alley, at the end of which are three doors.  
        There's no turning back at this point, which one do you open?
    `,
    choices: [{
        id: 'red',
        description: 'Red as Blood',
        result: 'You get a sharp shiv in the throat.  That cannot be good',
        hp: -50,
        gold: -40
    }, {
        id: 'green',
        description: 'Green as Envy',
        result: 'You find a basket of paper currency with your name on it.  Yeah, you take it!',
        hp: 10,
        gold: 100
    }, {
        id: 'blue',
        description: 'Bluer than Blue',
        result: 'You open the door and are mysteriously rendered unconscious.  You are also robbed for no good reason',
        hp: 0,
        gold: -60
    }]
};

const quests = [
    animals, 
    waterways,
    doors, {
        id: 'vaulting',
        title: 'Choice of the Chest',
        map: {
            top: '61%',
            left: '10%'
        },
        image: 'treasure-chests.png',
        audio: 'treasure-chests.wav',
        action: 'chest-opening.wav',
        description: `
        As you enter the quest chamber you notice three chests before you.
        Just as you start to imagine the wealth, you see a giant serpent
        emerge from the back of the chamber. You'll need to make a run for it,
        but you have time to open one chest before you take off. Which one 
        do you choose?
    `,
        choices: [{
            id: 'wooden',
            description: 'WOW',
            result: 'You grab 40 gold pieces!',
            hp: 0,
            gold: 40
        }, {
            id: 'golden',
            description: 'NOW',
            result: 'Oh no! The chest is booby trapped with poison and you take 50 hp damage',
            hp: -50,
            gold: 0
        }, {
            id: 'jeweled',
            description: 'POW',
            result: 'A warm light engulfs you and you gain 35 hp',
            hp: 35,
            gold: 0
        }
        ]
    }
];

export default quests;