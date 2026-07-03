import "@postenbring/hedwig-css";
import { Suggestions, Input, Container, Text } from "@postenbring/hedwig-react";
import { GlobeIcon } from "../../../assets/icon-examples";

const Example = () => (
  <Container variant="slim">
    <form style={{ padding: "var(--hds-spacing-20-24) 0" }}>
      <Input type="search" defaultValue="parcel" aria-label="Search content" size="small" />
      <Suggestions size="small">
        <li>
          <a href="/" target="_top">
            <p>
              Pakkeboks (<strong>parcel</strong> locker)
            </p>
          </a>
        </li>
        <li>
          <a href="/" target="_top">
            <p>
              Send Norgespakke™ small from a <strong>parcel</strong> locker
            </p>
          </a>
        </li>
        <li>
          <a href="/" target="_top">
            <p>
              <strong>Parcel</strong> pickup automat
            </p>
          </a>
        </li>
      </Suggestions>
    </form>
    <form style={{ padding: "var(--hds-spacing-20-24) 0" }}>
      <Input type="search" defaultValue="parcel" size="small" aria-label="Search content" />
      <Suggestions size="small">
        <li>
          <a href="/" target="_top">
            <GlobeIcon />
            <div>
              <Text style={{ color: "var(--hds-colors-neutral-text-subtle)" }} variant="technical">
                Content
              </Text>
              Pakkeboks (<strong>parcel</strong> locker)
            </div>
          </a>
        </li>
        <li>
          <a href="/" target="_top">
            <GlobeIcon />
            <div>
              <Text style={{ color: "var(--hds-colors-neutral-text-subtle)" }} variant="technical">
                Content
              </Text>
              Send Norgespakke™ small from a <strong>parcel</strong> locker
            </div>
          </a>
        </li>
        <li>
          <a href="/" target="_top">
            <GlobeIcon />
            <div>
              <Text style={{ color: "var(--hds-colors-neutral-text-subtle)" }} variant="technical">
                Content
              </Text>
              <strong>Parcel</strong> pickup automat
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
  index: 1,
  layout: "centered-fullwidth",
};
