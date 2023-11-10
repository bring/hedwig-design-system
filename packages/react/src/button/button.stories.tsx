/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { PrimaryButton } from ".";

const meta: Meta<typeof PrimaryButton> = {
  component: PrimaryButton,
};

export default meta;

type Story = StoryObj<typeof PrimaryButton>;

export const Primary: Story = {
  args: {
    children: "Primary",
  },
};
