import { useEffect, useState } from "react";
import {
  assertDecoratorSearchSuggestions,
  buildSearchSuggestionsUrl,
  type DecoratorSearchHit,
  type DecoratorSiteIdentifier,
} from "./decorator-data";

const MIN_QUERY_LENGTH = 3;
const DEBOUNCE_MS = 150;

/**
 * Debounced search suggestions for the given query, matching kp-decorator's
 * behavior: no request below 3 characters, 150ms debounce, latest request wins.
 */
export function useSearchSuggestions(
  identifier: DecoratorSiteIdentifier,
  query: string,
): DecoratorSearchHit[] {
  const [hits, setHits] = useState<DecoratorSearchHit[]>([]);
  const { brand, tld, lang, frontPageUrl } = identifier;

  useEffect(() => {
    if (query.length < MIN_QUERY_LENGTH) {
      setHits([]);
      return;
    }

    let cancelled = false;
    const timeoutId = setTimeout(() => {
      const url = buildSearchSuggestionsUrl({ brand, tld, lang, frontPageUrl }, query);
      fetch(url)
        .then(async (response) => {
          if (!response.ok) {
            throw new Error(`Decorator: failed to fetch ${url} (${response.status})`);
          }
          const json: unknown = await response.json();
          assertDecoratorSearchSuggestions(json);
          if (!cancelled) {
            setHits(json.hits);
          }
        })
        .catch(() => {
          if (!cancelled) {
            setHits([]);
          }
        });
    }, DEBOUNCE_MS);

    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
  }, [brand, tld, lang, frontPageUrl, query]);

  return hits;
}
