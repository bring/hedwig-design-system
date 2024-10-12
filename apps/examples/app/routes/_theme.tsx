import { Outlet, useLocation } from "react-router";

const basePath = "/hedwig-design-system/examples";
/**
 * Ensures that the path is prefixed with the correct theme.
 *
 * Allows for switching between themes.
 */
export function pathWithTheme(path: string, theme: ReturnType<typeof useTheme>): string {
  if (path.startsWith(basePath)) {
    const result = `${basePath}${pathWithTheme(path.replace(basePath, ""), theme)}`;
    return result;
  }

  const activeTheme = path.startsWith("/bring") ? "bring" : "posten";
  if (activeTheme === theme) {
    return path;
  }

  if (theme === "bring") return `/bring${path.startsWith("/") ? path : `/${path}`}`;
  else return path.replace(/^\/bring/, "");
}

export function useTheme() {
  const location = useLocation();
  return location.pathname.startsWith("/bring/") ? "bring" : "posten";
}

export default function Layout() {
  return <Outlet />;
}
