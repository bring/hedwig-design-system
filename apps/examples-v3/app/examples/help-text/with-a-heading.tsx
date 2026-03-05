import "@postenbring/hedwig-css";
import { HelpText } from "@postenbring/hedwig-react";

function Example() {
  return (
    <>
      <h3 className="hds-text-h3-title">
        <HelpText
          helpText="For security and GDPR compliance, we display only the city and postal code. Log in to view the full address safely."
          side="bottom"
        >
          Delivery address
        </HelpText>
      </h3>
      <p className="hds-mt-4-8">0158 Oslo</p>
    </>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  description: "Put the help text inside the heading to avoid layout issues with the icon.",
  index: 1,
};
