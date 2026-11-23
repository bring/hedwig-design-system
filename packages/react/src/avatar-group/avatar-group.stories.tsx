/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar } from "../avatar";
import { AvatarGroup } from ".";

/** Offline placeholder portrait, so the stories do not need network access */
function portrait(background: string) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="${background}"/><circle cx="50" cy="38" r="18" fill="#fff" fill-opacity=".8"/><path d="M14 100c0-22 16-36 36-36s36 14 36 36z" fill="#fff" fill-opacity=".8"/></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

const sizes = ["small", "medium", "large", "xlarge"] as const;

const meta: Meta<typeof AvatarGroup> = {
  title: "Avatar Group",
  component: AvatarGroup,
};

export default meta;

type Story = StoryObj<typeof AvatarGroup>;

export const Preview: Story = {
  tags: ["!dev"],
  args: {
    size: "medium",
    max: 4,
    "aria-label": "Deltakere",
  },
  argTypes: {
    size: { control: "inline-radio", options: sizes },
    max: { control: "number" },
  },
  render: (args) => (
    <AvatarGroup {...args}>
      <Avatar aria-label="Anne Heier">AH</Avatar>
      <Avatar src={portrait("#7a9cc6")} alt="Per Hansen" />
      <Avatar aria-label="Kari Berg">KB</Avatar>
      <Avatar src={portrait("#c69c7a")} alt="Ola Nordmann" />
      <Avatar aria-label="Lise Dahl">LD</Avatar>
      <Avatar aria-label="Jon Moe">JM</Avatar>
      <Avatar aria-label="Eva Strand">ES</Avatar>
    </AvatarGroup>
  ),
};

export const Two: Story = {
  render: () => (
    <AvatarGroup aria-label="Deltakere">
      <Avatar aria-label="Anne Heier">AH</Avatar>
      <Avatar aria-label="Per Hansen">PH</Avatar>
    </AvatarGroup>
  ),
};

export const Three: Story = {
  render: () => (
    <AvatarGroup aria-label="Deltakere">
      <Avatar aria-label="Anne Heier">AH</Avatar>
      <Avatar aria-label="Per Hansen">PH</Avatar>
      <Avatar aria-label="Kari Berg">KB</Avatar>
    </AvatarGroup>
  ),
};

export const Four: Story = {
  render: () => (
    <AvatarGroup aria-label="Deltakere">
      <Avatar aria-label="Anne Heier">AH</Avatar>
      <Avatar aria-label="Per Hansen">PH</Avatar>
      <Avatar aria-label="Kari Berg">KB</Avatar>
      <Avatar aria-label="Ola Nordmann">ON</Avatar>
    </AvatarGroup>
  ),
};

export const ImagesAndInitials: Story = {
  render: () => (
    <AvatarGroup aria-label="Deltakere">
      <Avatar src={portrait("#7a9cc6")} alt="Anne Heier" />
      <Avatar aria-label="Per Hansen">PH</Avatar>
      <Avatar src={portrait("#c69c7a")} alt="Kari Berg" />
      <Avatar aria-label="Ola Nordmann">ON</Avatar>
    </AvatarGroup>
  ),
};

export const Overflow: Story = {
  render: () => (
    <AvatarGroup max={4} aria-label="Deltakere">
      <Avatar aria-label="Anne Heier">AH</Avatar>
      <Avatar src={portrait("#7a9cc6")} alt="Per Hansen" />
      <Avatar aria-label="Kari Berg">KB</Avatar>
      <Avatar aria-label="Ola Nordmann">ON</Avatar>
      <Avatar aria-label="Lise Dahl">LD</Avatar>
      <Avatar aria-label="Jon Moe">JM</Avatar>
      <Avatar aria-label="Eva Strand">ES</Avatar>
    </AvatarGroup>
  ),
};

export const CustomOverflowLabel: Story = {
  render: () => (
    <AvatarGroup max={3} overflowLabel={(count) => `${count} flere deltakere`}>
      <Avatar aria-label="Anne Heier">AH</Avatar>
      <Avatar aria-label="Per Hansen">PH</Avatar>
      <Avatar aria-label="Kari Berg">KB</Avatar>
      <Avatar aria-label="Ola Nordmann">ON</Avatar>
      <Avatar aria-label="Lise Dahl">LD</Avatar>
    </AvatarGroup>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "grid", gap: 16, justifyItems: "start" }}>
      {sizes.map((size) => (
        <AvatarGroup key={size} size={size} max={4} aria-label="Deltakere">
          <Avatar aria-label="Anne Heier">AH</Avatar>
          <Avatar src={portrait("#7a9cc6")} alt="Per Hansen" />
          <Avatar aria-label="Kari Berg">KB</Avatar>
          <Avatar src={portrait("#c69c7a")} alt="Ola Nordmann" />
          <Avatar aria-label="Lise Dahl">LD</Avatar>
          <Avatar aria-label="Jon Moe">JM</Avatar>
          <Avatar aria-label="Eva Strand">ES</Avatar>
        </AvatarGroup>
      ))}
    </div>
  ),
};
