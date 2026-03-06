/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { ValidationMessage } from ".";

const meta: Meta<typeof ValidationMessage> = {
  title: "Form/Validation Message",
  component: ValidationMessage,
};

export default meta;

type Story = StoryObj<typeof ValidationMessage>;

export const Preview: Story = {
  tags: ["!dev"],
  args: {
    id: "id",
    children: "This is a validation message for use with form input components",
  },
};
