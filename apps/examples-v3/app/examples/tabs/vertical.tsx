import "@postenbring/hedwig-css";
import { Tabs } from "@postenbring/hedwig-react";

function Example() {
  return (
    <Tabs defaultTab="first">
      <Tabs.List direction="vertical">
        <Tabs.Tab tabId="first">First</Tabs.Tab>
        <Tabs.Tab tabId="second">Second</Tabs.Tab>
        <Tabs.Tab tabId="third">Third</Tabs.Tab>
        <Tabs.Tab tabId="forth">Forth</Tabs.Tab>
        <Tabs.Tab tabId="fifth">Fifth</Tabs.Tab>
        <Tabs.Tab tabId="sixth">Sixth</Tabs.Tab>
      </Tabs.List>
      <Tabs.Contents>
        <Tabs.Content forTabId="first">First tab</Tabs.Content>
        <Tabs.Content forTabId="second">Second tab</Tabs.Content>
        <Tabs.Content forTabId="third">Third tab</Tabs.Content>
        <Tabs.Content forTabId="forth">Forth tab</Tabs.Content>
        <Tabs.Content forTabId="fifth">Fifth tab</Tabs.Content>
        <Tabs.Content forTabId="sixth">Sixth tab</Tabs.Content>
      </Tabs.Contents>
    </Tabs>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 1,
};
