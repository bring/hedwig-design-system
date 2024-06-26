import "@postenbring/hedwig-css";
import { HelpText } from "@postenbring/hedwig-react";

function Example() {
  return (
    <div style={{ padding: "160px 0", maxWidth: 400 }}>
      <h2 className="hds-mb-24-32">Leveringsdetaljer</h2>
      <p>
        Estimert levering{" "}
        <HelpText
          helpText={`Dette er kun et estimat. Det kan hende at pakken kommer litt senere enn forventet, men vi holder deg oppdatert og gir mer nøyaktig informasjon etterhvert som pakken nærmer seg.`}
          className="hds-text-body-title"
        >
          fredag 7. juni, mellom klokken 08.00 og 16.00
        </HelpText>
      </p>
    </div>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 3,
};
