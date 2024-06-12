/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "../link";
import { Breadcrumbs } from ".";

const meta: Meta<typeof Breadcrumbs> = {
  title: "Breadcrumbs",
  component: Breadcrumbs,
};

export default meta;

type Story = StoryObj<typeof Breadcrumbs>;

export const Preview: Story = {
  args: {
    children: (
      <>
        <li>
          <Link href="https://www.posten.no">Home</Link>
        </li>
        <li>
          <Link href="https://www.posten.no">Somewhere</Link>
        </li>
        <li>
          <Link href="https://www.posten.no">Deep inside</Link>
        </li>
        <li>
          <Link href="https://www.posten.no">Posten dot no</Link>
        </li>
        <li>You will find this page</li>
      </>
    ),
  },
};
