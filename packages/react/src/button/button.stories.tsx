/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  argTypes: {
    fullWidth: { control: "radio", options: [false, true, "mobile"] },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Preview: Story = {
  args: {
    variant: "primary",
    children: "Primary button",
  },
};
