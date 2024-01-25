/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from ".";

const meta: Meta<typeof Typography> = {
  title: "🚧 Typography",
  component: Typography,
};

export default meta;

type Story = StoryObj<typeof Typography>;
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
      <div>
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

function FontGallery() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--hds-spacing-small-4)" }}>
      <div>
        <Typography variant="h1-display">Display</Typography>
        <Typography variant="h1">H1</Typography>
        <Typography variant="h2">H2</Typography>
        <Typography variant="h3">H3</Typography>
        <Typography variant="body">Body</Typography>
        <Typography variant="body-small">Body Small</Typography>
        <Typography variant="technical">Technical</Typography>
        <Typography variant="caption">Caption</Typography>
      </div>
      <div>
        <Typography variant="h3-title">H3 Title</Typography>
        <Typography variant="body-title">Body Title</Typography>
        <Typography variant="body-small-title">Body Small Title</Typography>
        <Typography variant="technical-title">Technical Title</Typography>
        <Typography variant="caption-title">Caption Title</Typography>
      </div>
    </div>
  );
}
