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

    if (selectClass.value == 'knight') {
        let knightImage = 'Assets/knight_small.jpg'; // declare the path to the character class image
        characterClassImage.src = knightImage; // assign the character image source  to the image variable
        characterClassName.innerHTML = selectClass.value; // assign the selected class value to character class name
        assignKnightStats();
    }
    if (selectClass.value == 'mercenary') {
        let mercenaryImage = 'Assets/mercenary_small.jpg'; // declare the path to the character class image
        characterClassImage.src = mercenaryImage; // assign the character class to the image source
        characterClassName.innerHTML = selectClass.value; // assign the selected class value to character class name
        assignMercenaryStats();
    }
    if (selectClass.value == 'warrior') {
        let warriorImage = 'Assets/warrior_small.jpg';
        characterClassImage.src = warriorImage;
        characterClassName.innerHTML = selectClass.value; // assign the selected class value to character class name
        assignWarriorStats();
    }
    if (selectClass.value == 'herald') {
        let heraldImage = 'Assets/herald_small.jpg';
        characterClassImage.src = heraldImage;
        characterClassName.innerHTML = selectClass.value; // assign the selected class value to character class name
        assignHeraldStats();
    }
    if (selectClass.value == 'thief') {
        let thiefImage = 'Assets/thief_small.jpg';
        characterClassImage.src = thiefImage;
        characterClassName.innerHTML = selectClass.value; // assign the selected class value to character class name
        assignThiefStats();
    }
    if (selectClass.value == 'assassin') {
        let assassinImage = 'Assets/assassin_small.jpg';
        characterClassImage.src = assassinImage;
        characterClassName.innerHTML = selectClass.value; // assign the selected class value to character class name
        assignAssassinStats();
    }
    if (selectClass.value == 'sorcerer') {
        let sorcererImage = 'Assets/sorcerer_small.jpg';
        characterClassImage.src = sorcererImage;
        characterClassName.innerHTML = selectClass.value; // assign the selected class value to character class name
        assignSorcererStats();
    }
    if (selectClass.value == 'pyromancy') {
        let pyromancyImage = 'Assets/pyromancer_small.jpg';
        characterClassImage.src = pyromancyImage;
        characterClassName.innerHTML = selectClass.value; // assign the selected class value to character class name
        assignPyromancyStats();
    }
    if (selectClass.value == 'cleric') {
        let clericImage = 'Assets/cleric_small.jpg';
        characterClassImage.src = clericImage;
        characterClassName.innerHTML = selectClass.value; // assign the selected class value to character class name
        assignClericStats();
    }
    if (selectClass.value == 'deprived') {

        let deprivedImage = 'Assets/deprived_small.jpg';
        characterClassImage.src = deprivedImage;
        characterClassName.innerHTML = selectClass.value; // assign the selected class value to character class name
        assignDeprivedStats();
    }

    console.log(selectClass.value); // test selected value

});