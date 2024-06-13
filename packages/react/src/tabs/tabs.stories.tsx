/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from ".";

type Story = StoryObj<typeof Tabs>;

const meta: Meta<typeof Tabs> = {
  title: "Tabs",
  component: Tabs,
};
export default meta;

export const Preview: Story = {
  tags: ["!dev"],
  args: {
    defaultTab: "first",
    children: (
      <>
        <Tabs.List>
          <Tabs.Tab tabId="first">Send domestically</Tabs.Tab>
          <Tabs.Tab tabId="second">Send abroad</Tabs.Tab>
          <Tabs.Tab tabId="third">Other services</Tabs.Tab>
        </Tabs.List>
        <Tabs.Contents>
          <Tabs.Content forTabId="first">Single tab</Tabs.Content>
          <Tabs.Content forTabId="second">Two tabs</Tabs.Content>
          <Tabs.Content forTabId="third">Third tab</Tabs.Content>
        </Tabs.Contents>
      </>
    ),
  },
};
