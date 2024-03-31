import { Tabs } from "@postenbring/hedwig-react";

function Example() {
  return (
    <Tabs defaultTab="second">
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
    </Tabs>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {};
