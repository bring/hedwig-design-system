/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "../link";
import { Breadcrumb, Breadcrumbs } from ".";

const meta: Meta<typeof Breadcrumbs> = {
  title: "Breadcrumbs",
  component: Breadcrumbs,
  args: {
    children: (
      <>
        <li>
          <Breadcrumb>
            <Link href="https://www.posten.no">Home</Link>
          </Breadcrumb>
        </li>
        <li>
          <Breadcrumb>
            <Link href="https://www.posten.no">Somewhere</Link>
          </Breadcrumb>
        </li>
        <li>
          <Breadcrumb>
            <Link href="https://www.posten.no">Deep inside</Link>
          </Breadcrumb>
        </li>
        <li>
          <Breadcrumb>
            <Link href="https://www.posten.no">Posten dot no</Link>
          </Breadcrumb>
        </li>
        <li>
          <Breadcrumb>You will find this page</Breadcrumb>
        </li>
      </>
    ),
  },
};

export default meta;

type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {};

export const OnlyTwoElements: Story = {
  args: {
    children: (
      <>
        <li>
          <Breadcrumb>
            <Link href="https://www.posten.no">Track letters and parcels</Link>
          </Breadcrumb>
        </li>
        <li>
          <Breadcrumb>Shipment from SOMEONE YOU KNOW</Breadcrumb>
        </li>
      </>
    ),
  },
};

export const OnlyOneElement: Story = {
  args: {
    children: (
      <li>
        <Breadcrumb>Shipment from SOMEONE YOU KNOW</Breadcrumb>
      </li>
    ),
  },
};
