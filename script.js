const displayScreen = document.getElementById('input-display')

// Displays entered value on screen.
function displayInput(enteredValue) {
    if (!displayScreen.value) {
      displayScreen.value = "";
    }
    displayScreen.value += enteredValue;
  }

function resetInputScreen() {
    displayScreen.value = "";
}

function deleteInput() {
    let input = displayScreen.value;
    displayScreen.value = input.slice(0, -1);
}