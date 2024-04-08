/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { HStack, VStack } from "../layout";
import { Text } from ".";

const meta: Meta<typeof Text> = {
  title: "Text",
  component: Text,
};

export default meta;

type Story = StoryObj<typeof Text>;
export const Default: Story = {
  render: FontGallery,
};

export const PostenBringSideBySide: Story = {
  render: () => (
    <HStack gap="16">
      <div className="hds-theme-posten">
        <FontGalleryHeader>Posten</FontGalleryHeader>
        <FontGallery />
      </div>
      <div className="hds-theme-bring">
        <FontGalleryHeader>Bring</FontGalleryHeader>
        <FontGallery />
      </div>
    </HStack>
  ),
};

export const MinAndMax: Story = {
  render: () => (
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
  ),
};

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
