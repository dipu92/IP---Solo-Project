/* Calculator */

const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function insertBracket() {

    const currentText = display.value;
    const lastChar = currentText[currentText.length - 1];

    if (currentText === '' || ['+', '-', '*', '/'].includes(lastChar)) {
        display.value += '(';
    }
    else {

        const openBrackets = (currentText.match(/\(/g) || []).length;
        const closeBrackets = (currentText.match(/\)/g) || []).length;

        if (openBrackets > closeBrackets) {
            display.value += ')';
        }
        else {
            display.value += '(';
        }
    }
}

function applyPercentage() {

    let currentVal = display.value;

    if (currentVal !== "") {

        try {
            let evaluatedValue = eval(currentVal);
            display.value = parseFloat(evaluatedValue) / 100;
        }

        catch (error) {
            display.value = "Error";
        }
    }
}

function calculate() {

    try {
        display.value = eval(display.value);
    }

    catch (error) {
        display.value = "Error";
    }
}


/* Countdown Timer */

const Days = document.getElementById("days");
const Hours = document.getElementById("hours");
const Minutes = document.getElementById("minutes");
const Seconds = document.getElementById("seconds");

const targetDate = new Date("May 25, 2026 23:59:59").getTime();

function timer() {

    const currentDate = new Date().getTime();

    const distance = targetDate - currentDate;

    const days = Math.floor(distance / 1000 / 60 / 60 / 24);

    const hours = Math.floor(distance / 1000 / 60 / 60) % 24;

    const minutes = Math.floor(distance / 1000 / 60) % 60;

    const seconds = Math.floor(distance / 1000) % 60;

    Days.innerHTML = days;
    Hours.innerHTML = hours;
    Minutes.innerHTML = minutes;
    Seconds.innerHTML = seconds;
}

timer();
setInterval(timer, 1000);