
/*
    Alter classes for Elden Ring release.

    Compile a true character object with all available data.

    Refactor core application code into components or singular modules.

*/

const eldenRingClasses = [
    // network test classes
    'prophet', 'warrior', 'blood wolf', 'champion', 'enchanted knight'
];
const eldenRingClassesLevel = [
    // network test classes
    5, 8, 6, 10, 9
];

const attributes = [ 'vigor', 'mind', 'endurance', 'strength', 'dexterity', 'intelligence', 'faith', 'arcane' ]; // set an array for the attributes
// create an object for the character class attributes
let characterClassObject = {
    // character info
    Name: '',
    Level: '',
    // character stats
    Vigor: '',
    Mind: '',
    Endurance: '',
    Strength: '',
    Dexterity: '',
    Intelligence: '',
    Faith: '',
    Arcane: ''
}
console.log(characterClassObject); // test the character class object
let prophetObject = new Object(characterClassObject); // create a new object for current selected player class
createCharacterObjects = () => {
    let prophetAttributes = [10, 8, 8, 9, 7, 9, 12, 10 ]; // pre-assign the [ PROPHET ] stat attributes into an array

    // declare & create [ character-class ] objects
    
    let warriorObject = new Object(characterClassObject); // create a new object for current selected player class
    let bloodwolfObject = new Object(characterClassObject); // create a new object for current selected player class
    let championObject = new Object(characterClassObject); // create a new object for current selected player class
    let enchantedObject = new Object(characterClassObject); // create a new object for current selected player class

    
    prophetObject.Name = 'Prophet';
    prophetObject.Vigor = prophetAttributes[0];
    prophetObject.Mind = prophetAttributes[1];
    prophetObject.Endurance = prophetAttributes[2];
    prophetObject.Strength = prophetAttributes[3];
    prophetObject.Dexterity = prophetAttributes[4];
    prophetObject.Intelligence = prophetAttributes[5];
    prophetObject.Faith = prophetAttributes[6];
    prophetObject.Arcane = prophetAttributes[7];

    for ( let i = 0; i < eldenRingClassesLevel.length; i++) {
        prophetObject.Level = eldenRingClassesLevel[0];
        warriorObject.Level = eldenRingClassesLevel[1];
        bloodwolfObject.Level = eldenRingClassesLevel[2];
        championObject.Level = eldenRingClassesLevel[3];
        enchantedObject.Level = eldenRingClassesLevel[4];


        console.log(prophetObject.Level);
    }
    console.log(prophetObject);
}

createCharacterObjects();




const classes = [ 'knight', 'mercenary', 'warrior', 'herald', 'thief', 'assassin', 'sorcerer', 'pyromancy', 'cleric', 'deprived' ]; // set an array for character classes



