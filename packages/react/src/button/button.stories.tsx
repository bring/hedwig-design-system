/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";

const meta: Meta<typeof Button> = {
  component: Button,
  // argTypes: {
  //   type: {
  //     control: { type: "radio" },
  //     options: ["button", "submit", "reset"],
  //   },
  // },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Primary",
    size: "medium",
  },
};
