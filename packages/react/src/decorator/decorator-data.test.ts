import { describe, expect, it } from "vitest";
import {
  applyEnvToProdUrl,
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

  it("defaults env to prod", () => {
    expect(resolveFrontPageUrl({ brand: "posten" })).toBe(
      resolveFrontPageUrl({ brand: "posten", env: "prod" }),
    );
  });

  it("resolves the qa origin", () => {
    expect(resolveFrontPageUrl({ brand: "posten", env: "qa" })).toBe("https://www.qa.posten.no");
    expect(resolveFrontPageUrl({ brand: "bring", tld: "se", lang: "sv", env: "qa" })).toBe(
      "https://www.qa.bring.se",
    );
  });

  it("resolves the test origin", () => {
    expect(resolveFrontPageUrl({ brand: "posten", env: "test" })).toBe("https://test.posten.no");
    expect(resolveFrontPageUrl({ brand: "bring", tld: "dk", lang: "da", env: "test" })).toBe(
      "https://test.bring.dk",
    );
  });

  it("an explicit frontPageUrl bypasses env entirely", () => {
    expect(
      resolveFrontPageUrl({ brand: "posten", env: "qa", frontPageUrl: "https://custom.example" }),
    ).toBe("https://custom.example");
  });
});

describe("applyEnvToProdUrl", () => {
  it.each([
    ["https://www.posten.no", "qa", "https://www.qa.posten.no"],
    ["https://www.posten.no", "test", "https://test.posten.no"],
    ["https://www.bring.com", "qa", "https://www.qa.bring.com"],
    ["https://www.bring.com", "test", "https://test.bring.com"],
    ["https://www.posten.no", "prod", "https://www.posten.no"],
  ] as const)("%s + %s -> %s", (prodUrl, env, expected) => {
    expect(applyEnvToProdUrl(prodUrl, env)).toBe(expected);
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
