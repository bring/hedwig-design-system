import hedwigTailwind from "@postenbring/hedwig-tokens/tailwind.config.cjs";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/examples/patterns/tailwind/**/*.tsx"],
  presets: [hedwigTailwind],
};
