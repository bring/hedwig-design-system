import "@postenbring/hedwig-css";
import { Suggestions, Input, Container } from "@postenbring/hedwig-react";
import { GlobeIcon } from "../../../assets/icon-examples";

const Example = () => (
  <Container variant="slim">
    <form style={{ padding: "var(--hds-spacing-20-24) 0" }}>
      <Input type="search" defaultValue="al" size="small" aria-label="Search countries" />
      <Suggestions size="small">
        <li>
          <a href="/?country=albania">
            <GlobeIcon />
            <div>
              Albania<p style={{ color: "var(--hds-colors-neutral-text-subtle)" }}>AL</p>
            </div>
          </a>
        </li>
        <li>
          <a href="/?country=algeria">
            <GlobeIcon />
            <div>
              Algeria
              <p style={{ color: "var(--hds-colors-neutral-text-subtle)" }}>DZ</p>
            </div>
          </a>
        </li>
        <li>
          <a href="/?country=nepal">
            <GlobeIcon />
            <div>
              Nepal
              <p style={{ color: "var(--hds-colors-neutral-text-subtle)" }}>NP</p>
            </div>
          </a>
        </li>
      </Suggestions>
    </form>
    <form style={{ padding: "var(--hds-spacing-20-24) 0" }}>
      <Input type="search" defaultValue="al" aria-label="Search countries" size="small" />
      <Suggestions size="small">
        <li>
          <a href="/?country=albania">Albania</a>
        </li>
        <li>
          <a href="/?country=algeria">Algeria</a>
        </li>
        <li>
          <a href="/?country=nepal">Nepal</a>
        </li>
      </Suggestions>
    </form>
  </Container>
);

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  description:
    "<code>aria-controls</code> is recommended to use in a real implementation of this component.",
  index: 1,
  layout: "centered-fullwidth",
};
