import "@postenbring/hedwig-css";
import {
  Suggestions,
  Input,
  Container,
  Text,
  Skeleton,
  Button,
  SearchWrapper,
} from "@postenbring/hedwig-react";
import { GlobeIcon } from "../../../assets/icon-examples";

const Example = () => (
  <>
    <Container variant="slim">
      <form style={{ paddingTop: "var(--hds-spacing-20-24)" }}>
        <SearchWrapper>
          <Suggestions.Wrapper>
            <Input type="search" defaultValue="parcel" aria-label="Search content" />
            <Suggestions>
              <li>
                <a href="/" target="_top">
                  <GlobeIcon />
                  <div>
                    <Text
                      style={{ color: "var(--hds-colors-neutral-text-subtle)" }}
                      variant="technical"
                    >
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
                    <Text
                      style={{ color: "var(--hds-colors-neutral-text-subtle)" }}
                      variant="technical"
                    >
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
                    <Text
                      style={{ color: "var(--hds-colors-neutral-text-subtle)" }}
                      variant="technical"
                    >
                      Content
                    </Text>
                    <strong>Parcel</strong> pickup automat
                  </div>
                </a>
              </li>
            </Suggestions>
          </Suggestions.Wrapper>
          <Button>Search</Button>
        </SearchWrapper>
      </form>
    </Container>
    {/* Some content that should be covered by Suggestions */}
    <Container as="main" id="container">
      {/* Some filler content */}
      {Array.from({ length: 15 }).map((_, i) => (
        <Skeleton
          key={i}
          animation={false}
          width={i % 3 === 0 ? "100%" : `${((i % 3) + 0) * 30}%`}
        />
      ))}
    </Container>
  </>
);

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  description: "A list of suggestions for the user while searching",
  index: 0,
  layout: "centered-fullwidth",
};
