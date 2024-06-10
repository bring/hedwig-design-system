/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "../link";
import { Breadcrumbs } from ".";

const meta: Meta<typeof Breadcrumbs> = {
  title: "Breadcrumbs",
  component: Breadcrumbs,
  args: {
    children: (
      <>
        <li>
          <Link href="https://www.posten.no">Home</Link>
        </li>
        <li>
          <Link href="https://www.posten.no">First level</Link>
        </li>
        <li>
          <Link href="https://www.posten.no">Next level</Link>
        </li>
        <li>
          <Link href="https://www.posten.no">The previous page</Link>
        </li>
        <li>Title of the current page</li>
      </>
    ),
  },
};

export default meta;

type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {};

/**
 * You should have at minimum two levels in your hierarchy to use breadcrumbs.
 */
export const TwoElements: Story = {
  args: {
    children: (
      <>
        <li>
          <Link href="https://www.posten.no">Track letters and parcels</Link>
        </li>
        <li>Shipment from SOMEONE YOU KNOW</li>
      </>
    ),
  },
};
