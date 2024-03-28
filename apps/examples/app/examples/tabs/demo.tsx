import { Tabs } from "@postenbring/hedwig-react";

function Example() {
  return (
    <Tabs defaultTab="first">
      <Tabs.List>
        <Tabs.Tab tabId="first">Tab</Tabs.Tab>
        <Tabs.Tab tabId="second">TabTab</Tabs.Tab>
        <Tabs.Tab tabId="third">TabTabTab</Tabs.Tab>
      </Tabs.List>
      <Tabs.Contents>
        <Tabs.Content forTabId="first">Single tab</Tabs.Content>
        <Tabs.Content forTabId="second">Two tabs</Tabs.Content>
        <Tabs.Content forTabId="third">
          <h3>Tabs, tabs everywhere 😱!</h3>
        </Tabs.Content>
      </Tabs.Contents>
    </Tabs>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {};
