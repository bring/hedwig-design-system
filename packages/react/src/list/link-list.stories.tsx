/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "../link";
import { LinkList } from "./link-list";

const meta: Meta<typeof LinkList> = {
  title: "Link List",
  component: LinkList,
};
export default meta;

type Story = StoryObj<typeof LinkList>;

export const Preview: Story = {
  args: {
    size: "medium",
    children: (
      <>
        <li>
          <Link href="https://hedwig.posten.no">Link somewhere</Link>
        </li>
        <li>
          <Link href="https://hedwig.posten.no" target="_blank">
            Link somewhere
          </Link>
        </li>
        <li>
          <Link href="https://hedwig.posten.no" target="_self">
            Link somewhere
          </Link>
        </li>
      </>
    ),
  },
};
