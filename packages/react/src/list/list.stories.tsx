/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { StoryObj, Meta } from "@storybook/react";
import { HStack } from "../layout";
import { UnorderedList } from ".";

type Story = StoryObj<typeof UnorderedList>;

const meta: Meta<typeof UnorderedList> = {
  title: "List",
  component: UnorderedList,
};
export default meta;

const listItems = (
  <>
    <li>List item 1</li>
    <li>List item 2</li>
    <li>List item 3</li>
  </>
);

export const Preview: Story = {
  tags: ["!dev"],
  args: {
    children: listItems,
  },
  render: (props) => (
    <HStack gap="16">
      <UnorderedList {...props} size="large" />
      <UnorderedList {...props} size="medium" />
      <UnorderedList {...props} size="small" />
    </HStack>
  ),
};
