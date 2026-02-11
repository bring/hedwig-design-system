/* eslint-disable @typescript-eslint/no-unused-expressions -- It's ok */
import "@postenbring/hedwig-css";

import "./tailwind.css";
//      👆
`
import hedwigTailwind from "@postenbring/hedwig-tokens/tailwind.config.cjs";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/examples/patterns/tailwind/**/*.tsx"],
  presets: [hedwigTailwind],
};
`;

function Example() {
  return (
    <div className="flex gap-12 large:gap-16">
      <div className="transition-all rounded size-48 hover:scale-125 bg-signature hover:bg-darker" />
      <div className="transition-all rounded-8 size-48 hover:scale-125 bg-signature hover:bg-darker" />
      <div className="transition-all rounded-24 size-48 hover:scale-125 bg-signature hover:bg-darker" />
    </div>
  );
}

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  index: 0,
  description: "Use as a supplement to css package",
  layout: "centered",
};
