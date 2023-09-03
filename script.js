const displayScreen = document.getElementById('input-display')
const displayOutput = document.getElementById('output-result')

function displayInput(enteredValue) {
    if (!displayScreen.value) {
      displayScreen.value = "";
    }
    displayScreen.value += enteredValue;
    displayOutput.textContent = eval(displayScreen.value);
}

function resetInputScreen() {
    displayScreen.value = "";
    displayOutput.textContent = "0"
}

function deleteInput() {
    let input = displayScreen.value;
    displayScreen.value = input.slice(0, -1);
    displayOutput.textContent = eval(displayScreen.value);
}

function displayTotal() {
    displayScreen.value = displayOutput.textContent
    displayOutput.textContent = "0"
}