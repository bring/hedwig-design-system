/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { RadioButton } from "./index";

const meta: Meta<typeof RadioButton> = {
  title: "Form/Radio button",
  component: RadioButton,
};

export default meta;

type Story = StoryObj<typeof RadioButton>;

export const Preview: Story = {
  tags: ["!dev"],
  args: {
    title: "",
    children: "Just a RadioButton",
    checked: true,
    hasError: false,
    variant: "plain",
  },
  argTypes: {
    variant: { control: "inline-radio", options: ["plain", "bounding-box"] },
  },
};
