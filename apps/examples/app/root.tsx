import { Links, Meta, Outlet, Scripts, ScrollRestoration, useLocation } from "@remix-run/react";
import bringFavicon from "./assets/bring-favicon.png?url";
import postenFavicon from "./assets/posten-favicon.png?url";

export function parseViewOptions(search: string) {
  const { theme } = Object.fromEntries(new URLSearchParams(search));

  return {
    theme: theme === "bring" ? theme : "posten",
  } as const;
}
export type ViewOptions = ReturnType<typeof parseViewOptions>;

export function useViewOptions() {
  const location = useLocation();
  return parseViewOptions(location.search);
}

export function Layout({ children }: { children: React.ReactNode }) {
  const viewOptions = useViewOptions();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          type="image/png"
          href={viewOptions.theme === "bring" ? bringFavicon : postenFavicon}
        />
        <Meta />
        <Links />
      </head>
      <body className={viewOptions?.theme === "bring" ? "hds-theme-bring" : ""}>
        {children}
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
