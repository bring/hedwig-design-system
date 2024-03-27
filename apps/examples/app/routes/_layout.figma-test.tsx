import { StyledHtml, Text } from "@postenbring/hedwig-react";
import styles from "./figma-test.module.css";
import { useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";

export async function clientLoader() {
  const urlsToPreview = [
    "https://www.figma.com/file/64ieYInJRps5diLI1qgJJk/Hedwig?type=design&node-id=10039-1373&mode=design&t=OBK6t1fre7znhNTd-4",
    "https://www.figma.com/file/64ieYInJRps5diLI1qgJJk/Hedwig?type=design&node-id=10041-3046&mode=design&t=OBK6t1fre7znhNTd-4",
    "https://www.figma.com/file/64ieYInJRps5diLI1qgJJk/Hedwig?type=design&node-id=10041-468&mode=design&t=OBK6t1fre7znhNTd-4",
  ];

  const figmaImages = await getFigmaPreviewImages(urlsToPreview);

  return { figmaImages };
}

export default function Component() {
  const data = useLoaderData<typeof clientLoader>();

  return (
    <>
      <div className="hds-mt-48-64" />

      <StyledHtml style={{ maxWidth: "60ch" }}>
        <h1>Button</h1>

        <Text as="h2" variant="h3">
          Buttons are a key part of Posten and Bring’s call-to-action navigation. The red and green
          colors guide customers to the core call-to-action items.
        </Text>

        <p>
          Primary buttons should be used for all primary call-to-actions and main interactions, e.g.
          confirmations, in our services. In case of multiple click options use the outlined version
          for the other option(s).
        </p>
      </StyledHtml>

      <div className="hds-mt-16-20" />

      <FigmaPreviews figmaImages={data.figmaImages} />

      <div className="hds-mt-16-20" />

      <FigmaEmbed
        urlToEmbed="https://www.figma.com/file/64ieYInJRps5diLI1qgJJk/Hedwig?type=design&node-id=10039%3A1364&mode=design&t=OBK6t1fre7znhNTd-1"
        height={1200}
        width="80%"
        hideBottomBar
      />
    </>
  );
}

interface FigmaEmbedProps {
  urlToEmbed: string;
  hideBottomBar?: boolean;
  width?: number | string;
  height: number | string;
}
export function FigmaEmbed({ urlToEmbed, hideBottomBar = false, width, height }: FigmaEmbedProps) {
  function figmaIframeSrc(url: string) {
    const iframeUrl = new URL("https://www.figma.com/embed");
    iframeUrl.searchParams.set("embed_host", "example");
    iframeUrl.searchParams.set("embed_origin", window.location.origin);
    iframeUrl.searchParams.set("url", url);

    return iframeUrl.toString();
  }

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

export type FigmaPreviewsProps =
  | {
      figmaImages: FigmaUrlWithImage[];
      urls?: undefined;
    }
  | {
      urls: string[];
      figmaImages?: undefined;
    };

export function FigmaPreviews({ urls, figmaImages }: FigmaPreviewsProps) {
  const [fetchedFigmaImages, setFetchedFigmaImages] = useState<
    FigmaUrlWithImage[] | "loading" | undefined
  >(undefined);

  useEffect(() => {
    if (urls && fetchedFigmaImages !== "loading") {
      // eslint-disable-next-line no-inner-declarations
      async function fetchData(urls: string[]) {
        setFetchedFigmaImages(await getFigmaPreviewImages(urls));
      }
      fetchData(urls);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- I know better
  }, []);

  figmaImages =
    figmaImages ?? (fetchedFigmaImages === "loading" || !fetchedFigmaImages)
      ? undefined
      : fetchedFigmaImages;
  if (!figmaImages) {
    return null;
  }

  return (
    <div className={styles.figmaPreviews}>
      {figmaImages.map((figmaImage) => (
        <FigmaPreview key={figmaImage.nodeId} figmaImage={figmaImage} height="fit-content" />
      ))}
    </div>
  );
}

interface FigmaPreviewProps {
  figmaImage: FigmaUrlWithImage;
  height: number | string;
}
export function FigmaPreview({ figmaImage, height }: FigmaPreviewProps) {
  return (
    <a
      title="Open in Figma"
      href={figmaImage.url}
      target="_blank"
      rel="noreferrer noopener"
      className={styles.figmaButton}
      style={{
        height,
      }}
    >
      <Text>
        <img
          height="40px"
          src={`data:image/svg+xml,<svg width="288" height="432" viewBox="0 0 288 432" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="95.0226" height="142.534" fill="black" fill-opacity="0" transform="translate(1.46603 2.19946) scale(3)"/><path d="M144 216C144 176.641 175.907 144.733 215.267 144.733V144.733C254.626 144.733 286.534 176.641 286.534 216V216C286.534 255.36 254.626 287.267 215.267 287.267V287.267C175.907 287.267 144 255.36 144 216V216Z" fill="%231ABCFE"/><path d="M1.46603 358.534C1.46603 319.175 33.3733 287.267 72.733 287.267H144V358.534C144 397.894 112.093 429.801 72.733 429.801V429.801C33.3733 429.801 1.46603 397.894 1.46603 358.534V358.534Z" fill="%230ACF83"/><path d="M144 2.19946V144.733H215.267C254.627 144.733 286.534 112.826 286.534 73.4664V73.4664C286.534 34.1068 254.627 2.19946 215.267 2.19946L144 2.19946Z" fill="%23FF7262"/><path d="M1.46603 73.4664C1.46603 112.826 33.3733 144.733 72.733 144.733L144 144.733L144 2.19941L72.733 2.19941C33.3733 2.19941 1.46603 34.1067 1.46603 73.4664V73.4664Z" fill="%23F24E1E"/><path d="M1.46603 216C1.46603 255.36 33.3733 287.267 72.733 287.267H144L144 144.733L72.733 144.733C33.3733 144.733 1.46603 176.641 1.46603 216V216Z" fill="%23A259FF"/></svg>`}
          alt=""
        />
      </Text>

      <img src={figmaImage.imageUrl} alt="" />
    </a>
  );
}

// Adjusted from: https://www.figma.com/developers/embed
const FIGMA_URL_REGEX = /^\/([\w-]+)\/([0-9a-zA-Z]{22,128})(?:\/.*)?$/;
function parseFigmaUrl(urlString: string) {
  let url;
  try {
    url = new URL(urlString);
  } catch (e) {
    return;
  }

  const match = url.pathname.match(FIGMA_URL_REGEX);
  if (!match) {
    return;
  }

  const [, fileType, fileKey] = match;
  const nodeId = url.searchParams.get("node-id");

  return {
    url: url.toString(),
    fileType,
    fileKey,
    nodeId,
  };
}

async function getFigmaPreviewImages(urls: string[]) {
  const parsedFigmaUrls = urls.map((url) => parseFigmaUrl(url)).filter(Boolean) as NonNullable<
    ReturnType<typeof parseFigmaUrl>
  >[];

  const fileKey = parsedFigmaUrls.at(0)!.fileKey;
  const nodeIds = parsedFigmaUrls.map((figmaUrl) => figmaUrl!.nodeId).join(",");

  const url = new URL(`https://api.figma.com/v1/images/${fileKey}`);
  url.searchParams.set("ids", nodeIds);
  url.searchParams.set("scale", "1");
  url.searchParams.set("format", "svg");

  // Get figma token from url, just for now while testing
  const shortLivedFigmaToken = new URLSearchParams(window.location.search).get("figma_token") ?? "";

  const response = await fetch(url, {
    headers: {
      "X-FIGMA-TOKEN": shortLivedFigmaToken,
    },
  });
  const json = await response.json();

  const figmaUrlsWithImages = parsedFigmaUrls.map((figmaUrl) => {
    const figmaUrlWithImage = figmaUrl as typeof figmaUrl & { imageUrl: string };
    figmaUrlWithImage.imageUrl = json.images[(figmaUrl.nodeId ?? "").replace("-", ":")] ?? "";

    return figmaUrlWithImage;
  });

  return figmaUrlsWithImages;
}
type FigmaUrlWithImage = Awaited<ReturnType<typeof getFigmaPreviewImages>>[number];
