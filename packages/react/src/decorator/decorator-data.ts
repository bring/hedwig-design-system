export type DecoratorBrand = "posten" | "bring";
export type DecoratorLang = "no" | "en" | "da" | "sv" | "fi" | "nl" | "pl";
export type DecoratorTld = "no" | "com" | "dk" | "se" | "fi" | "nl" | "pl" | "be";

/**
 * Identifies which site's header/footer content to fetch from Enonic.
 *
 * `frontPageUrl` is resolved from {@link DEFAULT_FRONT_PAGE_URLS} for the given
 * `brand`/`tld`/`lang` when omitted. Pass it explicitly to target a non-prod
 * origin (test/QA) until env-based resolution is added.
 */
export interface DecoratorSiteIdentifier {
  brand: DecoratorBrand;
  tld?: DecoratorTld;
  lang?: DecoratorLang;
  frontPageUrl?: string;
}

export interface DecoratorLinkItem {
  title: string;
  relativePath: string;
  absolutePath: string;
}

export interface DecoratorIconItem extends DecoratorLinkItem {
  serviceIcon: string;
}

interface DecoratorLinkSection {
  heading: string;
  items: DecoratorLinkItem[];
}

export interface DecoratorHeaderData {
  loginLinks: DecoratorLinkItem[];
  iconSection?: DecoratorIconItem[];
  mainSections: DecoratorLinkSection[];
  /** Page to send the visitor to on search submit, e.g. "https://www.posten.no/sok" */
  searchUrl: string;
  searchButtonLabel: string;
  searchPlaceholder: string;
  searchAriaLabel: string;
}

export interface DecoratorSearchHit {
  absoluteUrl: string;
  heading: string;
  preface: string;
}

export interface DecoratorSearchSuggestions {
  total: number;
  hits: DecoratorSearchHit[];
}

export interface DecoratorFooterData {
  mainSections: DecoratorLinkSection[];
  buttons: DecoratorLinkItem[];
  copyRightText: string;
  bottomLinks: DecoratorLinkItem[];
}

export interface DecoratorHeaderFooterData {
  header: DecoratorHeaderData;
  footer: DecoratorFooterData;
}

/**
 * Enonic service name per brand. `bring` additionally requires a `tld` query param
 * since it serves multiple country sites.
 */
const ENONIC_SERVICE_NAME: Record<DecoratorBrand, string> = {
  posten: "no.posten.website",
  bring: "no.posten.bring",
};

/**
 * Known production front page URLs, mirroring kp-decorator's site-config.prod.ts.
 * Used as the default origin to fetch header/footer data from when `frontPageUrl`
 * isn't provided explicitly.
 */
const DEFAULT_FRONT_PAGE_URLS: Partial<
  Record<DecoratorBrand, Partial<Record<DecoratorTld, Partial<Record<DecoratorLang, string>>>>>
> = {
  posten: {
    no: { no: "https://www.posten.no", en: "https://www.posten.no/en" },
  },
  bring: {
    no: { no: "https://www.bring.no", en: "https://www.bring.no/en" },
    se: { sv: "https://www.bring.se", en: "https://www.bring.se/en" },
    dk: { da: "https://www.bring.dk", en: "https://www.bring.dk/en" },
    com: { en: "https://www.bring.com" },
  },
};

export function resolveFrontPageUrl({
  brand,
  tld = "no",
  lang = "no",
  frontPageUrl,
}: DecoratorSiteIdentifier): string {
  const resolved = frontPageUrl ?? DEFAULT_FRONT_PAGE_URLS[brand]?.[tld]?.[lang];
  if (!resolved) {
    throw new Error(
      `Decorator: no known frontPageUrl for brand="${brand}" tld="${tld}" lang="${lang}". Pass frontPageUrl explicitly.`,
    );
  }
  return resolved;
}

function buildEnonicServiceUrl(identifier: DecoratorSiteIdentifier, servicePath: string): URL {
  const { brand } = identifier;
  const frontPageUrl = resolveFrontPageUrl(identifier);
  const serviceName = ENONIC_SERVICE_NAME[brand];
  return new URL(`${frontPageUrl}/_/service/${serviceName}/${servicePath}`);
}

export function buildHeaderFooterDataUrl(identifier: DecoratorSiteIdentifier): string {
  const { brand, tld = "no", lang = "no" } = identifier;
  const url = buildEnonicServiceUrl(identifier, "header-footer-data");
  url.searchParams.set("lang", lang);
  if (brand === "bring") {
    url.searchParams.set("tld", tld);
  }
  return url.toString();
}

/**
 * Suggestions shown while typing in the header search field. Debounced and only
 * queried once the search term is at least 3 characters, matching kp-decorator.
 */
export function buildSearchSuggestionsUrl(
  identifier: DecoratorSiteIdentifier,
  query: string,
): string {
  const url = buildEnonicServiceUrl(identifier, "search");
  url.searchParams.set("q", query);
  url.searchParams.set("type", "all");
  url.searchParams.set("start", "0");
  url.searchParams.set("count", "7");
  return url.toString();
}

function isLinkItem(value: unknown): value is DecoratorLinkItem {
  return (
    !!value &&
    typeof value === "object" &&
    typeof (value as DecoratorLinkItem).title === "string" &&
    typeof (value as DecoratorLinkItem).absolutePath === "string"
  );
}

/**
 * Minimal shape check so a malformed Enonic response fails fast with a clear
 * error instead of surfacing as a confusing render crash.
 */
export function assertDecoratorHeaderFooterData(
  value: unknown,
): asserts value is DecoratorHeaderFooterData {
  const data = value as Partial<DecoratorHeaderFooterData> | null;
  const header = data?.header;
  const footer = data?.footer;

  if (
    !header ||
    !footer ||
    !Array.isArray(header.mainSections) ||
    !Array.isArray(header.loginLinks) ||
    !Array.isArray(footer.mainSections) ||
    !Array.isArray(footer.buttons) ||
    !Array.isArray(footer.bottomLinks) ||
    typeof footer.copyRightText !== "string" ||
    typeof header.searchUrl !== "string" ||
    typeof header.searchButtonLabel !== "string" ||
    typeof header.searchPlaceholder !== "string" ||
    !header.mainSections.every(
      (section) => Array.isArray(section.items) && section.items.every(isLinkItem),
    )
  ) {
    throw new Error("Decorator: received malformed header/footer data from Enonic.");
  }
}

/**
 * Minimal shape check for the search suggestions endpoint response.
 */
export function assertDecoratorSearchSuggestions(
  value: unknown,
): asserts value is DecoratorSearchSuggestions {
  const data = value as Partial<DecoratorSearchSuggestions> | null;
  if (
    !data ||
    !Array.isArray(data.hits) ||
    !data.hits.every(
      (hit) => typeof hit.absoluteUrl === "string" && typeof hit.heading === "string",
    )
  ) {
    throw new Error("Decorator: received malformed search suggestions from Enonic.");
  }
}
