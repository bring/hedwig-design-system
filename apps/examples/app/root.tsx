import { useEffect } from "react";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
  useMatches,
  useSearchParams,
} from "@remix-run/react";
import bringFavicon from "./assets/bring-favicon.png?url";
import postenFavicon from "./assets/posten-favicon.png?url";

import styles from "./root.module.css";

export function Layout({ children }: { children: React.ReactNode }) {
  const [search] = useSearchParams();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          type="image/png"
          href={search.get("theme") === "bring" ? bringFavicon : postenFavicon}
        />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

const layoutClassNames = {
  centered: styles.layoutCentered,
  "centered-vertical-padding": styles.layoutCenteredVerticalPadding,
  "centered-fullwidth": styles.layoutCenteredFullwidth,
  "padding-only": styles.layoutPaddingOnly,
  none: "",
} as const;

const breakpointIndicatorValues = {
  true: true,
  top: "top",
  bottom: "bottom",
} as const;

export interface ViewOptions {
  theme?: "posten" | "bring";
}
export interface ExampleViewOptions {
  layout?: keyof typeof layoutClassNames;

  /**
   * Display a visual indicator of the current breakpoint in example
   * @default false
   */
  breakpointIndicator?: boolean | "top" | "bottom";
}

function parseViewOptions(search: string, isExample: boolean): ViewOptions & ExampleViewOptions {
  const { theme, layout, breakpointIndicator } = Object.fromEntries(
    new URLSearchParams(search),
  ) as ViewOptions & ExampleViewOptions;

  return {
    theme: theme === "bring" ? theme : "posten",
    ...(isExample && {
      layout: layout! in layoutClassNames ? layout : "centered",
      breakpointIndicator:
        breakpointIndicatorValues[breakpointIndicator as keyof typeof breakpointIndicatorValues] ??
        false,
    }),
  };
}

export default function App() {
  const location = useLocation();
  const matches = useMatches();

  const isExample = matches.some((match) => match.id.startsWith("examples/"));
  const viewOptions = parseViewOptions(location.search, isExample);

  useEffect(() => {
    if (isExample) {
      window.parent.postMessage("example-loaded", "*");
    }
  }, [isExample]);

  return (
    <div
      className={[
        viewOptions?.theme === "bring" ? "hds-theme-bring" : "",
        isExample && viewOptions?.layout ? layoutClassNames[viewOptions.layout] : "",
        isExample && viewOptions?.breakpointIndicator ? styles.breakpointIndicator : "",
        isExample && viewOptions?.breakpointIndicator === "bottom"
          ? styles.breakpointIndicatorBottom
          : "",
      ].join(" ")}
    >
      {isExample ? (
        <div>
          <Outlet />
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  );
}

export function HydrateFallback() {
  return null;
}
