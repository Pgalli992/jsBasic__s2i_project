"use strict";
// ------------------------------------------------------------------

// SVG icons for timer, counter, and calendar
const timerSvg = `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="#fff"
    class="counterSVG counterSVG--1 w-10 aspect-square duration-300 group-hover:stroke-rich-blue-800 md:w-16"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </svg>
`;
const counterSvg = `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="#fff"
    class="counterSVG counterSVG--2 w-10 aspect-square duration-300 group-hover:stroke-rich-blue-800 md:w-16"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
    />
  </svg>
`;
const calendarSvg = `  
<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke-width="1.5"
  stroke="#fff"
  class="counterSVG counterSVG--3 w-10 aspect-square group-hover:stroke-rich-blue-800 md:w-16"
>
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
  />
</svg>
`;

// ------------------------------------------------------------------

// Functions
// ----------------------------------------------------------------------------------

// Returns a 2-digit representation of a number
function return2digit(num) {
  return num.toString().padStart(2, "0");
}

let _ = undefined;

// Function to create an element
function createEl(eTag, eParent, eId, eContent, eClass) {
  const element = document.createElement(eTag);
  if (eContent) {
    element.innerHTML = eContent;
  }
  if (eId) {
    element.setAttribute("id", eId);
  }
  if (eClass && Array.isArray(eClass)) {
    element.classList.add(...eClass);
  } else {
    element.classList.add(eClass);
  }
  if (eParent === "body") {
    document.body.append(element);
  } else {
    eParent.append(element);
  }
}

function addClassesToElements(elements, classes) {
  elements.forEach(function (el) {
    el.classList.add(...classes);
  });
}

function playAudio(sound) {
  sound.play();
}

function loopAudio(sound) {
  sound.play();
  sound.loop = true;
}

function stopAudio(sound) {
  sound.pause();
}

// Creating the main structure of the page
createEl("div", "body", "main", _, [
  "w-screen",
  "h-screen",
  "bg-rich-blue-300",
  "flex",
  "justify-center",
  "items-center",
  "truncate",
  "relative",
]);
createEl("div", main, "mainFrame", _, [
  "w-11/12",
  "h-[90vh]",
  "border-4",
  "border-white",
  "rounded-3xl",
  "flex",
  "justify-center",
  "items-center",
]);
createEl("div", mainFrame, "mainContainer", _, [
  "flex",
  "justify-center",
  "gap-2",
  "border-4",
  "border-white",
  "rounded-3xl",
  "px-0",
  "py-2",
  "duration-300",
  "absolute",
  "top-10",
  "translate-y-[38vh]",
  "z-50",
  "md:gap-10",
  "md:px-10",
  "md:py-2",
]);

// Creating btnStopwatch container
createEl("button", mainContainer, "btnStopwatch", _, ["container", "mainBtn"]);

createEl(
  "div",
  btnStopwatch,
  "stopwatchContainerSvg",
  timerSvg,
  "containerSvg"
);

createEl("span", btnStopwatch, _, "Stopwatch", "counterDescription");

// Spacer
// Added div instead pr-5 to avoid unsightly borders on focus state
createEl("div", mainContainer, _, _, "spacer");

// Creating btnCounter container
createEl("button", mainContainer, "btnCounter", _, ["container", "mainBtn"]);

createEl("div", btnCounter, "counterContainerSvg", counterSvg, "containerSvg");

createEl("span", btnCounter, _, "Counter", "counterDescription");

// Spacer
// Added div instead pr-5 to avoid unsightly borders on focus state
createEl("div", mainContainer, _, _, "spacer");

// Creating btnCalendar container
createEl("button", mainContainer, "btnCalendar", _, ["container", "mainBtn"]);

createEl(
  "div",
  btnCalendar,
  "calendarContainerSvg",
  calendarSvg,
  "containerSvg"
);

createEl("span", btnCalendar, _, "Calendar", "counterDescription");

// Applying common classes to recurring elements
const spacers = document.querySelectorAll(".spacer");
addClassesToElements(spacers, ["border-r-4", "border-white"]);

const containers = document.querySelectorAll(".container");
addClassesToElements(containers, [
  "group",
  "flex",
  "flex-col",
  "justify-center",
  "items-center",
]);

const containerSvgs = document.querySelectorAll(".containerSvg");
addClassesToElements(containerSvgs, [
  "translate-y-4",
  "duration-300",
  "group-hover:translate-y-0",
]);

// Adding classes for counters' description span
const counterDescriptions = document.querySelectorAll(".counterDescription");
addClassesToElements(counterDescriptions, [
  "text-xl",
  "text-rich-blue-800",
  "opacity-0",
  "duration-300",
  "group-hover:opacity-100",
  "caret-transparent",
]);

const homeBtnContainer = document.getElementById("mainContainer");

const mainBtns = document.querySelectorAll(".mainBtn");
const counterSVGs = document.querySelectorAll(".counterSVG");
const btnMainStopwatch = document.getElementById("btnStopwatch");
const btnMainCounter = document.getElementById("btnCounter");
const btnMainCalendar = document.getElementById("btnCalendar");

btnMainStopwatch.dataset.tab = 1;
btnMainCounter.dataset.tab = 2;
btnMainCalendar.dataset.tab = 3;

homeBtnContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".mainBtn");

  // Guard clause
  if (!clicked) return;

  tabs.forEach((t) => t.classList.add("invisible"));
  counterSVGs.forEach((b) => b.classList.remove("focused"));
  document
    .querySelector(`.counterSVG--${clicked.dataset.tab}`)
    .classList.add("focused");
  document
    .querySelector(`.counter--${clicked.dataset.tab}`)
    .classList.remove("invisible");

  mainContainerEl.classList.remove("translate-y-[38vh]");
  mainContainerEl.classList.add("scale-50", "translate-y-0");
});
