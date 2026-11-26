/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar } from ".";

/** Offline placeholder portrait, so the stories do not need network access */
function portrait(background: string) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="${background}"/><circle cx="50" cy="38" r="18" fill="#fff" fill-opacity=".8"/><path d="M14 100c0-22 16-36 36-36s36 14 36 36z" fill="#fff" fill-opacity=".8"/></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

/** Offline custom logo */
function customLogo() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#d6001c"/><path d="M28 72V28h12l20 28V28h12v44H60L40 44v28z" fill="#fff"/></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

const sizes = ["small", "medium", "large", "xlarge"] as const;

const row = { display: "flex", gap: 16, alignItems: "center" } as const;

const meta: Meta<typeof Avatar> = {
  title: "Avatar",
  component: Avatar,
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Preview: Story = {
  tags: ["!dev"],
  args: {
    size: "medium",
    variant: "default",
    children: "AH",
    "aria-label": "Anne Heier",
  },
  argTypes: {
    size: { control: "inline-radio", options: sizes },
    variant: { control: "inline-radio", options: ["default", "logo"] },
    src: { control: "text" },
    alt: { control: "text" },
    children: { control: "text" },
  },
};

export const Text: Story = {
  render: () => (
    <div style={row}>
      {sizes.map((size) => (
        <Avatar key={size} size={size} aria-label="Anne Heier">
          AH
        </Avatar>
      ))}
    </div>
  ),
};

export const Icon: Story = {
  render: () => (
    <div style={row}>
      {sizes.map((size) => (
        <Avatar key={size} size={size} aria-label="Ukjent bruker" />
      ))}
    </div>
  ),
};

export const Image: Story = {
  render: () => (
    <div style={row}>
      {sizes.map((size) => (
        <Avatar key={size} size={size} src={portrait("#7a9cc6")} alt="Anne Heier" />
      ))}
    </div>
  ),
};

export const ImageFallback: Story = {
  render: () => (
    <div style={{ display: "grid", gap: 16 }}>
      <div style={row}>
        {sizes.map((size) => (
          <Avatar key={size} size={size} src="/does-not-exist.png" aria-label="Anne Heier">
            AH
          </Avatar>
        ))}
      </div>
      <div style={row}>
        {sizes.map((size) => (
          <Avatar key={size} size={size} src="/does-not-exist.png" aria-label="Ukjent bruker" />
        ))}
      </div>
    </div>
  ),
};

export const Logo: Story = {
  render: () => (
    <div style={row}>
      {sizes.map((size) => (
        <Avatar key={size} size={size} variant="logo" aria-label="Posten Bring" />
      ))}
    </div>
  ),
};

export const LogoBring: Story = {
  render: () => (
    <div data-color="bring" style={row}>
      {sizes.map((size) => (
        <Avatar key={size} size={size} variant="logo" aria-label="Bring" />
      ))}
    </div>
  ),
};

export const CustomLogo: Story = {
  render: () => (
    <div style={row}>
      {sizes.map((size) => (
        <Avatar key={size} size={size} variant="logo" src={customLogo()} alt="Nav" />
      ))}
    </div>
  ),
};

export const Slot: Story = {
  render: () => (
    <div style={row}>
      {sizes.map((size) => (
        <Avatar key={size} size={size} asChild>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            role="img"
            aria-label="Våpenskjold"
          >
            <rect width="100" height="100" fill="#264b96" />
            <path d="M50 14 82 28v26c0 18-14 30-32 36-18-6-32-18-32-36V28z" fill="#fc0" />
            <path d="M50 30v48M32 48h36" stroke="#264b96" strokeWidth="8" />
          </svg>
        </Avatar>
      ))}
    </div>
  ),
};
