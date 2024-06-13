/* eslint-disable import/no-extraneous-dependencies -- storybook story */

import type { Meta, StoryObj } from "@storybook/react";
import { WarningBanner } from ".";

const meta: Meta<typeof WarningBanner> = {
  title: "Warning Banner",
  component: WarningBanner,
};

export default meta;

type Story = StoryObj<typeof WarningBanner>;

export const Preview: Story = {
  tags: ["!dev"],
  args: {
    title: "Warning banner title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
};
