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
            <Link href="https://www.posten.no">First</Link>
          </Breadcrumb>
        </li>
        <li>
          <Breadcrumb>
            <Link href="https://www.posten.no">Second</Link>
          </Breadcrumb>
        </li>
        <li>
          <Breadcrumb>
            <Link href="https://www.posten.no">Previous page</Link>
          </Breadcrumb>
        </li>
        <li>
          <Breadcrumb>Current page</Breadcrumb>
        </li>
      </>
    ),
  },
};

export default meta;

type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {};
