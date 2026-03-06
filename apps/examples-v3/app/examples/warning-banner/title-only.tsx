import "@postenbring/hedwig-css";
import { WarningBanner } from "@postenbring/hedwig-react";

function Example() {
  return (
    <WarningBanner
      title={"Vi opplever nå store forsinkelser på grunn av vanskelige kjøreforhold på østlandet."}
    />
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  layout: "none",
};
