/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { ListItem, OrderedList, UnorderedList } from ".";

type Story = StoryObj<typeof UnorderedList>;

const listItems = () => (
  <>
    <ListItem>Something</ListItem>
    <ListItem>Some thing</ListItem>
    <ListItem>Thingsome</ListItem>
    <ListItem>Thing some</ListItem>
  </>
);

export const OrderedListMedium: Story = {
  args: {
    size: "medium",
    children: listItems(),
  },
  render: (props) => <OrderedList {...props} />,
};

export const OrderedListLarge: Story = {
  args: {
    size: "large",
    children: listItems(),
  },
  render: (props) => <OrderedList {...props} />,
};

export const UnorderedListNoBullets: Story = {
  args: {
    size: "medium",
    listStyle: "no-bullets",
    children: listItems(),
  },
};

export const UnorderedListMedium: Story = {
  args: {
    size: "medium",
    children: listItems(),
  },
};

export const UnorderedListSmall: Story = {
  args: {
    size: "small",
    children: listItems(),
  },
};

export const UnorderedListLarge: Story = {
  args: {
    size: "large",
    children: listItems(),
  },
};

const meta: Meta<typeof UnorderedList> = {
  title: "List",
  component: UnorderedList,
};
export default meta;
