import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import bringFavicon from "./assets/bring-favicon.png?url";
import postenFavicon from "./assets/posten-favicon.png?url";
import { useTheme } from "./routes/_theme";

export function Layout({ children }: { children: React.ReactNode }) {
  const theme = useTheme();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          id="favicon-link"
          rel="icon"
          type="image/png"
          href={theme === "bring" ? bringFavicon : postenFavicon}
        />
        <Meta />
        <Links />
      </head>
      <body className={theme === "bring" ? "hds-theme-bring" : ""}>
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
