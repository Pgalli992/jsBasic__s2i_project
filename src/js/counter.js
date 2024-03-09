"use strict";

// Selecting Elements
// ----------------------------------------------------------------------------------
createEl("div", main, "counterContainer", _, [
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
  "w-[25rem]",
  "flex",
  "justify-around",
  "items-center",
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
let counter = 0;

// Functions
// ----------------------------------------------------------------------------------
function init() {
  counter = 0;
  displayCounter();
  btnResetCounter.style.transform = "scale(1)";
}
init();

function increaseCounter() {
  counter += 1;
  btnResetCounter.style.transform = "scale(1.2)";
  displayCounter();
}

function reduceCounter() {
  counter -= 1;
  btnResetCounter.style.transform = "scale(1.2)";
  displayCounter();
}

function displayCounter() {
  counter >= 0
    ? (counterDisplay.style.color = "#fff")
    : (counterDisplay.style.color = "#b91c1c");
  counterDisplay.innerHTML = counter;
}

btnIncreseCounter.addEventListener("click", increaseCounter);
btnReduceCounter.addEventListener("click", reduceCounter);
btnResetCounter.addEventListener("click", init);
