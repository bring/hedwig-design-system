import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";

import styles from "./styles.module.css";

const layoutClassNames = {
  centered: styles.layoutCentered,
  "centered-vertical-padding": styles.layoutCenteredVerticalPadding,
  "centered-fullwidth": styles.layoutCenteredFullwidth,
  "padding-only": styles.layoutPaddingOnly,
  none: "",
} as const;
const layoutKeys = Object.keys(layoutClassNames).reduce(
  (acc, key) => ({ ...acc, [key]: key }),
  {},
) as Record<string, keyof typeof layoutClassNames | undefined>;

const breakpointIndicatorClassNames = {
  top: styles.breakpointIndicator,
  bottom: styles.breakpointIndicator + " " + styles.breakpointIndicatorBottom,
} as const;
const breakpointIndicatorKeys = Object.keys(breakpointIndicatorClassNames).reduce(
  (acc, key) => ({ ...acc, [key]: key }),
  {},
) as Record<string, keyof typeof breakpointIndicatorClassNames | undefined>;

export interface ExampleViewOptions {
  /**
   * The layout to use for the example
   * @default "centered"
   */
  layout?: keyof typeof layoutClassNames;

  /**
   * Display a visual indicator of the current breakpoint in example
   * @default undefined
   */
  breakpointIndicator?: keyof typeof breakpointIndicatorClassNames;
}

function parseExampleViewOptions(search: string): ExampleViewOptions {
  const { layout, breakpointIndicator } = Object.fromEntries(new URLSearchParams(search));
  return {
    layout: layoutKeys[layout] ?? "centered",
    breakpointIndicator: breakpointIndicatorKeys[breakpointIndicator] ?? undefined,
  };
}

function exampleViewOptionsToClassNames(exampleViewOptions: ExampleViewOptions) {
  return [
    exampleViewOptions.layout && layoutClassNames[exampleViewOptions.layout],
    exampleViewOptions.breakpointIndicator &&
      breakpointIndicatorClassNames[exampleViewOptions.breakpointIndicator],
  ]
    .filter((x) => x)
    .join(" ");
}

// Sets the correct classname according to the view options on load
// This allows the page to be statically rendered, and patched on load on the client
// Avoiding any flash-of-unstyled-content (FOUC)
const setClassNameOnLoadScript = `
function setClassNameOnLoad() {
  const searchParams = new URL(window.location).searchParams;

  const layoutClassNames = ${JSON.stringify(layoutClassNames)};
  const breakpointIndicatorClassNames = ${JSON.stringify(breakpointIndicatorClassNames)};

  const className = [
    layoutClassNames[searchParams.get("layout") ?? "centered"],
    breakpointIndicatorClassNames[searchParams.get("breakpointIndicator") ?? undefined],
  ].filter((x) => x).join(" ");

  const iframeContainer = document.getElementById("iframe-container");
  iframeContainer.setAttribute("class", className);
}
setClassNameOnLoad();
`;

export default function App() {
  const location = useLocation();
  useEffect(() => {
    window.parent.postMessage("example-loaded", "*");
  }, []);

  const className = exampleViewOptionsToClassNames(parseExampleViewOptions(location.search));

  return (
    <div id="iframe-container" className={className}>
      <script dangerouslySetInnerHTML={{ __html: setClassNameOnLoadScript }} />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
