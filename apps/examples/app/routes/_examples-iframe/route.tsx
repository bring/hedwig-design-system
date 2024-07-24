import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { parseViewOptions as rootParseViewOptions } from "../../root";

import styles from "./styles.module.css";
import { useClientOnly } from "../../components/client-only";

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
function useIframeViewOptions() {
  const location = useLocation();
  return useClientOnly(
    () => parseViewOptions(location.search),
    () => parseViewOptions(""),
  );
}

export default function App() {
  const iframeViewOptions = useIframeViewOptions();

  useEffect(() => {
    window.parent.postMessage("example-loaded", "*");
  }, []);

  return (
    <div
      className={[
        iframeViewOptions?.theme === "bring" ? "hds-theme-bring" : "",
        iframeViewOptions?.layout ? layoutClassNames[iframeViewOptions.layout] : "",
        iframeViewOptions?.breakpointIndicator ? styles.breakpointIndicator : "",
        iframeViewOptions?.breakpointIndicator === "bottom" ? styles.breakpointIndicatorBottom : "",
      ].join(" ")}
    >
      <div
        style={{
          scale: iframeViewOptions.scale ? String(iframeViewOptions.scale) : undefined,
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}
