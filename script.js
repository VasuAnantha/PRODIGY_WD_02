let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStopwatch() {
    if (!timer) {
        timer = setInterval(updateDisplay, 1000);
        document.querySelector('button:nth-child(1)').disabled = true; // Disable Start button
    }
}

function stopStopwatch() {
    clearInterval(timer);
    timer = null;
    document.querySelector('button:nth-child(1)').disabled = false; // Enable Start button
}

function resetStopwatch() {
    stopStopwatch();
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
}

function updateDisplay() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    const display = document.getElementById('display');
    display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(value) {
    return value < 10 ? `0${value}` : value;
}
