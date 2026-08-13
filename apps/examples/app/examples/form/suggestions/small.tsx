import "@postenbring/hedwig-css";
import {
  Suggestions,
  Input,
  Container,
  Skeleton,
  Link,
  SearchWrapper,
  Button,
} from "@postenbring/hedwig-react";

const Example = () => (
  <>
    <Container variant="slim">
      <form style={{ paddingTop: "var(--hds-spacing-20-24)" }}>
        <SearchWrapper>
          <Suggestions.Wrapper>
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
          </Suggestions.Wrapper>
          <Button size="small">Search</Button>
        </SearchWrapper>
      </form>
    </Container>
    {/* Some content that should be covered by Suggestions */}
    <Container as="main" id="containers">
      {/* Some filler content */}
      {Array.from({ length: 15 }).map((_, i) => (
        <Skeleton
          key={i}
          animation={false}
          width={i % 3 === 0 ? "100%" : `${((i % 3) + 0) * 30}%`}
        />
      ))}
      <Link href="#some-link">
        This link should not be targetable while the expandable menu is open
      </Link>
    </Container>
  </>
);

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  description: "A list of suggestions for the user while searching",
  index: 1,
  layout: "centered-fullwidth",
};
