import "@postenbring/hedwig-css";
import { Suggestions, Input, Container } from "@postenbring/hedwig-react";
import { GlobeIcon } from "../../../assets/icon-examples";

const Example = () => (
  <Container variant="slim">
    <form style={{ padding: "var(--hds-spacing-20-24) 0" }}>
      <Input type="search" defaultValue="al" aria-label="Search countries" />
      <Suggestions>
        <li>
          <a href="/" target="_top">
            Albania
          </a>
        </li>
        <li>
          <a href="/" target="_top">
            Algeria
          </a>
        </li>
        <li>
          <a href="/" target="_top">
            Nepal
          </a>
        </li>
      </Suggestions>
    </form>
    <form style={{ padding: "var(--hds-spacing-20-24) 0" }}>
      <Input type="search" defaultValue="al" aria-label="Search countries" />
      <Suggestions>
        <li>
          <a href="/" target="_top">
            <GlobeIcon />
            <div>
              Albania<p style={{ color: "var(--hds-colors-neutral-text-subtle)" }}>AL</p>
            </div>
          </a>
        </li>
        <li>
          <a href="/" target="_top">
            <GlobeIcon />
            <div>
              Algeria
              <p style={{ color: "var(--hds-colors-neutral-text-subtle)" }}>DZ</p>
            </div>
          </a>
        </li>
        <li>
          <a href="/" target="_top">
            <GlobeIcon />
            <div>
              Nepal
              <p style={{ color: "var(--hds-colors-neutral-text-subtle)" }}>NP</p>
            </div>
          </a>
        </li>
      </Suggestions>
    </form>
  </Container>
);

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  description:
    "A list of suggestions for the user while searching. <code>aria-controls</code> is recommended to use in a real implementation of this component.",
  index: 0,
  layout: "centered-fullwidth",
};
