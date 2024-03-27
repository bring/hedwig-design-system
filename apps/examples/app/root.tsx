import { Links, Meta, Outlet, Scripts, ScrollRestoration, useLocation } from "@remix-run/react";
import styles from "./root.module.css";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
  "centered-fullwidth": styles.layoutCenteredFullwidth,
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

  // The rendered examples are served two levels deep
  // E.g. /button/fullwidth-on-mobile
  const isExample = Boolean(location.pathname.match(`^/[\\w-]+/\\w+`));
  const viewOptions = parseViewOptions(location.search, isExample);

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
