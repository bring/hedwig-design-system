interface FigmaEmbedProps {
  urlToEmbed: string;
  hideBottomBar?: boolean;
  width?: number | string;
  height: number | string;
}
export function FigmaEmbed({ urlToEmbed, hideBottomBar = false, width, height }: FigmaEmbedProps) {
  return (
    <div
      style={{
        overflow: "hidden",
        height: hideBottomBar ? `calc(${height}px - 48px)` : "auto",
      }}
    >
      <iframe
        title="Figma embed"
        style={{
          width,
          maxWidth: "100%",
          height,
        }}
        src={figmaIframeSrc(urlToEmbed)}
      />
    </div>
  );
}

function figmaIframeSrc(url: string) {
  const iframeUrl = new URL("https://www.figma.com/embed");
  iframeUrl.searchParams.set("embed_host", "example");
  iframeUrl.searchParams.set("embed_origin", window.location.origin);
  iframeUrl.searchParams.set("url", url);
  return iframeUrl.toString();
}
