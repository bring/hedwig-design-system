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
    children: (
      <>
        <ErrorSummary.Heading>To continue please correct the following issues</ErrorSummary.Heading>
        <ErrorSummary.List>
          <ErrorSummary.Item href="#firstname">First name is required</ErrorSummary.Item>
          <ErrorSummary.Item href="#surname">Surname is required</ErrorSummary.Item>
        </ErrorSummary.List>
      </>
    ),
  },
};
