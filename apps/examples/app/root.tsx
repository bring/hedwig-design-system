import { Links, Meta, Outlet, Scripts, ScrollRestoration, useLocation } from "react-router";
import bringFavicon from "./assets/bring-favicon.png?url";
import postenFavicon from "./assets/posten-favicon.png?url";
import { useClientOnly } from "./components/client-only";

export function parseViewOptions(search: string, overrides: Partial<Record<string, string>> = {}) {
  const { theme } = Object.fromEntries(new URLSearchParams(search));

  return {
    theme: theme === "bring" ? theme : "posten",
    ...overrides,
  } as const;
}
export type ViewOptions = ReturnType<typeof parseViewOptions>;

export function useViewOptions(overrides: Partial<ViewOptions> = {}) {
  const location = useLocation();
  return useClientOnly(
    () => parseViewOptions(location.search, overrides),
    () => parseViewOptions("", overrides),
  );
}
export function useViewOptionsSearch(overrides: Partial<ViewOptions> = {}) {
  const viewOptions = useViewOptions(overrides);

  // Optimization: Empty string when all options are default
  // Makes the URL cleaner and easier to read
  if (viewOptions.theme === "posten") {
    return "";
  }

  return new URLSearchParams(viewOptions).toString();
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
