function appendToDisplay(value) {
      document.getElementById("display").value += value;
    }

function calculate() {
    try {
    document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch (error) {
    document.getElementById("display").value = "Error";
    }
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculateRoot() {
    document.getElementById("display").value = Math.sqrt(eval(document.getElementById("display").value));
}

document.addEventListener("keydown", function(event) {
    const tecla = event.key;
    if (!isNaN(tecla) || tecla === '.' || tecla === '+' || tecla === '-' || tecla === '*' || tecla === '/') {
        appendToDisplay(tecla);
    } else if (tecla === 'Enter') {
        calculate();
    } else if (tecla === 'Backspace') {
        clearDisplay();
    }
})

