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
  if (eClass) {
    element.classList.add(eClass);
  }
  if (eId) {
    element.setAttribute("id", eId);
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
createEl("div", main, "frame", _, [
  "w-[90vw]",
  "h-[90vh]",
  "border-4",
  "border-white",
  "rounded-3xl",
  "flex",
  "justify-center",
  "items-center",
]);
createEl("div", frame, "container", _, [
  "flex",
  "justify-center",
  "gap-10",
  "border-4",
  "border-white",
  "rounded-3xl",
  "px-10",
  "py-2",
]);
createEl("div", container, "counterTypeContnainer", _, [
  "flex",
  "justify-center",
  "gap-10",
  "border-4",
  "border-white",
  "rounded-3xl",
  "px-10",
  "py-2",
]);
createEl("button", counterTypeContnainer, "timerContainer", _, [
  "group",
  "flex",
  "flex-col",
  "justify-center",
  "items-center",
]);

createEl("div", timerContainer, "timerContainerSvg", timerSvg, _);
