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

export default meta;

type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {};

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

export const SingleElement: Story = {
  args: {
    children: <li>Shipment from SOMEONE YOU KNOW</li>,
  },
};

export const LongContent: Story = {
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
          <Link href="https://www.posten.no">
            Posten dot no Posten dot no Posten dot no Posten dot no Posten dot no Posten dot no
            Posten dot no
          </Link>
        </li>
        <li>You will find this page</li>
      </>
    ),
  },
};
