let counter = 0; // set a value for starting attributes

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
        console.log(currentValue); // test the current value data retrieval method
        counter = currentValue.innerHTML; // assign the current attribute value to the counter element [ number ]

        if (counter == 0) { // validate current counter value
            counter = 0; // set counter value to zero
        }
        else {
            counter = counter - 1; // decrease the counter value by 1 [ unit or stat ]
            currentValue.innerHTML = counter; // re-assign new attribute value to application
            console.log(counter); // test the counter element data
        }
    
    });
});


clearAttributeStats = () => {
    let allAttributeValues = document.querySelectorAll('.number'); // select all the attribute values
    for(let i = 0; i < allAttributeValues.length; i++) {
        allAttributeValues[i].innerHTML = 0; // set all selected attribute values to 0 [ zero ]
    }
    console.log('Function : ClearAttributeStats active'); // test the function has been initiated
};

/*
    Button Click Event [ clearButton ]

    Initiates the 'clearAttributeStats' function
    Selects all the attribute values in the application list
    Set all the attribute values to 0 [ zero ]

*/
let clearButton = document.querySelector('#clearButton');
clearButton.addEventListener('click', ()=> { clearAttributeStats() });


// function [ resetAttributeStats ]
resetAttributeStats = () => {

    // 1. validate the current character selection
    // 2. select all the current attribute values
    // 3. revert the current values to the selected character starting stats
    // 4. display a message to the application 

};
