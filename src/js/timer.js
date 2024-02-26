"use strict";

// DOM
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

// Functions
// ----------------------------------------------------------------------------------
// Reduces the data to 2 digits
function return2digit(num) {
  return num.toString().padStart(2, "0");
}

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
  // Refreshing the countdown every second
  // Today
  const nowInMs = new Date().getTime();
  const endCalendarTimer = dateSelectedInMs - nowInMs;
  console.log(nowInMs);
  console.log(dateSelectedInMs);
  console.log(endCalendarTimer);

  if (nowInMs === dateSelectedInMs) {
    clearInterval(timer);
    console.log("Finish");
  } else {
    days.innerHTML = Math.floor(endCalendarTimer / dayInMs);
    hours.innerHTML = Math.floor((endCalendarTimer % dayInMs) / hourInMs);
    minutes.innerHTML = Math.floor((endCalendarTimer % hourInMs) / minuteInMs);
    seconds.innerHTML = Math.floor(
      (endCalendarTimer % minuteInMs) / secondInMs
    );
  }
}

dateInput.value = date;

btnStart.addEventListener("click", function () {
  btnStartDiv.style.zIndex = -30;
  const counterTimer = setInterval(timer, 1000);
  timer();
});
