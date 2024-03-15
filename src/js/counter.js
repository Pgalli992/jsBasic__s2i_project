"use strict";

// Selecting Elements
// ----------------------------------------------------------------------------------
createEl("div", main, "counterContainer", _, [
  "tab",
  "counter--2",
  "flex",
  "flex-col",
  "gap-16",
  "items-center",
  "absolute",
  "invisible",
]);

// Display
createEl("div", counterContainer, "counterDisplay", _, [
  "w-full",
  "h-auto",
  "text-9xl",
  "flex",
  "justify-center",
  "items-center",
  "caret-transparent",
]);

// Creating btnContainer
createEl("div", counterContainer, "counterBtnContainer", _, [
  "w-80",
  "flex",
  "justify-around",
  "items-center",
  "md:w-[25rem]",
]);

// Reduce
createEl("div", counterBtnContainer, "counterBtnReduceContainer", _, _);
createEl(
  "button",
  counterBtnReduceContainer,
  "btnReduceCounter",
  "-",
  "btn-primary"
);
// Reset
createEl("div", counterBtnContainer, "counterBtnResetContainer", _, _);
createEl(
  "button",
  counterBtnResetContainer,
  "btnResetCounter",
  "Reset",
  "btn-secondary"
);
// Increse
createEl("div", counterBtnContainer, "counterBtnIncreseContainer", _, _);
createEl(
  "button",
  counterBtnIncreseContainer,
  "btnIncreseCounter",
  "+",
  "btn-primary"
);

const btnReduceCounter = document.getElementById("btnReduceCounter");
const btnResetCounter = document.getElementById("btnResetCounter");
const btnIncreseCounter = document.getElementById("btnIncreseCounter");
const counterDisplay = document.getElementById("counterDisplay");

// Variables
// ----------------------------------------------------------------------------------
let counter = parseInt(localStorage.counter);

// Audio
let audioCounter = new Audio("./src/audio/counterAudio.wav");
let audioResetCounter = new Audio("./src/audio/counterResetAudio.wav");

// Functions
// ----------------------------------------------------------------------------------
function counterInit() {
  if (!localStorage.counter) {
    counter = 0;
    localStorage.counter = counter;
    displayCounter();
    btnResetCounter.style.transform = "scale(1)";
  } else {
    displayCounter();
  }
}
counterInit();

function increaseCounter() {
  counter += 1;
  localStorage.counter = counter;
  btnResetCounter.style.transform = "scale(1.2)";
  displayCounter();
  playAudio(audioCounter);
}

function reduceCounter() {
  counter -= 1;
  localStorage.counter = counter;
  btnResetCounter.style.transform = "scale(1.2)";
  displayCounter();
  playAudio(audioCounter);
}

function resetCounter() {
  counter = 0;
  localStorage.counter = counter;
  displayCounter();
  playAudio(audioResetCounter);
}

function displayCounter() {
  counter >= 0
    ? (counterDisplay.style.color = "#fff")
    : (counterDisplay.style.color = "#b91c1c");
  counterDisplay.innerHTML = localStorage.counter;
}

btnIncreseCounter.addEventListener("click", increaseCounter);
btnReduceCounter.addEventListener("click", reduceCounter);
btnResetCounter.addEventListener("click", resetCounter);
