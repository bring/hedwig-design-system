/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { OrderedList, UnorderedList } from ".";

type Story = StoryObj<typeof UnorderedList>;

function HStack({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--hds-spacing-small-4)",
      }}
    >
      {children}
    </div>
  );
}

// eslint-disable-next-line react/jsx-key -- It's ok, just a demo
const listItems = [<li>List item 1</li>, <li>List item 2</li>, <li>List item 3</li>];

export const UnorderedListStory: Story = {
  name: "Unordered List",
  args: {
    children: listItems,
  },
  render: (props) => (
    <HStack>
      <UnorderedList {...props} size="small" />
      <UnorderedList {...props} size="medium" />
      <UnorderedList {...props} size="large" />
    </HStack>
  ),
};

export const OrderedListStory: Story = {
  name: "Ordered List",
  args: {
    children: listItems,
  },
  render: (props) => (
    <HStack>
      <OrderedList {...props} size="small" />
      <OrderedList {...props} size="medium" />
      <OrderedList {...props} size="large" />
    </HStack>
  ),
};

export const NoBulletsListStory: Story = {
  name: "No Bullets List",
  args: {
    listStyle: "no-bullets",
    children: listItems,
  },
  render: (props) => (
    <HStack>
      <UnorderedList {...props} size="small" />
      <UnorderedList {...props} size="medium" />
      <UnorderedList {...props} size="large" />
    </HStack>
  ),
};

const meta: Meta<typeof UnorderedList> = {
  title: "List",
  component: UnorderedList,
};
export default meta;
