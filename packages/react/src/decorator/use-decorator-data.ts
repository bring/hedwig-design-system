import { useEffect, useState } from "react";
import {
  assertDecoratorHeaderFooterData,
  buildHeaderFooterDataUrl,
  type DecoratorHeaderFooterData,
  type DecoratorSiteIdentifier,
} from "./decorator-data";

export type UseDecoratorDataResult =
  | { status: "loading"; data: undefined; error: undefined }
  | { status: "error"; data: undefined; error: Error }
  | { status: "success"; data: DecoratorHeaderFooterData; error: undefined };

/**
 * Fetches header/footer content for the given site identifier directly from
 * Enonic (the same source kp-decorator's SSR server reads from). The endpoints
 * are served with `access-control-allow-origin: *`, so this works cross-origin
 * without a proxy.
 */
export function useDecoratorData(identifier: DecoratorSiteIdentifier): UseDecoratorDataResult {
  const [result, setResult] = useState<UseDecoratorDataResult>({
    status: "loading",
    data: undefined,
    error: undefined,
  });

  const { brand, tld, lang, frontPageUrl } = identifier;

  useEffect(() => {
    let cancelled = false;
    setResult({ status: "loading", data: undefined, error: undefined });

    const url = buildHeaderFooterDataUrl({ brand, tld, lang, frontPageUrl });

    fetch(url)
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`Decorator: failed to fetch ${url} (${response.status})`);
        }
        const json: unknown = await response.json();
        assertDecoratorHeaderFooterData(json);
        if (!cancelled) {
          setResult({ status: "success", data: json, error: undefined });
        }
      })
      .catch((error: unknown) => {
        if (!cancelled) {
          setResult({
            status: "error",
            data: undefined,
            error: error instanceof Error ? error : new Error(String(error)),
          });
        }
      });

    return () => {
      cancelled = true;
    };
  }, [brand, tld, lang, frontPageUrl]);

  return result;
}
