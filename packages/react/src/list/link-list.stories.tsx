/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "../link";
import { LinkList, LinkListItem } from "./link-list";

type Story = StoryObj<typeof LinkList>;

const linkListItems = () => (
  <>
    <LinkListItem>
      <Link href="https://hedwig.posten.no">Link somwhere</Link>
    </LinkListItem>
    <LinkListItem>
      <Link href="https://hedwig.posten.no" target="_blank">
        Link somwhere
      </Link>
    </LinkListItem>
    <LinkListItem>
      <Link href="https://hedwig.posten.no" target="_self">
        Link somwhere
      </Link>
    </LinkListItem>
  </>
);

export const LinkListStory: Story = {
  name: "Link List",
  args: {
    size: "medium",
    children: linkListItems(),
  },
  render: (props) => <LinkList {...props} />,
};

const meta: Meta<typeof LinkList> = {
  title: "List",
  component: LinkList,
};
export default meta;
