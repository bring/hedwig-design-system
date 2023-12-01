/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "../link";
import { Breadcrumbs, Breadcrumb, BreadcrumbPrevious } from ".";

const meta: Meta<typeof Breadcrumbs> = {
  title: "Breadcrumbs",
  component: Breadcrumbs,
  args: {
    children: (
      <>
        <Breadcrumb>
          <Link href="https://www.posten.no">Home</Link>
        </Breadcrumb>
        <Breadcrumb>
          <Link href="https://www.posten.no">First</Link>
        </Breadcrumb>
        <Breadcrumb>
          <Link href="https://www.posten.no">Second</Link>
        </Breadcrumb>
        <Breadcrumb>
          <Link href="https://www.posten.no">Previous page</Link>
        </Breadcrumb>
        <Breadcrumb>Current page</Breadcrumb>
      </>
    ),
    direction: "right",
  },
};

export default meta;

type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {};

export const ReturnToPrevious: Story = {
  render: () => (
    <BreadcrumbPrevious>
      <Link href="https://www.posten.no">Home</Link>
    </BreadcrumbPrevious>
  ),
};
