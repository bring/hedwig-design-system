import { useState } from "react";
import { Input } from "../form/input";
import { Button } from "../button";
import { HStack } from "../layout";
import { Link } from "../link";
import { useSearchSuggestions } from "./use-search-suggestions";
import type { DecoratorHeaderData, DecoratorSiteIdentifier } from "./decorator-data";

interface SearchProps {
  identifier: DecoratorSiteIdentifier;
  header: DecoratorHeaderData;
}

export function Search({ identifier, header }: SearchProps) {
  const [term, setTerm] = useState("");
  const hits = useSearchSuggestions(identifier, term);

  function goToSearchPage() {
    const url = new URL(header.searchUrl);
    url.searchParams.set("q", term);
    window.location.href = url.toString();
  }

  return (
    <div className="hds-decorator__search">
      <HStack gap="4" align="end">
        <Input
          label=""
          aria-label={header.searchAriaLabel}
          role="search"
          placeholder={header.searchPlaceholder}
          value={term}
          onChange={(event) => {
            setTerm(event.target.value);
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              goToSearchPage();
            }
          }}
        />
        <Button variant="primary" onClick={goToSearchPage}>
          {header.searchButtonLabel}
        </Button>
      </HStack>

      {hits.length > 0 ? (
        <ul className="hds-decorator__search-suggestions">
          {hits.map((hit) => (
            <li key={hit.absoluteUrl}>
              <Link variant="no-underline" href={hit.absoluteUrl}>
                {hit.heading}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
