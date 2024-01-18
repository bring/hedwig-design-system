/* eslint-disable import/no-extraneous-dependencies -- storybook story */

import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "../link";
import { WarningBanner } from ".";

const meta: Meta<typeof WarningBanner> = {
  title: "Warning Banner",
  component: WarningBanner,
};

export default meta;

type Story = StoryObj<typeof WarningBanner>;

export const Expandable: Story = {
  args: {
    title: "Warning banner title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
};

export const LinkInDescription: Story = {
  args: {
    title: "Warning banner with link in description",
    description: (
      <>
        You can include links in the description of the warning banner. However, remember to use
        link with variant solid.{" "}
        <Link href="https://www.posten.no/" variant="solid">
          Link to Posten
        </Link>
      </>
    ),
  },
};

export const TitleOnly: Story = {
  args: {
    title: "Title only",
  },
};
