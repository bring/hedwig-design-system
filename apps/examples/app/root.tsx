import { Links, Meta, Outlet, Scripts, ScrollRestoration, useLocation } from "@remix-run/react";
import styles from "./root.module.css";

const layoutClassNames = {
  centered: styles.layoutCentered,
  "centered-fullwidth": styles.layoutCenteredFullwidth,
  none: "",
};

export interface ViewOptions {
  theme?: "posten" | "bring";
}
export interface ExampleViewOptions {
  layout?: keyof typeof layoutClassNames;
}

function parseViewOptions(search: string, isExample: boolean): ViewOptions & ExampleViewOptions {
  const { theme, layout } = Object.fromEntries(new URLSearchParams(search)) as ViewOptions &
    ExampleViewOptions;

  return {
    theme: ["posten", "bring"].includes(theme!) ? theme : "posten",
    ...(isExample && {
      layout: layout! in layoutClassNames ? layout : "centered",
    }),
  };
}

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  // The rendered examples are served two levels deep
  // E.g. /button/fullwidth-on-mobile
  const isExample = Boolean(location.pathname.match(`^/[\\w-]+/\\w+`));
  const viewOptions = parseViewOptions(location.search, isExample);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body
        className={[
          viewOptions?.theme === "bring" ? "hds-theme-bring" : "",
          isExample && viewOptions?.layout ? layoutClassNames[viewOptions.layout] : "",
        ].join(" ")}
      >
        {isExample ? <main>{children}</main> : children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function HydrateFallback() {
  return null;
}
