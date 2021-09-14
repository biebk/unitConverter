/*
How will javascript work for this converter?
1. First of all the all the radio will have onclick event which will fire a function when being checked.
That functions task is to change the attribute of input box.

2. We will do all the conversion within one function which will take the help of switch statement for correct
conversion. The variable for switch statement will dynamically change on the basis of which radio button is being checked.

3. Finally we will attach that function to result button. We will also attach a reset function which task
is to clear all the changes and set everything as it was at the beginning.

*/
var userChoice = "cmToInch";
function radioChecker() {
    var task = document.querySelector(".container input[type='radio']:checked").value;

    var userInput = document.getElementById("user_input");
    var userOutput = document.querySelector(".container .input_box .final_data");
    switch (task) {
        case "cmToInch": {
            userInput.setAttribute("placeholder", "Enter cm");
            userOutput.innerHTML = "Inch";
            userChoice = task;
            break;
        }
        case "inchToCm": {
            userInput.setAttribute("placeholder", "Enter inch");
            userOutput.innerHTML = "cm";
            userChoice = task;
            break;
        }
        case "feetToMeter": {
            userInput.setAttribute("placeholder", "Enter feet");
            userOutput.innerHTML = "meter";
            userChoice = task;
            break;
        }
        case "meterToFeet": {
            userInput.setAttribute("placeholder", "Enter meter");
            userOutput.innerHTML = "feet";
            userChoice = task;
            break;
        }
    }

}

var converter = (userChoice) => {
    var userData = document.getElementById("user_input").value;
    var resultBox = document.querySelector(".container .result");

    if (userData.length === 0) {
        // console.log(typeof userData);
        resultBox.innerText = "Error, empty value!";
        resultBox.style.opacity = 1;
    }

    else if (Number.isNaN(parseInt(userData))) {
        resultBox.innerText = "String not acceptable!";
        resultBox.style.opacity = 1;
    }

    else if (typeof (parseInt(userData) === Number)) {

        var userData = parseInt(userData);

        switch (userChoice) {
            case "cmToInch": {
                console.log("I reached here");
                var cm = userData;
                var inch = cm * 0.394;
                console.log(inch);
                resultBox.innerText = inch.toFixed(6);
                resultBox.style.opacity = 1;
                break;
            }
            case "inchToCm": {
                var inch = userData;
                var cm = inch * 2.54;
                resultBox.innerText = cm.toFixed(6);
                resultBox.style.opacity = 1;
                break;
            }
            case "feetToMeter": {
                var feet = userData;
                var meter = feet * 0.3048;
                resultBox.innerText = meter.toFixed(6);
                resultBox.style.opacity = 1;
                break;
            }
            case "meterToFeet": {
                var meter = userData;
                var feet = meter * 3.28084;
                resultBox.innerText = feet.toFixed(6);
                resultBox.style.opacity = 1;
                break;
            }
        }

    }
};

var reset = () => {
    var resultBox = document.querySelector(".container .result");
    var userData = document.getElementById("user_input");
    resultBox.style.opacity = 0;
    userData.value = "";
}