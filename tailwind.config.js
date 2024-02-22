/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        "rich-blue-950": "#010B14",
        "rich-blue-900": "#011627",
        "rich-blue-800": "#03203A",
        "rich-blue-700": "#074588",
        "rich-blue-600": "#0A63C2",
        "rich-blue-500": "#1681F3",
        "rich-blue-400": "#3D96F5",
        "rich-blue-300": "#64ABF7",
        "rich-blue-200": "#8BC0F9",
        "rich-blue-100": "#C5E0FC",
        "rich-blue-50": "#ECF5FE",
      },

      boxShadow: {
        "btn-rounded": "0px 12px 10px 0px rgba(3, 32, 58, 0.17)",
      },
    },
  },
  plugins: [],
};
