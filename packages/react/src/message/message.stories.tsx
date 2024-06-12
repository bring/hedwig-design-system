/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { Message } from ".";

const meta: Meta<typeof Message> = {
  title: "Message",
  component: Message,

  argTypes: {
    variant: {
      options: ["success", "attention", "warning", "neutral"],
      control: {
        type: "radio",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Message>;
export const Preview: Story = {
  args: {
    variant: "success",
    children: (
      <>
        <Message.Title>Message header</Message.Title>
        <Message.Description>
          Message header Message description. A more detailed explanation of whats happening, but
          not too long.
        </Message.Description>
      </>
    ),
  },
};
