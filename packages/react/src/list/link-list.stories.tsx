/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "../link";
import { LinkList } from "./link-list";

type Story = StoryObj<typeof LinkList>;

const linkListItems = () => (
  <>
    <li>
      <Link href="https://hedwig.posten.no">Link somwhere</Link>
    </li>
    <li>
      <Link href="https://hedwig.posten.no" target="_blank">
        Link somwhere
      </Link>
    </li>
    <li>
      <Link href="https://hedwig.posten.no" target="_self">
        Link somwhere
      </Link>
    </li>
  </>
);

export const LinkListStory: Story = {
  name: "Link List",
  args: {
    size: "medium",
    children: linkListItems(),
  },
};

const meta: Meta<typeof LinkList> = {
  title: "List",
  component: LinkList,
};
export default meta;
