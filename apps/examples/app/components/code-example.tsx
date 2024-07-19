import { useEffect, useMemo, useRef, useState } from "react";
import { type ThemeRegistrationRaw, getHighlighterCore } from "shiki/core";
import langsTsx from "shiki/langs/tsx.mjs";
import getWasm from "shiki/wasm";
import vesper from "shiki/themes/vesper.mjs";
import poimandres from "shiki/themes/poimandres.mjs";

import "@postenbring/hedwig-css";

import styles from "./code-example.module.css";

import { Example } from "../examples";
import { Button, StyledHtml, type ButtonProps } from "@postenbring/hedwig-react";
import { openExampleInCodeSandbox } from "./codesandbox";
import { useSearchParams } from "@remix-run/react";
import { useTheme } from "./use-theme";

const codeThemes: Record<"posten" | "bring", ThemeRegistrationRaw> = {
  posten: vesper,
  bring: poimandres,
} as const;

const highlighter = await getHighlighterCore({
  themes: [codeThemes.posten, codeThemes.bring],
  langs: [langsTsx],
  loadWasm: getWasm,
});

/**
 * A single code example
 */
export function CodeExample({
  activeExample,
  allExamples,
  showCodeByDefault = false,
  hideDescription = false,
  hideActions = false,
  shouldPreload = false,
}: {
  activeExample: Example;
  allExamples?: Example[];
  showCodeByDefault?: boolean;
  hideDescription?: boolean;
  hideActions?: boolean;
  shouldPreload?: boolean;
}) {
  if (!allExamples) allExamples = [activeExample];
  const [search] = useSearchParams();
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [showCode, setShowCode] = useState(showCodeByDefault);

  function iframeUrl(example: Example) {
    const iframeViewOptions = new URLSearchParams();
    if (example.config?.layout) {
      iframeViewOptions.set("layout", example.config.layout);
    }
    if (search.get("theme")) {
      iframeViewOptions.set("theme", search.get("theme")!);
    }
    if (example.config?.breakpointIndicator) {
      iframeViewOptions.set("breakpointIndicator", String(example.config?.breakpointIndicator));
    }
    return `${example.urlPath}?${iframeViewOptions.toString()}`;
  }

  return (
    <div className={styles.codeExample}>
      {/* Description */}
      {!hideDescription && activeExample.config?.description && (
        <StyledHtml
          size="small"
          dangerouslySetInnerHTML={{ __html: activeExample.config.description }}
        />
      )}

      {/* Iframed demo */}
      <div>
        {allExamples.map(function Iframe(example) {
          const isActive = example.exampleName === activeExample.exampleName;
          const src = iframeUrl(example);

          // Set height based on content after it has been loaded
          const [hasLoaded, setHasLoaded] = useState(false);
          const [hasResized, setHasResized] = useState(false);
          const [height, setHeight] = useState(300);

          // Register loaded
          useEffect(() => {
            function receiveMessage(event: MessageEvent) {
              if (event.data !== "example-loaded" || height !== 300) return;

              const sourceWindow = event.source as Window;
              const sourcePathAndSearch =
                sourceWindow?.location.pathname + (sourceWindow?.location.search || "?");
              if (sourcePathAndSearch === src) {
                setHasLoaded(true);
              }
            }
            window.addEventListener("message", receiveMessage, false);
            return () => {
              window.removeEventListener("message", receiveMessage);
            };
            // eslint-disable-next-line react-hooks/exhaustive-deps -- I know better
          }, [src]);

          // Resize iframe after it's been fully loaded (react rendered)
          useEffect(() => {
            if (!hasResized) resize();
            function resize() {
              if (!isActive || !hasLoaded) return;
              const scrollHeight = iframeRef.current?.contentWindow?.document.body.scrollHeight;
              if (scrollHeight) {
                setHasResized(true);
                setHeight(Math.min(Math.max(scrollHeight, 300), 900));
              }
            }

            // Content of examples might change on window resizing
            window.addEventListener("resize", resize);
            return () => {
              window.removeEventListener("resize", resize);
            };
          }, [isActive, hasLoaded, hasResized]);

          // Bug in Firefox causes flickering when switching between "lazy" and "eager" loading
          // Chrome and safari does not have this problem
          // Solution is to only flip from "lazy" to "eager" once
          const [loading, setLoading] = useState<"eager" | "lazy">(
            shouldPreload ? "eager" : "lazy",
          );
          useEffect(() => {
            if (shouldPreload && loading === "lazy") {
              setLoading("eager");
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps -- I know better
          }, [shouldPreload]);

          return (
            <iframe
              key={example.exampleName}
              title={`Example ${activeExample.componentName}/${activeExample.exampleName}`}
              src={src}
              ref={isActive ? iframeRef : null}
              loading={loading}
              style={{
                display: isActive ? "block" : "none",
              }}
              height={height}
            />
          );
        })}

        {/* Actions row */}
        {!hideActions && (
          <div>
            <Button
              variant="secondary-outline"
              onClick={() => {
                if (iframeRef.current) {
                  iframeRef.current.style.width = "360px";
                }
              }}
              title="Mobile"
              size="small"
              icon
            >
              📱
            </Button>
            <Button
              variant="secondary-outline"
              onClick={() => {
                if (iframeRef.current) {
                  iframeRef.current.style.width = "";
                }
              }}
              title="Desktop"
              size="small"
              icon
            >
              🖥️
            </Button>
            <div style={{ flexGrow: 1 }} />

            <Button
              variant="secondary-outline"
              size="small"
              onClick={() => setShowCode((prev) => !prev)}
            >
              {showCode ? "Hide code" : "Show code"}
            </Button>

            <Button
              variant="secondary"
              title="Open in CodeSandbox"
              size="small"
              onClick={() => openExampleInCodeSandbox(activeExample)}
              icon
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 24H24V0H0V2.45455H21.5455V21.5455H2.45455V0H0Z" />
              </svg>
            </Button>
            <Button variant="secondary" size="small" icon asChild>
              <a
                href={iframeUrl(activeExample)}
                target="_blank"
                rel="noreferrer"
                title="Open standalone"
              >
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  style={{ height: 24, width: 24 }}
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"
                  />
                </svg>
              </a>
            </Button>
          </div>
        )}
      </div>

      {/* Code */}
      {showCode && (
        <Code
          code={activeExample.exampleSourceNeat}
          id={activeExample.componentName + activeExample.exampleName}
        />
      )}
    </div>
  );
}

function CopyButton({
  code,
  ...rest
}: ButtonProps & {
  code: string;
}) {
  const [copied, setCopied] = useState(false);
  return (
    <Button
      variant="secondary"
      onClick={async () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setCopied(false);
      }}
      size="small"
      {...rest}
    >
      {copied ? "Copied" : "Copy"}
    </Button>
  );
}

function Code({ code, id }: { code: string; id: string }) {
  const { activeTheme } = useTheme();

  const formattedCode = useMemo(() => {
    return highlighter.codeToHtml(code, {
      lang: "tsx",
      theme: activeTheme === "bring" ? codeThemes.bring : codeThemes.posten,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps -- only run once
  }, [activeTheme, id]);

  return (
    <div>
      {/* TODO: This copy button can definitely be styled better */}
      <CopyButton code={code} style={{ position: "absolute", bottom: 12, right: 12 }} />
      <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: formattedCode }} />
    </div>
  );
}
