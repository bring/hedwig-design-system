import { HelpText } from "@postenbring/hedwig-react";

function Example() {
  return (
    <p>
      En annen avgjørende faktor for avgifter er om nettbutikken er registrert i{" "}
      <HelpText word="VOEC">
        VOEC er en forkortelse for &quot;VAT on E-commerce&quot; (mva. på e-handel).
      </HelpText>
    </p>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 0,
};
