let counter = 0; // set a value for starting attributes
let allAttributeValues = document.querySelectorAll('.number'); // select all the attribute values
// for(let i = 0; i < allAttributeValues.length; i++) {allAttributeValues[i].innerHTML = 0}; // set all stat attribute values to zero [ converted to clear function ]

let level = document.querySelector('.level'); // declare the character level variable
level.innerHTML = 1; // set a default starting level for prototype application view

/*
    Button Click Event [ increaseAttributeValue ]

    Validates the current attribute value
    Determines if the value can be increase beyond 'highestAttributeValue' parameters
    Displays a warning/error message to user if value cannot be increase any higher
    Updates current value with new increased value

*/
let plusButtons = document.querySelectorAll('.plusButtons'); // select all [ plusButtons ] elements
plusButtons.forEach(element => {

    // click event all [ plusButtons ]
    element.addEventListener('click', ()=> {

        let currentParent = element.parentNode; // select the current parent element
        console.log('plusButton Event : ' + currentParent); // test the current parent element

        let currentValue = currentParent.querySelector('.number'); // select the current value based on the parent element
        console.log('plusButton Event : ' + currentValue.innerHTML); // test current value data retrieval method

        counter = currentValue.innerHTML; // set counter to the current attribute value

        // // validate if counter value if below [ hardCapValue = 60 stat points ]
        if(counter <= 59) {
            counter++; // increase the counter value by 1 [ unit or stat ]    
            level.innerHTML++;
        }
        currentValue.innerHTML = counter; // re-assign new attribute value to application

    });
    
});

/*
    Button Click Event [ descreseAttributeValue ]

    Validates the current attribute value
    Determines if the value can be descreased beyond 'lowestAttributeValue' parameters
    Displays a warning/error message to user if value cannot be descresed any lower
    Updates current value with new descreased value

*/
let minusButtons = document.querySelectorAll('.minusButtons');
minusButtons.forEach(element => {

    // click event all [ minusButtons ]
    element.addEventListener('click', ()=> {

        let currentParent = element.parentNode; // select the current parent element
        console.log(currentParent); // test the selection of the current parent element

        let currentValue = currentParent.querySelector('.number'); // select the current value based on the parent element
        // console.log(currentValue); // test the current value data retrieval method
        counter = currentValue.innerHTML; // assign the current attribute value to the counter element [ number ]

        if (counter == 0) { // validate current counter value
            counter = 0; // set counter value to zero
        }
        else {
            counter = counter - 1; // decrease the counter value by 1 [ unit or stat ]
            currentValue.innerHTML = counter; // re-assign new attribute value to application
            console.log(counter); // test the counter element data

            let currentLevel = level.innerHTML;
            level.innerHTML = currentLevel - 1;
        }
    
    });
});

resetAttributeStats = () => {

    // 1. validate the current character selection
    // 2. select all the current attribute values
    // 3. revert the current values to the selected character starting stats
    // 4. display a message to the application 
    let characterClassName = document.querySelector('.characterClassName-mobile');

    for(let i = 0; i < allAttributeValues.length; i++) {
        allAttributeValues[i].innerHTML = 0; // set all selected attribute values to 0 [ zero ]
        level.innerHTML = 0; // set level to default value of 0 [ zero ] or unselected
        characterClassName.innerHTML = ''; // set character class name [ mobile ] to empty string
    }
    console.log('Function : resetAttributeStats active'); // test the function has been initiated

};
resetAttributeStats();
/*
    Button Click Event [ resetButton ]

    Initiates the 'resetAttributeStats' function
    Selects all the attribute values in the application list
    Set all the attribute values to 0 [ zero ]

*/
let resetButton = document.querySelector('#resetButton');
resetButton.addEventListener('click', ()=> { resetAttributeStats() });


// gsap.from('#playableCharacters', {y: 900, duration: 0.1, opacity: 0});
// application view state
const playableCharacters = document.querySelector('#playableCharacters'); // declare the playableCharacters article element
// playableCharacters.style.top = '100vh'; // style opacity for GSAP animations
const attributesCalculator = document.querySelector('#attributesCalculator'); // declare the attributesCalculator section element

const characterInformationButton = document.querySelector('#informationButton'); // 
characterInformationButton.addEventListener('click', ()=> {
    
    if(playableCharacters.style.opacity == 0) {
        characterInformationButton.innerHTML = 'calculator';
        gsap.to('#playableCharacters', {y: 0, duration: 1, opacity: 1});
        // gsap.to('#playableCharacters', {x: 0, duration: 1});

        // playableCharacters.style.top = '0vh'; // move the element to top of page [ absolute positioning ]
        
    }
    else {
        characterInformationButton.innerHTML = 'characters';
        gsap.to('#playableCharacters', {y: 900, duration: 0.8, opacity: 0});
        // playableCharacters.style.display = 'none'; // remove the playable characters tab
    }
    
});


let extendedInformation = document.querySelectorAll('.extendedInformation');
// function [ removeExtendedInformation ]
removeExtendedInformation = () => {
    for(let i = 0; i < extendedInformation.length; i++) { // loop through all extended information elements
        extendedInformation[i].style.display = 'none'; // remove them from view
    }

}
removeExtendedInformation(); // init function onload

startingAnimationPlayableCharacters = () => {

    gsap.to('#playableCharacters', {y: 900, duration: 0.1, opacity: 0});
}
startingAnimationPlayableCharacters(); // init function onload



/*
    Article active panel exit button

    Removes all 'active' classes from the article component.
    Hides the current hidden-info element & the exit button 
    on application view.

*/
let exitButton = document.querySelector('#exitButton'); // declare the application exit button
exitButton.style.display = 'none'; // remove exit button from application view
exitButton.addEventListener('click', ()=> {

    // declare all active classes
    let current = document.getElementsByClassName("active");
    // validate all active classes
    if (current.length > 0) { 
        current[0].className = current[0].className.replace(" active", ""); // remove any active classes
    }
    exitButton.style.display = 'none'; // remove the exit button
  
    removeExtendedInformation(); // init remove [ extended information ] function

});

/* 
    article information list module

    validates a clicked panel element & either 
    assigns or removes the 'active' class name

*/
let articleList = document.querySelector('#playableCharacters .list');
console.log(articleList);
var articleItems = articleList.getElementsByClassName("items");
console.log(articleItems);
// For Loop [ Article Items ]
for (var i = 0; i < articleItems.length; i++) {
    // click event [ all article items ]
    articleItems[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    
    // validate any active classes
    if (current.length > 0) { 
        current[0].className = current[0].className.replace(" active", ""); // replace active class with empty string
    }
    for(let i = 0; i < extendedInformation.length; i++) {
        extendedInformation[i].style.display = 'block';
    }
    this.className += " active"; // add the active class to 'this' clicked element
    exitButton.style.display = 'block'; // display the active exit button



    // extendedInformation.style.display = 'block'; // display the hidden information text

    });
}


// remove character overview element on mobile [ work in progress ]
let characterOverview = document.querySelector('#characterOverview');
characterOverview.style.display = 'none';