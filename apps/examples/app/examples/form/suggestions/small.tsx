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
import { useRef } from "react";
import type { KeyboardEvent } from "react";
import "./demo.css";

const Example = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionRefs = useRef<Array<HTMLElement | null>>([]);

  const focusSuggestion = (index: number) => {
    suggestionRefs.current[index]?.focus();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>, index?: number) => {
    if (event.key === "ArrowDown") {
      const nextIndex = index === undefined ? 0 : index + 1;
      if (nextIndex < 3) {
        event.preventDefault();
        focusSuggestion(nextIndex);
      }
    }

    if (event.key === "ArrowUp" && index !== undefined) {
      event.preventDefault();
      if (index === 0) {
        inputRef.current?.focus();
      } else {
        focusSuggestion(index - 1);
      }
    }
  };

  return (
    <>
      <Container variant="slim">
        <form style={{ paddingTop: "var(--hds-spacing-20-24)" }}>
          <Suggestions.Wrapper>
            <SearchWrapper>
              <Input
                ref={inputRef}
                type="search"
                defaultValue="parcel"
                aria-label="Search content"
                size="small"
                onKeyDown={handleKeyDown}
              />
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
                <Suggestions.ItemAction
                  ref={(element) => {
                    suggestionRefs.current[0] = element;
                  }}
                  href="/"
                  target="_top"
                  onKeyDown={(event) => handleKeyDown(event, 0)}
                >
                  <p>
                    Pakkeboks (<strong>parcel</strong> locker)
                  </p>
                </Suggestions.ItemAction>
              </Suggestions.Item>
              <Suggestions.Item>
                <Suggestions.ItemAction
                  asChild
                  ref={(element) => {
                    suggestionRefs.current[1] = element;
                  }}
                  onKeyDown={(event) => handleKeyDown(event, 1)}
                >
                  <button type="button">
                    <p>
                      Send Norgespakke™ small from a <strong>parcel</strong> locker
                    </p>
                  </button>
                </Suggestions.ItemAction>
              </Suggestions.Item>
              <Suggestions.Item>
                <Suggestions.ItemAction
                  ref={(element) => {
                    suggestionRefs.current[2] = element;
                  }}
                  href="/"
                  target="_top"
                  onKeyDown={(event) => handleKeyDown(event, 2)}
                >
                  <p>
                    <strong>Parcel</strong> pickup automat
                  </p>
                </Suggestions.ItemAction>
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
};

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  description: "A list of suggestions for the user while searching",
  index: 1,
  layout: "centered-fullwidth",
};
