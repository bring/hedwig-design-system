/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from ".";

const meta: Meta<typeof Badge> = {
  title: "Badge",
  component: Badge,
};

export default meta;

export const Preview: StoryObj<typeof Badge> = {
  args: {
    variant: "lighter",
    children: "Default badge",
  },
};
