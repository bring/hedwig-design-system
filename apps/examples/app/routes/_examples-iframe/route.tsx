import { useEffect } from "react";
import { Outlet, useLocation } from "@remix-run/react";
import { parseViewOptions as rootParseViewOptions } from "../../root";

import styles from "./styles.module.css";

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

export interface ExampleViewOptions {
  /**
   * Scale the example. Used when displaying many examples in a grid.
   */
  scale?: number;

  layout?: keyof typeof layoutClassNames;

  /**
   * Display a visual indicator of the current breakpoint in example
   * @default false
   */
  breakpointIndicator?: boolean | "top" | "bottom";
}

function parseViewOptions(
  search: string,
): ExampleViewOptions & ReturnType<typeof rootParseViewOptions> {
  const { scale, layout, breakpointIndicator } = Object.fromEntries(
    new URLSearchParams(search),
  ) as ExampleViewOptions;

  return {
    ...rootParseViewOptions(search),

    scale: scale ? Number(scale) : undefined,
    layout: layout! in layoutClassNames ? layout : "centered",
    breakpointIndicator:
      breakpointIndicatorValues[breakpointIndicator as keyof typeof breakpointIndicatorValues] ??
      false,
  } as const;
}
function useViewOptions() {
  const location = useLocation();
  return parseViewOptions(location.search);
}

export default function App() {
  const viewOptions = useViewOptions();

  useEffect(() => {
    window.parent.postMessage("example-loaded", "*");
  }, []);

  return (
    <div
      className={[
        viewOptions?.theme === "bring" ? "hds-theme-bring" : "",
        viewOptions?.layout ? layoutClassNames[viewOptions.layout] : "",
        viewOptions?.breakpointIndicator ? styles.breakpointIndicator : "",
        viewOptions?.breakpointIndicator === "bottom" ? styles.breakpointIndicatorBottom : "",
      ].join(" ")}
    >
      <div
        style={{
          scale: viewOptions.scale ? String(viewOptions.scale) : undefined,
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}
