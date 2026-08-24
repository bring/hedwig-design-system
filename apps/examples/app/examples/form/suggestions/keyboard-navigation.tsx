import "@postenbring/hedwig-css";
import {
  Button,
  Container,
  Input,
  SearchWrapper,
  Skeleton,
  Suggestions,
} from "@postenbring/hedwig-react";
import { XmarkIcon } from "../../../assets/icon-examples";
import { useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import "./demo.css";

const suggestionItems = [
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
];

const Example = () => {
  const [showSuggestions, setShowSuggestions] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionRefs = useRef<Array<HTMLElement | null>>([]);

  const focusSuggestion = (index: number) => {
    suggestionRefs.current[index]?.focus();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>, index?: number) => {
    if (event.key === "ArrowDown") {
      const nextIndex = index === undefined ? 0 : index + 1;
      if (nextIndex < suggestionItems.length) {
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
            {showSuggestions ? (
              <>
                <SearchWrapper>
                  <Input
                    ref={inputRef}
                    type="search"
                    aria-label="Search content"
                    defaultValue="al"
                    onKeyDown={handleKeyDown}
                    placeholder="Focus here, then press ArrowDown"
                  />
                  <Button>Search</Button>
                  <Button
                    icon
                    variant="tertiary"
                    aria-label="Close suggestions"
                    onClick={() => setShowSuggestions(false)}
                  >
                    <XmarkIcon />
                  </Button>
                </SearchWrapper>
                <Suggestions>
                  {suggestionItems.map((item, index) => (
                    <Suggestions.Item key={item}>
                      <Suggestions.ItemAction
                        ref={(element) => {
                          suggestionRefs.current[index] = element;
                        }}
                        href="/"
                        target="_top"
                        onKeyDown={(event) => handleKeyDown(event, index)}
                      >
                        {item}
                      </Suggestions.ItemAction>
                    </Suggestions.Item>
                  ))}
                </Suggestions>
              </>
            ) : (
              <Button type="button" onClick={() => setShowSuggestions(true)}>
                Open search
              </Button>
            )}
          </Suggestions.Wrapper>
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
};

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  description: "Navigate search suggestions with the arrow keys",
  index: 3,
  layout: "centered-fullwidth",
};
