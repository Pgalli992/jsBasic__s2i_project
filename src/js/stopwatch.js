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
function startSw() {
  if (!stopwatchInterval) {
    console.log("start");
    startTime = new Date().getTime() - elapsedTime;
    // Update every second
    stopwatchInterval = setInterval(stopWatch, 1000);
  }
}

function stopSw() {
  clearInterval(stopwatchInterval); // stop updating
  elapsedTime = new Date().getTime() - startTime;
  stopwatchInterval = null; // reset the interval variable
}

function resetSw() {
  stopSw(); // stop the interval
  elapsedTime = 0; // reset the elapsed paused time variable
  swDisplay.innerHTML = "00:00:00"; // reset the display
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

swDisplay.innerHTML = "00:00:00";

btnStop.addEventListener("click", stopSw);
btnStart.addEventListener("click", startSw);
btnReset.addEventListener("click", resetSw);
