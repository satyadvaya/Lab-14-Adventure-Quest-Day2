// IMPORT MODULES under test here:
import makeListItemLink from '../map/make-list-item-link.js';

const test = QUnit.test;

const quest = {
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

test('makes an li out of a quest item', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = `<li class="quest-item"><a href="../quest/?id=animals">Beastly Terrors</a></li>`;

    //Act 
    // Call the function you're testing and set the result to a const
    const li = makeListItemLink(quest);

    const HTMLString = li.outerHTML;

    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(HTMLString, expected);
});