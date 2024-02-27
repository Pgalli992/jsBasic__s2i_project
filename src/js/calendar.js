"use strict";

// Selecting Elements
// ----------------------------------------------------------------------------------
const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const btnStart = document.querySelector("#btnStart");
const btnReset = document.querySelector("#btnReset");
const dateInput = document.getElementById("date");
const btnStartDiv = document.querySelector("#btnStartDiv");

// Variables
// ----------------------------------------------------------------------------------
const [date, time] = formatDate(new Date()).split(" ");
// console.log(new Date());
// Sun Feb 25 2024 23:53:41 GMT+0100 (Ora standard dell’Europa centrale)

// Tabella in ms
const secondInMs = 1000;
const minuteInMs = 60 * secondInMs;
const hourInMs = 60 * minuteInMs;
const dayInMs = 24 * hourInMs;

let counterTimer;

// Functions
// ----------------------------------------------------------------------------------

function init() {
  dateInput.value = date;
  days.innerHTML = "0";
  hours.innerHTML = "0";
  minutes.innerHTML = "0";
  seconds.innerHTML = "0";
}

init();

// Format the date
// Sun Feb 25 2024 23:53:41 GMT+0100 (Ora standard dell’Europa centrale)
function formatDate(date) {
  return [
    date.getFullYear(), // 2024
    // +1 because the index of array strat from 0. Jan = 0 feb = 1 ...
    return2digit(date.getMonth() + 1), // feb = 1 --> 1+1 = 2
    return2digit(date.getDate()), // 25
  ].join("-");
}

function timer() {
  const dateSelected = dateInput.value;
  const dateSelectedInMs = new Date(dateSelected).getTime();
  // Updating the countdown every second
  // Today
  const nowInMs = new Date().getTime();
  const endCalendarTimer = dateSelectedInMs - nowInMs;
  // console.log(nowInMs);
  // console.log(dateSelectedInMs);
  // console.log(endCalendarTimer);

  if (nowInMs === dateSelectedInMs || endCalendarTimer < 0) {
    clearInterval(counterTimer);
    // Added timeout to display 'Resset btn' beore the alert.
    setTimeout(function () {
      alert("The countdown is over, please click 'Reset'");
    }, 100);
  } else {
    days.innerHTML = Math.floor(endCalendarTimer / dayInMs);
    hours.innerHTML = Math.floor((endCalendarTimer % dayInMs) / hourInMs);
    minutes.innerHTML = Math.floor((endCalendarTimer % hourInMs) / minuteInMs);
    seconds.innerHTML = Math.floor(
      (endCalendarTimer % minuteInMs) / secondInMs
    );
  }
}

// Start timer
btnStart.addEventListener("click", function () {
  btnStartDiv.style.zIndex = -30;
  counterTimer = setInterval(timer, 1000);
  timer();
});

// Stop timer
btnReset.addEventListener("click", function () {
  clearInterval(counterTimer);
  init();
  btnStartDiv.style.zIndex = 30;
});
