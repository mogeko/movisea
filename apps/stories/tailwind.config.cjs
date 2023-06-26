/** @type {import('tailwindcss').Config} */
module.exports = {
  ...require("movisea-web/tailwind.config.cjs"),
  content: ["../web/{app,components}/**/*.{ts,tsx}", "./**/*.{ts,tsx}"],
};
