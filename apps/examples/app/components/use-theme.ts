import { useSearchParams } from "@remix-run/react";

export function useTheme() {
  const [search] = useSearchParams();
  const activeTheme = search.get("theme") === "bring" ? "bring" : "posten";
  const nextTheme = activeTheme === "bring" ? "posten" : "bring";

  return { activeTheme, nextTheme } as const;
}
