/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "../box";
import { Badge } from ".";

const meta: Meta<typeof Badge> = {
  title: "Badge",
  component: Badge,
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Lighter: Story = {
  args: {
    variant: "lighter",
    children: "Default badge",
  },
};

export const Dark: Story = {
  args: {
    variant: "dark",
    children: "Dark badge",
  },
};

export const White: Story = {
  args: {
    variant: "white",
    children: "White badge",
  },
  render: (props) => (
    <Box>
      <Badge {...props} />
    </Box>
  ),
};

export const Warning: Story = {
  args: {
    variant: "warning",
    children: "Warning badge",
  },
};
