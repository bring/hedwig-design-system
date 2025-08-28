/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from ".";

const meta: Meta<typeof Textarea> = {
  title: "Form/Textarea",
  component: Textarea,
  argTypes: {
    size: { control: "inline-radio", options: ["large", "small"] },
  },
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Preview: Story = {
  tags: ["!dev"],
  args: {
    label: "Some kind of textarea",
    placeholder: "I am a placeholder",
    errorMessage: "",
    readOnly: false,
    size: "large",
  },
};
