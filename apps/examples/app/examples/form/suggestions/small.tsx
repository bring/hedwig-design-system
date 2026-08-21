import "@postenbring/hedwig-css";
import {
  Suggestions,
  Input,
  Container,
  Skeleton,
  SearchWrapper,
  Button,
} from "@postenbring/hedwig-react";
import { MagnifyingGlassIcon } from "../../../assets/icon-examples";
import "./demo.css";

const Example = () => (
  <>
    <Container variant="slim">
      <form style={{ paddingTop: "var(--hds-spacing-20-24)" }}>
        <Suggestions.Wrapper>
          <SearchWrapper>
            <Input type="search" defaultValue="parcel" aria-label="Search content" size="small" />
            <Button size="small" className="suggestions-demo-search-button__desktop">
              Search
            </Button>
            <Button
              size="small"
              className="suggestions-demo-search-button__mobile"
              icon
              aria-label="Search"
            >
              <MagnifyingGlassIcon />
            </Button>
          </SearchWrapper>
          <Suggestions size="small">
            <Suggestions.Item>
              <a href="/" target="_top">
                <p>
                  Pakkeboks (<strong>parcel</strong> locker)
                </p>
              </a>
            </Suggestions.Item>
            <Suggestions.Item>
              <a href="/" target="_top">
                <p>
                  Send Norgespakke™ small from a <strong>parcel</strong> locker
                </p>
              </a>
            </Suggestions.Item>
            <Suggestions.Item>
              <a href="/" target="_top">
                <p>
                  <strong>Parcel</strong> pickup automat
                </p>
              </a>
            </Suggestions.Item>
          </Suggestions>
        </Suggestions.Wrapper>
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
