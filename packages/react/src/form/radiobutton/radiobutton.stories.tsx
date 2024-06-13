/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { Radiobutton } from "./index";

const meta: Meta<typeof Radiobutton> = {
  title: "Form/Radiobutton",
  component: Radiobutton,
};

export default meta;

type Story = StoryObj<typeof Radiobutton>;

export const Preview: Story = {
  args: {
    title: "",
    children: "Just a radiobutton",
    checked: true,
    hasError: false,
    variant: "plain",
  },
  argTypes: {
    variant: { control: "inline-radio", options: ["plain", "bounding-box"] },
  },
};
