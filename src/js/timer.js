"use strict";

// DOM
const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const dateSelected = document.getElementById("date");
const btnStart = document.querySelector("#btnStart");

// Variables

// Tabella in ms
const secondsInMs = 1000;
const minutesInMs = 60 * secondsInMs;
const hoursInMs = 60 * minutesInMs;
const daysInMs = 24 * hoursInMs;

btnStart.addEventListener("click", function () {
  let futureDate = dateSelected.value;
  console.log(futureDate);
});
