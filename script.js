const displayScreen = document.getElementById('input-display')
const displayOutput = document.getElementById('output-result')
document.addEventListener("keyup", keyBoardFunction);

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
        evaluateResult();
    }    
}

function resetInputScreen() {
    displayScreen.value = "";
    displayOutput.textContent = "0";
}

function deleteInput() {
    let input = displayScreen.value;
    displayScreen.value = input.slice(0, -1);
    evaluateResult();
}

function displayTotal() {
    displayScreen.value = displayOutput.textContent;
    displayOutput.textContent = "0";
}

function isOperator(value) {
    return isNaN(value);
}

function keyBoardFunction(e) {
    if(e.key == "1"  || e.key == "Num1") {
        displayScreen.value += "1";
    } else if(e.key == "2"  || e.key == "Num2") {
        displayScreen.value += "2";
    } else if(e.key == "3"  || e.key == "Num3") {
        displayScreen.value += "3";
    } else if(e.key == "4"  || e.key == "Num4") {
        displayScreen.value += "4";
    } else if(e.key == "5"  || e.key == "Num5") {
        displayScreen.value += "5";
    } else if(e.key == "6"  || e.key == "Num6") {
        displayScreen.value += "6";
    } else if(e.key == "7"  || e.key == "Num7") {
        displayScreen.value += "7";
    } else if(e.key == "8"  || e.key == "Num8") {
        displayScreen.value += "8";
    } else if(e.key == "9"  || e.key == "Num9") {
        displayScreen.value += "9";
    } else if(e.key == "0"  || e.key == "Num0") {
        displayScreen.value += "0";
    } else if(e.key == "+") {
        displayScreen.value += "+";
    } else if(e.key == "-") {
        displayScreen.value += "-";
    } else if(e.key == "*") {
        displayScreen.value += "*";
    } else if(e.key == "/") {
        displayScreen.value += "/";
    } else if(e.key == "%") {
        displayScreen.value += "%";
    } else if(e.key == "=" || e.key == "Enter") {
        displayTotal();
    } else if (e.key == "Backspace" || e.key == "<") {
        deleteInput();12
    } else if (e.key == "Delete") {
        resetInputScreen();
    }
    console.log(e.key)
    evaluateResult();
}

function evaluateResult() {
    if (displayScreen.value == undefined || displayScreen.value == "") {
        displayOutput.textContent = "0"
    } else {
        displayOutput.textContent = eval(displayScreen.value);
    }
}