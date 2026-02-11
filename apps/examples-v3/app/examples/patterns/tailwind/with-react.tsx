import "@postenbring/hedwig-css";
import "./tailwind.css";
import { Button } from "@postenbring/hedwig-react";

function Example() {
  return (
    <div className="flex flex-col gap-12 large:gap-16">
      <div className="flex gap-12 large:gap-16">
        <div className="transition-all rounded size-48 hover:scale-125 bg-signature hover:bg-darker" />
        <div className="transition-all rounded size-48 hover:scale-125 bg-signature hover:bg-darker" />
        <div className="transition-all rounded size-48 hover:scale-125 bg-signature hover:bg-darker" />
      </div>
      <div>
        <Button>Primary Button</Button>
      </div>
    </div>
  );
}

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  index: 1,
  description: "Use the react components, and style everything else with tailwind",
  layout: "centered",
};
