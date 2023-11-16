/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { Badge, DarkBadge, WhiteBadge, WarningBadge } from ".";

const meta: Meta<typeof Badge> = {
  title: "Badge",
  component: Badge,
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Primary: Story = {
  args: {
    children: "Default badge",
  },
};

export const Dark: Story = {
  args: {
    children: "Dark badge",
  },
  render: (props) => <DarkBadge {...props} />,
};

export const White: Story = {
  args: {
    children: "White badge",
  },
  render: (props) => <WhiteBadge {...props} />,
};

export const Warning: Story = {
  args: {
    children: "Warning badge",
  },
  render: (props) => <WarningBadge {...props} />,
};
