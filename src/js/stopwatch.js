"use strict";

// Selecting Elements
// ----------------------------------------------------------------------------------
const btnStop = document.querySelector("#btnStop");
const btnStart = document.querySelector("#btnStart");
const btnReset = document.querySelector("#btnReset");
const swDisplay = document.querySelector("#swDisplay");

// Variables
// ----------------------------------------------------------------------------------
let startTime;
let stopwatchInterval;
let elapsedTime = 0;

// Functions
// ----------------------------------------------------------------------------------
function init() {
  swDisplay.innerHTML = "00:00:00";
}

init();

function startSw() {
  if (!stopwatchInterval) {
    console.log("start");
    startTime = new Date().getTime() - elapsedTime;
    // Update every second
    stopwatchInterval = setInterval(stopWatch, 1000);
    btnStart.style.transform = "scale(0.8)";
    btnStop.style.transform = "scale(1.1)";
  }
}

function stopSw() {
  clearInterval(stopwatchInterval); // stop updating
  elapsedTime = new Date().getTime() - startTime;
  stopwatchInterval = null; // reset the interval variable
  btnStart.style.transform = "scale(1.1)";
  btnStop.style.transform = "scale(.8)";
}

function resetSw() {
  stopSw(); // stop the interval
  elapsedTime = 0; // reset the elapsed paused time variable
  swDisplay.innerHTML = "00:00:00"; // reset the display
  btnStart.style.transform = "scale(1)";
  btnStop.style.transform = "scale(1)";
}

function stopWatch() {
  let currentTime = new Date().getTime(); // get current time in milliseconds
  let pastTime = currentTime - startTime; // calculate elapsed time in milliseconds
  let seconds = Math.floor(pastTime / 1000) % 60; // calculate seconds
  let minutes = Math.floor(pastTime / 1000 / 60) % 60; // calculate minutes
  let hours = Math.floor(pastTime / 1000 / 60 / 60); // calculate hours
  let displayTime =
    return2digit(hours) +
    ":" +
    return2digit(minutes) +
    ":" +
    return2digit(seconds); // format display time
  swDisplay.innerHTML = displayTime; // update the display
}

btnStart.addEventListener("click", startSw);
btnStop.addEventListener("click", stopSw);
btnReset.addEventListener("click", resetSw);
