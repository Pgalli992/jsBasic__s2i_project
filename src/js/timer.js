"use strict";

// DOM
const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const dateSelected = document.querySelector("#date");
const btnStart = document.querySelector("#btnStart");

// Variables
const futureDate = dateSelected.value;

// Tabella in ms
const secondsInMs = 1000;
const minutesInMs = 60 * secondsInMs;
const hoursInMs = 60 * minutesInMs;
const daysInMs = 24 * hoursInMs;

btnStart.addEventListener("click", function () {
  console.log(futureDate);
});
