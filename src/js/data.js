let knightInformation = [
    'This class has the highest starting vitality to hold its heavier armor.',
    'A recommended class for new players of the franchise, due to the 100% physical defense shield, good weapon, and good armor.'
];
let mercenaryInformation = [
    `The dual weapons take only one weapon slot and act as 1-handed until activate dual-wield.`,
    'Has the highest Dexterity of all the classes.',
];
let warriorInformation = [
    'This class has the lowest total of Attunement, Intelligence and Faith',
    'Starts with highest Strength stat.'
];
let heraldInformation = [
    `The benefit of the spear is you can attack while the shield is raised.`,
    'The Herald is a very good starting class for both new and veteran players.'
];
let thiefInformation = [
    'Highest luck, meaning the most item discovery for a starting class.',
    'The only class that starts with a bow.'
];
let assassinInformation = [
    `Spook could be considered one of the most useful starting spells.`,
    'This class is very good to start with if you want to use sorceries as well as normal combat effectively.'
];
let sorcererInformation = [
    'Highest Intelligence and Attunement. Good Luck and Dexterity. Lowest Vigor, therefore, lowest amount of HP. Lowest Faith. Lowest Strength.',
    `Starts with Sorcerer's Staff , the strongest staff with Intelligence between 0-49.`
];
let pyromancyInformation = [
    'Interesting attack properties and defensive properties while being able to wield pyromancy, the third form of magic in the game.',
    'Can use both miracles and spells in addition to pyromancies to your benefit.'
];
let clericInformation = [
    'Has the highest Faith of all the classes and has a good Strength.',
    'Comes equipped with the miracles Heal and Force.'
];
let deprivedInformation = [
    'Balanced stat and starts with Soul Level 1.',
    'While weak at first, you can eventually develop your desired stat pretty easily.'
];

// character class reactive variables
let characterClassImage = document.querySelector('.characterClassImage');
let characterClassName = document.querySelector('.characterClassName-mobile');
let infos = document.querySelectorAll('.infos');

let selectClass = document.querySelector('#characterSelection'); // declare the character selection [ select menu + options ]
console.log(selectClass.value); // test the current value of the character selection

// click event [ selectClass ]
selectClass.addEventListener('click', ()=> { 
    let defaultListItem = selectClass.querySelector('#defaultListItem'); // select the default placeholder list item element
    defaultListItem.style.display = 'none'; // remove the default || blank html element
});
// change event [ selectClass ]
selectClass.addEventListener('change', ()=> {

    /*
        ELDEN RING CLASSES

        Network Test Classes, update to launch
        classes on pending information status.
        
    */

//    for ( let i = 0; i < eldenRingClassesLevel.length; i++) {
//         prophetObject.Level = eldenRingClassesLevel[0];
//         warriorObject.Level = eldenRingClassesLevel[1];
//         bloodwolfObject.Level = eldenRingClassesLevel[2];
//         championObject.Level = eldenRingClassesLevel[3];
//         enchantedObject.Level = eldenRingClassesLevel[4];

//         if (selectClass.value == 'prophet') { level.innerHTML = prophetObject.Level; } // set level for selected character class [ PROPHET ]
        
//         level.innerHTML = prophetObject.Level; // set level for selected character class [ PROPHET ]
//         level.innerHTML = prophetObject.Level; // set level for selected character class [ PROPHET ]
//         level.innerHTML = prophetObject.Level; // set level for selected character class [ PROPHET ]
//         level.innerHTML = prophetObject.Level; // set level for selected character class [ PROPHET ]

//         console.log(prophetObject.Level);
//     }

    
    if (selectClass.value == 'prophet') {
        // assignClassAttributes(); // init function : file:// classes.js [ update modules ]
        characterClassName.innerHTML = selectClass.value; // assign the selected value to [ h3 element ]
        let prophetAttributes = [10, 8, 8, 9, 7, 9, 12, 10 ]; // pre-assign the [ PROPHET ] stat attributes into an array
        for(let i = 0; i < allAttributeValues.length; i++) { // loop through all attribute values
            allAttributeValues[i].innerHTML = prophetAttributes[i]; // and assign the stat data to the inner html
        }
        // character class selection [ number 00 ]
        for ( let i = 0; i < eldenRingClassesLevel.length; i++) {
            level.innerHTML = eldenRingClassesLevel[0];
        }
        
    }
    if (selectClass.value == 'warrior') {
        characterClassName.innerHTML = selectClass.value; // assign the selected value to [ h3 element ]
        let warriorAttributes = [12, 6, 8, 12, 8, 4, 4, 9 ]; // pre-assign the [ WARRIOR ] stat attributes into an array
        for(let i = 0; i < allAttributeValues.length; i++) { // loop through all attribute values
            allAttributeValues[i].innerHTML = warriorAttributes[i]; // and assign the stat data to the inner html
        }

        // character class selection [ number 01 ]
        for ( let i = 0; i < eldenRingClassesLevel.length; i++) {
            level.innerHTML = eldenRingClassesLevel[1];
        }
    }
    if (selectClass.value == 'bloodwolf') {
        characterClassName.innerHTML = selectClass.value; // assign the selected value to [ h3 element ]
        let bloodwolfAttributes = [8, 8, 10, 8, 12, 7, 8, 10 ]; // pre-assign the [  ] stat attributes into an array
        for(let i = 0; i < allAttributeValues.length; i++) { // loop through all attribute values
            allAttributeValues[i].innerHTML = bloodwolfAttributes[i]; // and assign the stat data to the inner html
        }

        // character class selection [ number 02 ]
        for ( let i = 0; i < eldenRingClassesLevel.length; i++) {
            level.innerHTML = eldenRingClassesLevel[2];
        }
        
    }
    if (selectClass.value == 'champion') {
        characterClassName.innerHTML = selectClass.value; // assign the selected value to [ h3 element ]
        let championAttributes = [11, 4, 9, 10, 10, 7, 4, 5 ]; // pre-assign the [  ] stat attributes into an array
        for(let i = 0; i < allAttributeValues.length; i++) { // loop through all attribute values
            allAttributeValues[i].innerHTML = championAttributes[i]; // and assign the stat data to the inner html
        }

        // character class selection [ number 03 ]
        for ( let i = 0; i < eldenRingClassesLevel.length; i++) {
            level.innerHTML = eldenRingClassesLevel[3];
        }
        
    }
    if (selectClass.value == 'enchanted') {
        characterClassName.innerHTML = selectClass.value; // assign the selected value to [ h3 element ]
        let enchantedAttributes = [10, 9, 7, 9, 7, 10, 10, 12 ]; // pre-assign the [  ] stat attributes into an array
        for(let i = 0; i < allAttributeValues.length; i++) { // loop through all attribute values
            allAttributeValues[i].innerHTML = enchantedAttributes[i]; // and assign the stat data to the inner html
        }
        // character class selection [ number 04 ]
        for ( let i = 0; i < eldenRingClassesLevel.length; i++) {
            level.innerHTML = eldenRingClassesLevel[4];
        }
    }

    console.log(selectClass.value); // test selected value

});