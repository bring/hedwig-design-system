import { useState } from "react";
import { Input } from "../form/input";
import { Button } from "../button";
import { HStack } from "../layout";
import { Link } from "../link";
import { useSearchSuggestions } from "./use-search-suggestions";
import { resolveFrontPageUrl } from "./decorator-data";
import type { DecoratorHeaderData, DecoratorLang, DecoratorSiteIdentifier } from "./decorator-data";
import { getTranslate } from "./translations";

interface SearchProps {
  identifier: DecoratorSiteIdentifier;
  header: DecoratorHeaderData;
  lang: DecoratorLang;
}

export function Search({ identifier, header, lang }: SearchProps) {
  const [term, setTerm] = useState("");
  const hits = useSearchSuggestions(identifier, term);
  const translate = getTranslate(lang);

  // kp-decorator doesn't display the Enonic payload's own searchPlaceholder —
  // it composes "Søk på <domain>" instead, so we match that for parity.
  const domain = resolveFrontPageUrl(identifier).replace(/^https?:\/\/(?:www\.)?/, "");
  const placeholder = `${translate("search.placeholder")} ${domain}`;

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
          type="search"
          placeholder={placeholder}
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