assignKnightStats = () => {

    let knightStats = [9, 3, 8, 10, 8, 3, 4, 8 ]; // pre-assign the knight stat attributes into an array
    let knightObject = new Object(characterClassObject); // create a new object for current selected player class
    level.innerHTML = knightStats[0] + knightStats[1];
    level.innerHTML = 9; // set level for selected character class
    
    for(let i = 0; i < knightStats.length; i++) { // loop through all the knight stats
        // assign the selected character class starting values to object
        knightObject.Vigor = knightStats[0];
        knightObject.Mind = knightStats[1];
        knightObject.Endurance = knightStats[2];
        knightObject.Strength = knightStats[3];
        knightObject.Dexterity = knightStats[4];
        knightObject.Intelligence = knightStats[5];
        knightObject.Faith = knightStats[6];
        knightObject.Arcane = knightStats[7];
        // console.log(knightStats[i]); // test looping through stats successful
    }
    
    for(let i = 0; i < allAttributeValues.length; i++) { // loop through all attribute values
        allAttributeValues[i].innerHTML = knightStats[i]; // and assign the stat data to the inner html
    }

    console.log(knightObject);

}
assignMercenaryStats = () => {

    let mercenaryStats = [8, 10, 11, 16, 12, 10, 11, 8, 9]
    let mercenaryObject = new Object(characterClassObject);
    level.innerHTML = 8; // set level for selected character class
    
    for(let i = 0; i < mercenaryStats.length; i++) {
        // assign the selected character class starting values to object
        mercenaryObject.Vigor = mercenaryStats[0];
        mercenaryObject.Mind = mercenaryStats[1];
        mercenaryObject.Endurance = mercenaryStats[2];
        mercenaryObject.Strength = mercenaryStats[3];
        mercenaryObject.Dexterity = mercenaryStats[4];
        mercenaryObject.Intelligence = mercenaryStats[5];
        mercenaryObject.Faith = mercenaryStats[6];
        mercenaryObject.Arcane = mercenaryStats[7];
        // console.log(mercenaryStats[i]); // test looping through stats successful
    }

    for(let i = 0; i < allAttributeValues.length; i++) { // loop through all attribute values
        allAttributeValues[i].innerHTML = mercenaryStats[i]; // and assign the stat data to the inner html
    }
    
    console.log(mercenaryObject);

}
assignWarriorStats = () => {

    let warriorStats = [7, 16, 14, 9, 6, 8, 12, 9, 11]
    let warriorObject = new Object(characterClassObject);

    level.innerHTML = 7; // set level for selected character class
    
    for(let i = 0; i < warriorStats.length; i++) {
        // assign the selected character class starting values to object
        warriorObject.Vigor = warriorStats[0];
        warriorObject.Mind = warriorStats[1];
        warriorObject.Endurance = warriorStats[2];
        warriorObject.Strength = warriorStats[3];
        warriorObject.Dexterity = warriorStats[4];
        warriorObject.Intelligence = warriorStats[5];
        warriorObject.Faith = warriorStats[6];
        warriorObject.Arcane = warriorStats[7];
        // console.log(mercenaryStats[i]); // test looping through stats successful
        
    }

    for(let i = 0; i < allAttributeValues.length; i++) { // loop through all attribute values
        allAttributeValues[i].innerHTML = warriorStats[i]; // and assign the stat data to the inner html
    }
    
    console.log(warriorObject);

}
assignHeraldStats = () => {

    let heraldStats = [9, 12, 12, 11, 10, 8, 9, 13, 12]
    let heraldObject = new Object(characterClassObject);

    level.innerHTML = 9; // set level for selected character class
    
    for(let i = 0; i < heraldStats.length; i++) {
        // assign the selected character class starting values to object
        heraldObject.Vigor = heraldStats[0];
        heraldObject.Mind = heraldStats[1];
        heraldObject.Endurance = heraldStats[2];
        heraldObject.Strength = heraldStats[3];
        heraldObject.Dexterity = heraldStats[4];
        heraldObject.Intelligence = heraldStats[5];
        heraldObject.Faith = heraldStats[6];
        heraldObject.Arcane = heraldStats[7];
        // console.log(mercenaryStats[i]); // test looping through stats successful
        
    }

    for(let i = 0; i < allAttributeValues.length; i++) { // loop through all attribute values
        allAttributeValues[i].innerHTML = heraldStats[i]; // and assign the stat data to the inner html
    }
    
    console.log(heraldObject);

}
assignThiefStats = () => {

    let thiefStats = [5, 9, 10, 13, 11, 10, 10, 8, 9]
    let thiefObject = new Object(characterClassObject);

    level.innerHTML = 5; // set level for selected character class
    
    for(let i = 0; i < thiefStats.length; i++) {
        // assign the selected character class starting values to object
        thiefObject.Vigor = thiefStats[0];
        thiefObject.Mind = thiefStats[1];
        thiefObject.Endurance = thiefStats[2];
        thiefObject.Strength = thiefStats[3];
        thiefObject.Dexterity = thiefStats[4];
        thiefObject.Intelligence = thiefStats[5];
        thiefObject.Faith = thiefStats[6];
        thiefObject.Arcane = thiefStats[7];
        // console.log(mercenaryStats[i]); // test looping through stats successful
    }

    for(let i = 0; i < allAttributeValues.length; i++) { // loop through all attribute values
        allAttributeValues[i].innerHTML = thiefStats[i]; // and assign the stat data to the inner html
    }
    
    console.log(thiefObject);

}
assignAssassinStats = () => {

    let assassinStats = [10, 10, 10, 14, 11, 14, 11, 9, 10]
    let assassinObject = new Object(characterClassObject);

    level.innerHTML = 10; // set level for selected character class
    
    for(let i = 0; i < assassinStats.length; i++) {
        // assign the selected character class starting values to object
        assassinObject.Vigor = assassinStats[0];
        assassinObject.Mind = assassinStats[1];
        assassinObject.Endurance = assassinStats[2];
        assassinObject.Strength = assassinStats[3];
        assassinObject.Dexterity = assassinStats[4];
        assassinObject.Intelligence = assassinStats[5];
        assassinObject.Faith = assassinStats[6];
        assassinObject.Arcane = assassinStats[7];
        // console.log(mercenaryStats[i]); // test looping through stats successful
    }

    for(let i = 0; i < allAttributeValues.length; i++) { // loop through all attribute values
        allAttributeValues[i].innerHTML = assassinStats[i]; // and assign the stat data to the inner html
    }
    
    console.log(assassinObject);

}
assignSorcererStats = () => {

    let sorcererStats = [10, 10, 9, 12, 7, 12, 16, 16, 9]
    let sorcererObject = new Object(characterClassObject);

    level.innerHTML = 6; // set level for selected character class
    
    for(let i = 0; i < sorcererStats.length; i++) {

        // assign the selected character class starting values to object
        sorcererObject.Vigor = sorcererStats[0];
        sorcererObject.Mind = sorcererStats[1];
        sorcererObject.Endurance = sorcererStats[2];
        sorcererObject.Strength = sorcererStats[3];
        sorcererObject.Dexterity = sorcererStats[4];
        sorcererObject.Intelligence = sorcererStats[5];
        sorcererObject.Faith = sorcererStats[6];
        sorcererObject.Arcane = sorcererStats[7];
        
        // console.log(mercenaryStats[i]); // test looping through stats successful
        
    }

    for(let i = 0; i < allAttributeValues.length; i++) { // loop through all attribute values
        allAttributeValues[i].innerHTML = sorcererStats[i]; // and assign the stat data to the inner html
    }
    
    console.log(sorcererObject);

}
assignPyromancyStats = () => {

    let pyromancyStats = [10, 10, 9, 7, 12, 16, 16, 12]
    let pyromancyObject = new Object(characterClassObject);

    level.innerHTML = 8; // set level for selected character class
    
    for(let i = 0; i < pyromancyStats.length; i++) {

        // assign the selected character class starting values to object
        pyromancyObject.Vigor = pyromancyStats[0];
        pyromancyObject.Mind = pyromancyStats[1];
        pyromancyObject.Endurance = pyromancyStats[2];
        pyromancyObject.Strength = pyromancyStats[3];
        pyromancyObject.Dexterity = pyromancyStats[4];
        pyromancyObject.Intelligence = pyromancyStats[5];
        pyromancyObject.Faith = pyromancyStats[6];
        pyromancyObject.Arcane = pyromancyStats[7];
        
        // console.log(mercenaryStats[i]); // test looping through stats successful
        
    }

    for(let i = 0; i < allAttributeValues.length; i++) { // loop through all attribute values
        allAttributeValues[i].innerHTML = pyromancyStats[i]; // and assign the stat data to the inner html
    }
    
    console.log(pyromancyObject);

}
assignClericStats = () => {

    let clericStats = [8, 4, 7, 9, 11, 10, 4, 4, 9]
    let clericObject = new Object(characterClassObject);

    level.innerHTML = 7; // set level for selected character class
    
    for(let i = 0; i < clericStats.length; i++) {

        // assign the selected character class starting values to object
        clericObject.Vigor = clericStats[0];
        clericObject.Mind = clericStats[1];
        clericObject.Endurance = clericStats[2];
        clericObject.Strength = clericStats[3];
        clericObject.Dexterity = clericStats[4];
        clericObject.Intelligence = clericStats[5];
        clericObject.Faith = clericStats[6];
        clericObject.Arcane = clericStats[7];
        
        // console.log(mercenaryStats[i]); // test looping through stats successful
        
    }

    for(let i = 0; i < allAttributeValues.length; i++) { // loop through all attribute values
        allAttributeValues[i].innerHTML = clericStats[i]; // and assign the stat data to the inner html
    }
    
    console.log(clericObject);

}
assignDeprivedStats = () => {

    let deprivedStats = [10, 10, 10, 10, 10, 10, 10, 10]
    let deprivedObject = new Object(characterClassObject);

    level.innerHTML = 1; // set level for selected character class
    
    for(let i = 0; i < deprivedStats.length; i++) {

        // assign the selected character class starting values to object
        deprivedObject.Vigor = deprivedStats[0];
        deprivedObject.Mind = deprivedStats[1];
        deprivedObject.Endurance = deprivedStats[2];
        deprivedObject.Strength = deprivedStats[3];
        deprivedObject.Dexterity = deprivedStats[4];
        deprivedObject.Intelligence = deprivedStats[5];
        deprivedObject.Faith = deprivedStats[6];
        deprivedObject.Arcane = deprivedStats[7];
        
        // console.log(mercenaryStats[i]); // test looping through stats successful
        
    }

    for(let i = 0; i < allAttributeValues.length; i++) { // loop through all attribute values
        allAttributeValues[i].innerHTML = deprivedStats[i]; // and assign the stat data to the inner html
    }
    
    console.log(deprivedObject);

}
