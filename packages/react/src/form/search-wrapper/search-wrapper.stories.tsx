/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { SearchWrapper } from ".";

const meta: Meta<typeof SearchWrapper> = {
  title: "Form/Search",
  component: SearchWrapper,
};

export default meta;

type Story = StoryObj<typeof SearchWrapper>;

export const Preview: Story = {
  tags: ["!dev"],
  args: {
    placeholder: "I am a placeholder",
    errorMessage: "",
    readOnly: false,
    size: "large",
  },
  argTypes: {
    size: { control: "inline-radio", options: ["large", "small"] },
  },
};
