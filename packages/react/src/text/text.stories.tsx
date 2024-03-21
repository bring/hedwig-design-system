/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { Text } from ".";

const meta: Meta<typeof Text> = {
  title: "🚧 Typography",
  component: Text,
};

export default meta;

type Story = StoryObj<typeof Text>;
export const Default: Story = {
  render: FontGallery,
};

export const PostenBringSideBySide: Story = {
  render: () => (
    <div
      style={{
        padding: "var(--hds-spacing-large-1)",
        display: "flex",
        gap: "var(--hds-spacing-small-4)",
      }}
    >
      <div className="hds-theme-posten">
        <FontGalleryHeader>Posten</FontGalleryHeader>
        <FontGallery />
      </div>
      <div className="hds-theme-bring">
        <FontGalleryHeader>Bring</FontGalleryHeader>
        <FontGallery />
      </div>
    </div>
  ),
};

export const MinAndMax: Story = {
  render: () => (
    <div
      style={{
        padding: "var(--hds-spacing-large-1)",
        display: "flex",
        gap: "var(--hds-spacing-small-4)",
      }}
    >
      <div>
        <FontGalleryHeader>Min</FontGalleryHeader>
        <FontGallery size="min" />
      </div>
      <div>
        <FontGalleryHeader>Max</FontGalleryHeader>
        <FontGallery size="max" />
      </div>
    </div>
  ),
};

function FontGalleryHeader({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        padding: "var(--hds-spacing-small-2)",
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
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--hds-spacing-small-4)" }}>
      <div>
        <Text size={size} variant="h1-display">
          Display
        </Text>
        <Text size={size} variant="h1">
          H1
        </Text>
        <Text size={size} variant="h2">
          H2
        </Text>
        <Text size={size} variant="h3">
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
        <Text size={size} variant="h3-title">
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
    </div>
  );
}
