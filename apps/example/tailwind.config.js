import hedwigTailwind from "@postenbring/hedwig-tokens/tailwind.config.cjs";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/tailwind*/**/*.{js,ts,jsx,tsx}"],
  presets: [hedwigTailwind],
};
