/* eslint-disable import/no-extraneous-dependencies -- storybook story */

import type { Meta, StoryObj } from "@storybook/react";
import { WarningBanner } from ".";

const meta: Meta<typeof WarningBanner> = {
  title: "Warning Banner",
  component: WarningBanner,
  args: {
    children: (
      <>
        <WarningBanner.Title variant="expandable">Warning banner title</WarningBanner.Title>
        <WarningBanner.Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </WarningBanner.Description>
      </>
    ),
  },
};

export default meta;

type Story = StoryObj<typeof WarningBanner>;

export const Expandable: Story = {
  args: {
    children: (
      <>
        <WarningBanner.Title variant="expandable">
          Expandable warning banner title
        </WarningBanner.Title>
        <WarningBanner.Description>Warning banner description</WarningBanner.Description>
      </>
    ),
  },
};

export const NotExpandable: Story = {
  args: {
    children: (
      <>
        <WarningBanner.Title variant="default">
          Not expandable warning banner title
        </WarningBanner.Title>
        <WarningBanner.Description>Warning banner description</WarningBanner.Description>
      </>
    ),
  },
};

export const TitleOnly: Story = {
  args: {
    children: (
      <WarningBanner.Title variant="default">Warning banner title only</WarningBanner.Title>
    ),
  },
};

export const DescriptionOnly: Story = {
  args: {
    children: (
      <WarningBanner.Description>Warning banner description only</WarningBanner.Description>
    ),
  },
};
