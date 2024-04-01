import { useMemo, useRef, useState } from "react";
import { getHighlighter } from "shiki";
import "@postenbring/hedwig-css";

import styles from "./code-example.module.css";

import { Example } from "../examples";
import { SecondaryButton, StyledHtml, type ButtonProps } from "@postenbring/hedwig-react";
import { openExampleInCodeSandbox } from "./codesandbox";
import { useSearchParams } from "@remix-run/react";

const codeThemes: Record<
  "posten" | "bring",
  Parameters<typeof getHighlighter>["0"]["themes"][number]
> = {
  posten: "vesper",
  bring: "poimandres",
} as const;

const highlighter = await getHighlighter({
  themes: [codeThemes.posten, codeThemes.bring],
  langs: ["tsx"],
});

/**
 * A single code example
 */
export function CodeExample({
  example,
  defaultShowCode = true,
}: {
  example: Example;
  defaultShowCode?: boolean;
}) {
  const [search] = useSearchParams();
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [showCode, setShowCode] = useState(defaultShowCode);

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

  const iframeUrl = example.urlPath + "?" + iframeViewOptions.toString();

  return (
    <div className={styles.codeExample}>
      {/* Description */}
      {example.config?.description && (
        <StyledHtml size="small" dangerouslySetInnerHTML={{ __html: example.config.description }} />
      )}

      {/* Iframed demo */}
      <div>
        <iframe
          loading="lazy"
          ref={iframeRef}
          title={`Example ${example.componentName}/${example.exampleName}`}
          src={iframeUrl}
          // TODO: Dynamic height between 300-900 based on content
        />

        {/* Actions row */}
        <div>
          <SecondaryButton
            onClick={() => {
              if (iframeRef.current) {
                iframeRef.current.style.width = "360px";
              }
            }}
            title="Mobile"
            fill="outline"
            size="small"
            icon={"📱"}
          />
          <SecondaryButton
            onClick={() => {
              if (iframeRef.current) {
                iframeRef.current.style.width = "";
              }
            }}
            title="Desktop"
            fill="outline"
            size="small"
            icon={"🖥️"}
          />
          <div style={{ flexGrow: 1 }} />

          <SecondaryButton fill="outline" size="small" onClick={() => setShowCode((prev) => !prev)}>
            {showCode ? "Hide code" : "Show code"}
          </SecondaryButton>

          <SecondaryButton
            title="Open in CodeSandbox"
            size="small"
            onClick={() => openExampleInCodeSandbox(example)}
            icon={
              <svg aria-hidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 24H24V0H0V2.45455H21.5455V21.5455H2.45455V0H0Z" />
              </svg>
            }
          />
          <SecondaryButton
            title="Open standalone"
            size="small"
            as="a"
            href={iframeUrl}
            target="_blank"
            icon={
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
            }
          />
        </div>
      </div>

      {/* Code */}
      {showCode && (
        <Code code={example.exampleSourceNeat} id={example.componentName + example.exampleName} />
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
    <SecondaryButton
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
    </SecondaryButton>
  );
}

function Code({ code, id }: { code: string; id: string }) {
  const [search] = useSearchParams();
  const activeTheme = search.get("theme") === "bring" ? "bring" : "posten";

  const formattedCode = useMemo(() => {
    return highlighter.codeToHtml(code, {
      lang: "tsx",

      // @ts-expect-error -- It's ok, checked above
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
