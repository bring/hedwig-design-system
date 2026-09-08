import { describe, expect, it } from "vitest";
import {
  assertDecoratorHeaderFooterData,
  assertDecoratorSearchSuggestions,
  buildHeaderFooterDataUrl,
  buildSearchSuggestionsUrl,
  resolveFrontPageUrl,
} from "./decorator-data";
import {
  bringHeaderFooterData,
  postenHeaderFooterData,
  searchSuggestionsFixture,
} from "./test-fixtures";

describe("resolveFrontPageUrl", () => {
  it("resolves the known prod URL for posten/no/no", () => {
    expect(resolveFrontPageUrl({ brand: "posten" })).toBe("https://www.posten.no");
  });

  it("resolves the known prod URL for bring/se/sv", () => {
    expect(resolveFrontPageUrl({ brand: "bring", tld: "se", lang: "sv" })).toBe(
      "https://www.bring.se",
    );
  });

  it("prefers an explicit frontPageUrl override", () => {
    expect(resolveFrontPageUrl({ brand: "posten", frontPageUrl: "https://qa.posten.no" })).toBe(
      "https://qa.posten.no",
    );
  });

  it("throws for an unknown brand/tld/lang combination with no override", () => {
    expect(() => resolveFrontPageUrl({ brand: "bring", tld: "pl", lang: "pl" })).toThrow(
      /no known frontPageUrl/,
    );
  });
});

describe("buildHeaderFooterDataUrl", () => {
  it("builds the posten URL without a tld param", () => {
    const url = new URL(buildHeaderFooterDataUrl({ brand: "posten", lang: "no" }));
    expect(url.origin + url.pathname).toBe(
      "https://www.posten.no/_/service/no.posten.website/header-footer-data",
    );
    expect(url.searchParams.get("lang")).toBe("no");
    expect(url.searchParams.has("tld")).toBe(false);
  });

  it("builds the bring URL with a tld param", () => {
    const url = new URL(buildHeaderFooterDataUrl({ brand: "bring", tld: "no", lang: "no" }));
    expect(url.origin + url.pathname).toBe(
      "https://www.bring.no/_/service/no.posten.bring/header-footer-data",
    );
    expect(url.searchParams.get("tld")).toBe("no");
  });
});

describe("buildSearchSuggestionsUrl", () => {
  it("includes the query and pagination params", () => {
    const url = new URL(buildSearchSuggestionsUrl({ brand: "posten" }, "sporing"));
    expect(url.pathname).toBe("/_/service/no.posten.website/search");
    expect(url.searchParams.get("q")).toBe("sporing");
    expect(url.searchParams.get("count")).toBe("7");
  });
});

describe("assertDecoratorHeaderFooterData", () => {
  it("accepts real posten and bring payload shapes", () => {
    expect(() => {
      assertDecoratorHeaderFooterData(postenHeaderFooterData);
    }).not.toThrow();
    expect(() => {
      assertDecoratorHeaderFooterData(bringHeaderFooterData);
    }).not.toThrow();
  });

  it("rejects a response missing required fields", () => {
    const malformed = { header: { mainSections: [] } };
    expect(() => {
      assertDecoratorHeaderFooterData(malformed);
    }).toThrow(/malformed/);
  });

  it("rejects null", () => {
    expect(() => {
      assertDecoratorHeaderFooterData(null);
    }).toThrow(/malformed/);
  });
});

describe("assertDecoratorSearchSuggestions", () => {
  it("accepts a real search suggestions payload shape", () => {
    expect(() => {
      assertDecoratorSearchSuggestions(searchSuggestionsFixture);
    }).not.toThrow();
  });

  it("rejects a response with no hits array", () => {
    expect(() => {
      assertDecoratorSearchSuggestions({ total: 1 });
    }).toThrow(/malformed/);
  });
});
