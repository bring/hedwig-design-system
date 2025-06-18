/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from ".";

const meta: Meta<typeof Alert> = {
  title: "Alert",
  component: Alert,

  argTypes: {
    variant: {
      options: ["info", "success", "warning", "error", "neutral"],
      control: {
        type: "radio",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Alert>;
export const Preview: Story = {
  tags: ["!dev"],
  args: {
    variant: "success",
    children: (
      <>
        <Alert.Title>Alert header</Alert.Title>
        <Alert.Description>
          Alert header Alert description. A more detailed explanation of whats happening, but not
          too long.
        </Alert.Description>
      </>
    ),
  },
};
