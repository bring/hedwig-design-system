/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from ".";

const meta: Meta<typeof Spinner> = {
  title: "Spinner",
  component: Spinner,
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: {
        type: "radio",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Preview: Story = {
  args: {
    size: "medium",
    title: "Venter på ...",
  },
};
