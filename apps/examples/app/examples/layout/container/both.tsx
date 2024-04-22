import { Container, VStack } from "@postenbring/hedwig-react";

function Example() {
  return (
    <div style={{ background: "var(--hds-colors-signature)" }}>
      <Container style={{ background: "var(--hds-colors-light)" }}>
        <VStack
          justify="center"
          align="center"
          style={{ height: "50vh", background: "var(--hds-colors-lighter)" }}
        >
          <h2>Default</h2>
        </VStack>
      </Container>
      <Container variant="slim" style={{ background: "var(--hds-colors-light)" }}>
        <VStack
          justify="center"
          align="center"
          style={{ height: "50vh", background: "var(--hds-colors-lighter)" }}
        >
          <h2>Slim</h2>
        </VStack>
      </Container>
    </div>
  );
}

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  breakpointIndicator: "top",
  layout: "none",
  index: 2,
};
