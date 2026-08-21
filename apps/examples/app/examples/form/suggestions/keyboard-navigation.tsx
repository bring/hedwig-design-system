import "@postenbring/hedwig-css";
import { Button, Container, Input, SearchWrapper, Suggestions } from "@postenbring/hedwig-react";
import { useRef, useState } from "react";
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
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionRefs = useRef<Array<HTMLElement | null>>([]);

  const matches = suggestionItems.filter((item) =>
    item.toLowerCase().startsWith(query.toLowerCase()),
  );

  const focusSuggestion = (index: number) => {
    suggestionRefs.current[index]?.focus();
  };

  return (
    <Container variant="slim">
      <form style={{ paddingTop: "var(--hds-spacing-20-24)" }}>
        <Suggestions.Wrapper>
          <SearchWrapper>
            <Input
              ref={inputRef}
              type="search"
              aria-label="Search content"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "ArrowDown" && matches.length > 0) {
                  e.preventDefault();
                  focusSuggestion(0);
                }
              }}
              placeholder="Try searching for `a`"
            />
            <Button>Search</Button>
          </SearchWrapper>
          {query.length > 0 && matches.length > 0 && (
            <Suggestions>
              {matches.map((item, index) => (
                <Suggestions.Item key={item}>
                  <Suggestions.ItemAction
                    ref={(element) => {
                      suggestionRefs.current[index] = element;
                    }}
                    href="/"
                    target="_top"
                    onKeyDown={(e) => {
                      if (e.key === "ArrowDown" && index < matches.length - 1) {
                        e.preventDefault();
                        focusSuggestion(index + 1);
                      }

                      if (e.key === "ArrowUp") {
                        e.preventDefault();
                        if (index === 0) {
                          inputRef.current?.focus();
                        } else {
                          focusSuggestion(index - 1);
                        }
                      }
                    }}
                  >
                    {item}
                  </Suggestions.ItemAction>
                </Suggestions.Item>
              ))}
            </Suggestions>
          )}
        </Suggestions.Wrapper>
      </form>
    </Container>
  );
};

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  description: "Navigate search suggestions with the arrow keys",
  index: 3,
  layout: "centered-fullwidth",
};
