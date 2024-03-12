"use strict";

createEl("div", main, "calendarContainer", _, [
  "counter--3",
  "flex",
  "flex-col",
  "gap-16",
  "items-center",
  "absolute",
  "invisible",
  "tab",
]);

createEl("div", calendarContainer, "calendarInputField", _, [
  "w-full",
  "h-auto",
  "flex",
  "justify-center",
  "items-center",
  "caret-transparent",
]);

createEl("input", calendarInputField, "dateInput", _, [
  "text-3xl",
  "bg-rich-blue-300",
  "text-center",
  "md:text-6xl",
]);
document.getElementById("dateInput").type = "date";

createEl("div", calendarContainer, "calendarDisplay", _, [
  "flex",
  "justify-center",
  "items-center",
  "gap-4",
  "md:gap-10",
]);
// Days box
createEl("div", calendarDisplay, "boxDays", _, [
  "flex",
  "flex-col",
  "justify-center",
  "items-center",
  "text-center",
]);
createEl("div", boxDays, "daysDiv", _, [
  "w-full",
  "min-h-9",
  "text-2xl",
  "text-rich-blue-800",
  "md:text-3xl",
]);
createEl("span", boxDays, "dd", "Days", "text-lg");
// Hours box
createEl("div", calendarDisplay, "boxHours", _, [
  "flex",
  "flex-col",
  "justify-center",
  "items-center",
  "text-center",
]);
createEl("div", boxHours, "hoursDiv", _, [
  "w-full",
  "min-h-9",
  "text-3xl",
  "text-rich-blue-700",
]);
createEl("span", boxHours, "hh", "Hours", ["text-lg"]);
// Minutes box
createEl("div", calendarDisplay, "boxMinutes", _, [
  "flex",
  "flex-col",
  "justify-center",
  "items-center",
  "text-center",
]);
createEl("div", boxMinutes, "minutesDiv", _, [
  "w-full",
  "min-h-9",
  "text-3xl",
  "text-rich-blue-600",
]);
createEl("span", boxMinutes, "mm", "Minutes", ["text-lg"]);
// Seconds box
createEl("div", calendarDisplay, "boxSeconds", _, [
  "flex",
  "flex-col",
  "justify-center",
  "items-center",
  "text-center",
]);
createEl("div", boxSeconds, "secondsDiv", _, [
  "w-full",
  "min-h-9",
  "text-3xl",
  "text-rich-blue-500",
]);
createEl("span", boxSeconds, "ss", "Seconds", ["text-lg"]);

// Buttons container
createEl("div", calendarContainer, "calendarBtnContainer", _, [
  "w-auto",
  "flex",
  "justify-around",
  "items-center",
  "relative",
  "pt-40",
]);

// Start
createEl("div", calendarBtnContainer, "calendarBtnStartContainer", _, [
  "absolute",
  "top-1/2",
  "left-1/2",
  "-translate-x-1/2",
  "-translate-y-1/2",
  "z-30",
]);
createEl(
  "button",
  calendarBtnStartContainer,
  "calendarBtnStart",
  "Start",
  "btn-primary"
);
// Reset
createEl("div", calendarBtnContainer, "calendarBtnResetContainer", _, [
  "absolute",
  "top-1/2",
  "left-1/2",
  "-translate-x-1/2",
  "-translate-y-1/2",
]);
createEl(
  "button",
  calendarBtnResetContainer,
  "calendarBtnReset",
  "Reset",
  "btn-primary"
);

// Selecting Elements
// ----------------------------------------------------------------------------------
const days = document.getElementById("daysDiv");
const hours = document.getElementById("hoursDiv");
const minutes = document.getElementById("minutesDiv");
const seconds = document.getElementById("secondsDiv");
const calendarBtnStart = document.getElementById("calendarBtnStart");
const calendarBtnReset = document.getElementById("calendarBtnReset");
const dateInput = document.getElementById("dateInput");
const btnStartDiv = document.getElementById("calendarBtnStartContainer");

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

function calendarInit() {
  dateInput.value = date;
  days.innerHTML = "0";
  hours.innerHTML = "0";
  minutes.innerHTML = "0";
  seconds.innerHTML = "0";
}

calendarInit();

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
calendarBtnStart.addEventListener("click", function () {
  btnStartDiv.style.zIndex = -30;
  counterTimer = setInterval(timer, 1000);
  timer();
});

// Stop timer
calendarBtnReset.addEventListener("click", function () {
  clearInterval(counterTimer);
  calendarInit();
  console.log("nit");
  btnStartDiv.style.zIndex = 30;
});

const tabs = document.querySelectorAll(".tab");
