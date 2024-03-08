"use strict";
// ------------------------------------------------------------------
const timerSvg = `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="#fff"
    class="w-16 aspect-square duration-300 group-hover:stroke-rich-blue-800"
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
    class="w-16 aspect-square duration-300 group-hover:stroke-rich-blue-800"
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
  class="w-16 aspect-square group-hover:stroke-rich-blue-800"
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

// Reduces the data to 2 digits
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

createEl("div", "body", "main", _, [
  "w-screen",
  "h-screen",
  "bg-rich-blue-300",
  "flex",
  "justify-center",
  "items-center",
]);
createEl("div", main, "mainFrame", _, [
  "w-[90vw]",
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
  "gap-10",
  "border-4",
  "border-white",
  "rounded-3xl",
  "px-10",
  "py-2",
]);

// Stopwatch
createEl("button", mainContainer, "stopwatchContainer", _, "container");
// document
//   .getElementById("stopwatchContainer")
//   .classList.add("group", "flex", "flex-col", "justify-center", "items-center");

createEl(
  "div",
  stopwatchContainer,
  "stopwatchContainerSvg",
  timerSvg,
  "containerSvg"
);

createEl("span", stopwatchContainer, _, "Stopwatch", "counterDescription");

// Spacer
// Added div instead pr-5 to avoid unsightly borders on focus state
createEl("div", mainContainer, _, _, "spacer");

// Counter
createEl("button", mainContainer, "counterContainer", _, "container");

createEl(
  "div",
  counterContainer,
  "counterContainerSvg",
  counterSvg,
  "containerSvg"
);

createEl("span", counterContainer, _, "Stopwatch", "counterDescription");

// Spacer
// Added div instead pr-5 to avoid unsightly borders on focus state
createEl("div", mainContainer, _, _, "spacer");

// Calendar
createEl("button", mainContainer, "calendarContainer", _, "container");

createEl(
  "div",
  calendarContainer,
  "calendarContainerSvg",
  calendarSvg,
  "containerSvg"
);

createEl("span", calendarContainer, _, "Calendar", "counterDescription");

// Adding classes to style spacers
const spacers = document.querySelectorAll(".spacer");
spacers.forEach(function (el) {
  el.classList.add("border-r-4", "border-white");
});

const containers = document.querySelectorAll(".container");
containers.forEach(function (el) {
  el.classList.add(
    "group",
    "flex",
    "flex-col",
    "justify-center",
    "items-center"
  );
});

const containerSvgs = document.querySelectorAll(".containerSvg");
containerSvgs.forEach(function (el) {
  el.classList.add(
    "translate-y-4",
    "duration-300",
    "group-hover:translate-y-0"
  );
});

// Adding classes for counters' description span
const counterDescriptions = document.querySelectorAll(".counterDescription");
counterDescriptions.forEach(function (el) {
  el.classList.add(
    "text-xl",
    "text-rich-blue-800",
    "opacity-0",
    "duration-300",
    "group-hover:opacity-100",
    "caret-transparent"
  );
});
