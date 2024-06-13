/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { StepIndicator } from ".";

const meta: Meta<typeof StepIndicator> = {
  title: "Step indicator",
  component: StepIndicator,
};

export default meta;

type Story = StoryObj<typeof StepIndicator>;

export const Preview: Story = {
  tags: ["!dev"],
  args: {
    label: "Progress name",
    totalSteps: 5,
    activeStep: 2,
  },
};
