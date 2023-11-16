/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // eslint-disable-next-line no-undef
  presets: [require("@postenbring/hedwig-tokens/tailwind.config.cjs")],
};
