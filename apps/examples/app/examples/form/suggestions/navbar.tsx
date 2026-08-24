import "@postenbring/hedwig-css";
import {
  Suggestions,
  Input,
  Navbar,
  Button,
  SearchWrapper,
  Container,
  Skeleton,
} from "@postenbring/hedwig-react";
import { XmarkIcon, MagnifyingGlassIcon } from "../../../assets/icon-examples";
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

const ShowSearch = ({ onClose }: { onClose: () => void }) => {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionRefs = useRef<Array<HTMLElement | null>>([]);

  const matches = suggestionItems.filter((item) =>
    item.toLowerCase().startsWith(query.toLowerCase()),
  );

  const focusSuggestion = (index: number) => {
    suggestionRefs.current[index]?.focus();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>, index?: number) => {
    if (event.key === "Escape") {
      event.preventDefault();
      onClose();
      return;
    }

    if (event.key === "ArrowDown") {
      const nextIndex = index === undefined ? 0 : index + 1;
      if (nextIndex < matches.length) {
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
    <Suggestions.Wrapper>
      <SearchWrapper>
        <Input
          ref={inputRef}
          type="search"
          aria-label="Search content"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Try searching for `a`"
        />
        <Button className="suggestions-demo-search-button__desktop">Search</Button>
        <Button className="suggestions-demo-search-button__mobile" icon aria-label="Search">
          <MagnifyingGlassIcon />
        </Button>
        <Button
          variant="tertiary"
          icon
          aria-label="Close search"
          onClick={() => {
            onClose();
            setQuery("");
          }}
        >
          <XmarkIcon />
        </Button>
      </SearchWrapper>
      {query.length > 0 && matches.length > 0 && (
        /* Overriding the height default for Suggestions*/
        <Suggestions style={{ maxHeight: "min(50vh, 300px)" }}>
          {matches.map((item, index) => (
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
      )}
    </Suggestions.Wrapper>
  );
};

const Example = () => {
  const [searching, setSearching] = useState(true);

  return (
    <>
      <Navbar>
        <Navbar.Logo asChild>
          <a href="https://www.posten.no/" title="Til forsiden" />
        </Navbar.Logo>
        <Navbar.Navigation>
          {searching && <ShowSearch onClose={() => setSearching(false)} />}
          {!searching && (
            <Navbar.ButtonItem title="Button" onClick={() => setSearching(true)}>
              Search
              <MagnifyingGlassIcon />
            </Navbar.ButtonItem>
          )}
          <Navbar.ExpandableMenu>
            <Navbar.ExpandableMenuTrigger whenClosedText="Menu" whenOpenText="Close" />
            <Navbar.ExpandableMenuContent>Empty menu</Navbar.ExpandableMenuContent>
          </Navbar.ExpandableMenu>
        </Navbar.Navigation>
      </Navbar>
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
  description: "A list of suggestions for the user while searching",
  index: 2,
  layout: "centered-fullwidth",
};
