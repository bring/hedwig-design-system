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

export async function getFigmaPreviewImages(urls: string[]) {
  // Get figma token from url. If running on the server or pre-built (SSG) fetch this from a secret instead
  const shortLivedFigmaToken = new URLSearchParams(window.location.search).get("figma_token") ?? "";
  if (!shortLivedFigmaToken) {
    // Use a quick proxy api endpoint to fetch the images
    const url = new URL("https://hedwig-figma-proxy.pages.dev/api/get");
    urls.forEach((figmaUrl) => url.searchParams.append("figmaUrl", figmaUrl));
    const response = await fetch(url);
    if (!response.ok) {
      console.warn("Error when fetching figma images", response.status);
      return [];
    }
    return await response.json();
  }

  const parsedFigmaUrls = urls.map((url) => parseFigmaUrl(url)).filter(Boolean) as NonNullable<
    ReturnType<typeof parseFigmaUrl>
  >[];

  const fileKey = parsedFigmaUrls.at(0)!.fileKey;
  const nodeIds = parsedFigmaUrls.map((figmaUrl) => figmaUrl!.nodeId).join(",");

  const url = new URL(`https://api.figma.com/v1/images/${fileKey}`);
  url.searchParams.set("ids", nodeIds);
  url.searchParams.set("scale", "1");
  url.searchParams.set("format", "svg");

  const response = await fetch(url, {
    headers: {
      "X-FIGMA-TOKEN": shortLivedFigmaToken,
    },
  });
  if (!response.ok) {
    console.warn("Error when fetching figma images", response.status);
    return [];
  }

  const json = await response.json();

  const figmaUrlsWithImages = parsedFigmaUrls.map((figmaUrl) => {
    const figmaUrlWithImage = figmaUrl as typeof figmaUrl & { imageUrl: string };
    figmaUrlWithImage.imageUrl = json.images[(figmaUrl.nodeId ?? "").replace("-", ":")] ?? "";

    return figmaUrlWithImage;
  });

  return figmaUrlsWithImages;
}

export type FigmaUrlWithImage = Awaited<ReturnType<typeof getFigmaPreviewImages>>[number];
