import { HelpText } from "@postenbring/hedwig-react";

function Example() {
  return (
    <p>
      En annen avgjørende faktor for avgifter er om nettbutikken er registrert i{" "}
      <HelpText helpText={`VOEC er en forkortelse for "VAT on E-commerce" (mva. på e-handel).`}>
        VOEC
      </HelpText>
    </p>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 0,
};
