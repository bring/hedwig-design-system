/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { ErrorSummary } from ".";

const meta: Meta<typeof ErrorSummary> = {
  title: "Form/Error Summary",
  component: ErrorSummary,
};

export default meta;

type Story = StoryObj<typeof ErrorSummary>;

export const Preview: Story = {
  tags: ["!dev"],
  args: {
    heading: "Errors in demo",
    errors: [
      { message: "test1", anchor: "test1" },
      { message: "test2", anchor: "test2" },
    ],
  },
};
