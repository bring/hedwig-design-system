/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from ".";

const meta: Meta<typeof Textarea> = {
  title: "Form/Textarea",
  component: Textarea,
  argTypes: {
    variant: { control: "inline-radio", options: ["default", "white"] },
  },
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Preview: Story = {
  args: {
    label: "Some kind of textarea",
    placeholder: "I am a placeholder",
    errorMessage: "",
    readOnly: false,
    variant: "default",
  },
};
