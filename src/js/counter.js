"use strict";

// Selecting Elements
// ----------------------------------------------------------------------------------
const btnReduce = document.querySelector("#btnReduce");
const btnReset = document.querySelector("#btnReset");
const btnIncrese = document.querySelector("#btnIncrese");
const counterDisplay = document.querySelector("#counterDisplay");

// Variables
// ----------------------------------------------------------------------------------
let counter = 0;

// Functions
// ----------------------------------------------------------------------------------
function init() {
  counter = 0;
  displayCounter();
  btnReset.style.transform = "scale(1)";
}
init();

function increaseCounter() {
  counter += 1;
  btnReset.style.transform = "scale(1.2)";
  displayCounter();
}

function reduceCounter() {
  counter -= 1;
  btnReset.style.transform = "scale(1.2)";
  displayCounter();
}

function displayCounter() {
  counter >= 0
    ? (counterDisplay.style.color = "#fff")
    : (counterDisplay.style.color = "#b91c1c");
  counterDisplay.innerHTML = counter;
}

btnIncrese.addEventListener("click", increaseCounter);
btnReduce.addEventListener("click", reduceCounter);
btnReset.addEventListener("click", init);
