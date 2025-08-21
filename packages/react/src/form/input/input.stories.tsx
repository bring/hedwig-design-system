/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { Input } from ".";

const meta: Meta<typeof Input> = {
  title: "Form/Input",
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Preview: Story = {
  tags: ["!dev"],
  args: {
    label: "Some kind of input",
    placeholder: "I am a placeholder",
    errorMessage: "",
    readOnly: false,
    size: "default",
  },
  argTypes: {
    size: { control: "inline-radio", options: ["default", "small"] },
  },
};
