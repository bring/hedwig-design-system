/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { OrderedList, UnorderedList } from ".";

type Story = StoryObj<typeof UnorderedList>;

const listItems = () => (
  <>
    <li>Something</li>
    <li>Some thing</li>
    <li>Thingsome</li>
    <li>Thing some</li>
  </>
);

export const OrderedListStory: Story = {
  name: "Ordered List",
  args: {
    size: "medium",
    children: listItems(),
  },
  render: (props) => <OrderedList {...props} />,
};

export const UnorderedListStory: Story = {
  name: "Unordered List",
  args: {
    size: "medium",
    children: listItems(),
  },
};

const meta: Meta<typeof UnorderedList> = {
  title: "List",
  component: UnorderedList,
};
export default meta;
