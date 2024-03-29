import { StyledHtml, Text } from "@postenbring/hedwig-react";
import { useLoaderData } from "@remix-run/react";
import { getFigmaPreviewImages } from "../components/figma/get-figma-preview";
import { FigmaEmbed } from "../components/figma/figma-embed";
import { FigmaPreviews } from "../components/figma/figma-preview";

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
