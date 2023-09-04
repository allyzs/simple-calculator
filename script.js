const displayScreen = document.getElementById('input-display')
const displayOutput = document.getElementById('output-result')

function displayInput(enteredValue) {
    if (displayScreen.value == undefined) {
        let firstInputAnOperator = isOperator(enteredValue);
        console.log(firstInputAnOperator)
        if (firstInputAnOperator) {
            displayScreen.value = "";
        } else {
            displayScreen.value += enteredValue;
            displayOutput.textContent = eval(displayScreen.value);
        }
    } else {
        let input = displayScreen.value;
        let lastInput = input.slice(-1)
        let lastInputAnOperator = isOperator(lastInput)
        let enteredValueAnOperator = isOperator(enteredValue)
        if (lastInputAnOperator && enteredValueAnOperator) {
            displayScreen.value = input.slice(0, -1);
        }
        displayScreen.value += enteredValue;
        displayOutput.textContent = eval(displayScreen.value);
    }    
}

function resetInputScreen() {
    displayScreen.value = "";
    displayOutput.textContent = "0";
}

function deleteInput() {
    let input = displayScreen.value;
    displayScreen.value = input.slice(0, -1);
    if (displayScreen.value == undefined || displayScreen.value == "") {
        displayOutput.textContent = "0"
    } else {
        displayOutput.textContent = eval(displayScreen.value);
    }
}

function displayTotal() {
    displayScreen.value = displayOutput.textContent;
    displayOutput.textContent = "0";
}

function isOperator(value) {
    return isNaN(value);
}