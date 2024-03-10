"use strict";

// Selecting Elements
// ----------------------------------------------------------------------------------
const btn_stopwatch = document.getElementById("btnStopwatch");
const btn_counter = document.getElementById("btnCounter");
const btn_calendar = document.getElementById("btnCalendar");
const main = document.getElementById("main");
const mainContainerEl = document.getElementById("mainContainer");
// Creating appStopwatch container
createEl("div", main, "stopwatchContainer", _, [
  "tab",
  "counter--1",
  "flex",
  "flex-col",
  "gap-16",
  "items-center",
  "absolute",
  "invisible",
]);

// Display
createEl("div", stopwatchContainer, "stopwatchDisplay", _, [
  "w-full",
  "h-auto",
  "flex",
  "justify-center",
  "items-center",
  "caret-transparent",
]);
createEl("span", stopwatchDisplay, "swDisplay", _, "text-9xl");

// Creating btnContainer
createEl("div", stopwatchContainer, "swBtnContainer", _, [
  "w-[25rem]",
  "flex",
  "justify-around",
  "items-center",
]);

// Reset
createEl("div", swBtnContainer, "swBtnResetContainer", _, "self-end");
createEl(
  "button",
  swBtnResetContainer,
  "btnResetStopwatch",
  "Reset",
  "btn-secondary"
);
// Start
createEl("div", swBtnContainer, "swBtnStartContainer", _, _);
createEl(
  "button",
  swBtnStartContainer,
  "btnStartStopwatch",
  "Start",
  "btn-primary"
);
// Stop
createEl("div", swBtnContainer, "swBtnStopContainer", _, "self-end");
createEl(
  "button",
  swBtnStopContainer,
  "btnStopStopwatch",
  "Stop",
  "btn-secondary"
);

const btnStopStopwatch = document.getElementById("btnStopStopwatch");
const btnStartStopwatch = document.getElementById("btnStartStopwatch");
const btnResetStopwatch = document.getElementById("btnResetStopwatch");
const swDisplay = document.getElementById("swDisplay");

// Variables
// ----------------------------------------------------------------------------------
let startTime;
let stopwatchInterval;
let elapsedTime = 0;

// Functions
// ----------------------------------------------------------------------------------
function stopwatchInit() {
  swDisplay.innerHTML = "00:00:00";
}

stopwatchInit();

function startSw() {
  if (!stopwatchInterval) {
    console.log("start");
    startTime = new Date().getTime() - elapsedTime;
    // Update every second
    stopwatchInterval = setInterval(stopWatch, 1000);
    btnStartStopwatch.style.transform = "scale(0.8)";
    btnStopStopwatch.style.transform = "scale(1.2)";
    btnResetStopwatch.style.transform = "scale(1.2)";
  }
}

function stopSw() {
  clearInterval(stopwatchInterval); // stop updating
  elapsedTime = new Date().getTime() - startTime;
  stopwatchInterval = null; // reset the interval variable
  btnStartStopwatch.style.transform = "scale(1.2)";
  btnStopStopwatch.style.transform = "scale(.8)";
  btnResetStopwatch.style.transform = "scale(1.2)";
}

function resetSw() {
  stopSw(); // stop the interval
  elapsedTime = 0; // reset the elapsed paused time variable
  stopwatchInit();
  btnStartStopwatch.style.transform = "scale(1)";
  btnStopStopwatch.style.transform = "scale(1)";
  btnResetStopwatch.style.transform = "scale(1)";
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

btnResetStopwatch.addEventListener("click", resetSw);
btnStartStopwatch.addEventListener("click", startSw);
btnStopStopwatch.addEventListener("click", stopSw);

// btn_stopwatch.addEventListener("click", function () {
//   mainContainerEl.classList.remove("translate-y-[38vh]");
//   mainContainerEl.classList.add("scale-50", "translate-y-0");
//   document.getElementById("stopwatchContainer").classList.toggle("invisible");
// });
// btn_counter.addEventListener("click", function () {
//   console.log("counter");
//   mainContainerEl.classList.remove("translate-y-[38vh]");
//   mainContainerEl.classList.add("scale-50", "translate-y-0");
//   document.getElementById("counterContainer").classList.toggle("invisible");
// });
