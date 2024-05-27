import "@postenbring/hedwig-css";
import { HStack, Text, VStack } from "@postenbring/hedwig-react";

function Example() {
  return (
    <HStack gap="16">
      <div>
        <FontGalleryHeader>Min</FontGalleryHeader>
        <FontGallery size="min" />
      </div>
      <div>
        <FontGalleryHeader>Max</FontGalleryHeader>
        <FontGallery size="max" />
      </div>
    </HStack>
  );
}

function FontGallery({ size }: { size?: "min" | "max" | "fluid" }) {
  return (
    <VStack gap="16">
      <div>
        <Text size={size} variant="h1-display" as="p">
          Display
        </Text>
        <Text size={size} variant="h1" as="p">
          H1
        </Text>
        <Text size={size} variant="h2" as="p">
          H2
        </Text>
        <Text size={size} variant="h3" as="p">
          H3
        </Text>
        <Text size={size} variant="body">
          Body
        </Text>
        <Text size={size} variant="body-small">
          Body Small
        </Text>
        <Text size={size} variant="technical">
          Technical
        </Text>
        <Text size={size} variant="caption">
          Caption
        </Text>
      </div>
      <div>
        <Text size={size} variant="h3-title" as="p">
          H3 Title
        </Text>
        <Text size={size} variant="body-title">
          Body Title
        </Text>
        <Text size={size} variant="body-small-title">
          Body Small Title
        </Text>
        <Text size={size} variant="technical-title">
          Technical Title
        </Text>
        <Text size={size} variant="caption-title">
          Caption Title
        </Text>
      </div>
    </VStack>
  );
}

function FontGalleryHeader({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        padding: "var(--hds-spacing-8)",
        background: "var(--hds-colors-signature)",
        color: "var(--hds-button-colors-text)",
        fontWeight: 500,
        margin: 0,
      }}
    >
      {children}
    </h2>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 1,
};
