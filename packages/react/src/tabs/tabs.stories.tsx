/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { Tab, TabContent, TabContents, TabList, Tabs } from ".";

type Story = StoryObj<typeof Tabs>;

const meta: Meta<typeof Tabs> = {
  title: "Tabs",
  component: Tabs,
};

export const Horizontal: Story = {
  args: {
    defaultTab: "first",
    children: (
      <>
        <TabList>
          <Tab tabId="first">First</Tab>
          <Tab tabId="second">Second</Tab>
          <Tab tabId="third">Third</Tab>
          <Tab tabId="forth">Forth</Tab>
          <Tab tabId="fifth">Fifth</Tab>
          <Tab tabId="sixth">Sixth</Tab>
        </TabList>
        <TabContents>
          <TabContent forTabId="first">First tab</TabContent>
          <TabContent forTabId="second">Second tab</TabContent>
          <TabContent forTabId="third">Third tab</TabContent>
          <TabContent forTabId="forth">Forth tab</TabContent>
          <TabContent forTabId="fifth">Fifth tab</TabContent>
          <TabContent forTabId="sixth">Sixth tab</TabContent>
        </TabContents>
      </>
    ),
  },
};

export const Vertical: Story = {
  args: {
    defaultTab: "first",
    children: (
      <>
        <TabList direction="vertical">
          <Tab tabId="first">First</Tab>
          <Tab tabId="second">Second</Tab>
          <Tab tabId="third">Third</Tab>
          <Tab tabId="forth">Forth</Tab>
          <Tab tabId="fifth">Fifth</Tab>
          <Tab tabId="sixth">Sixth</Tab>
        </TabList>
        <TabContents>
          <TabContent forTabId="first">First tab</TabContent>
          <TabContent forTabId="second">Second tab</TabContent>
          <TabContent forTabId="third">Third tab</TabContent>
          <TabContent forTabId="forth">Forth tab</TabContent>
          <TabContent forTabId="fifth">Fifth tab</TabContent>
          <TabContent forTabId="sixth">Sixth tab</TabContent>
        </TabContents>
      </>
    ),
  },
};

export const HorizontalWithMiddleSelected: Story = {
  args: {
    defaultTab: "second",
    children: (
      <>
        <TabList>
          <Tab tabId="first">Pakker og gods for bedrift</Tab>
          <Tab tabId="second">Post og brevpost</Tab>
          <Tab tabId="third">Bud- og ekspress-pakker</Tab>
        </TabList>
        <TabContents>
          <TabContent forTabId="first">
            <h2>Vilkår for transport til bedrifter nasjonalt</h2>
            <ul>
              <li>
                <a href="/tjenester/pakker-og-gods/Transportguiden_01122023.pdf">
                  Transportguiden fra 01.12.2023 (pdf)
                </a>
              </li>
              <li>
                <a
                  href="https://lovdata.no/dokument/NL/lov/1974-12-20-68?q=Lov+om+vegfraktavtaler"
                  rel="noopener"
                  target="_blank"
                >
                  Link til Lov om Vegfraktavtaler fra Lovdata
                </a>
              </li>
              <li>
                <a href="/vilkar/nsab-2000.pdf">NSAB 2000 (pdf)</a>
              </li>
              <li>
                <a href="/vilkar/nsab-2015.pdf">NSAB 2015 (pdf)</a>
              </li>
              <li>
                <a href="/vilkar/pakker-til-bedrifter-i-utlandet-pakker-og-gods-sikkerhetsbestemmelser">
                  Pakker og gods - sikkerhetsbestemmelser
                </a>
              </li>
              <li>
                <a href="/vilkar/vilkar-for-pakke-til-bedrift">Vilkår for Pakke til bedrift</a>
              </li>
              <li>
                <a href="/vilkar/vilkar-for-ekspress-neste-dag">Vilkår for Ekspress neste dag</a>
              </li>
              <li>
                <a href="/vilkar/Betingelser%20Oljeekspressen.pdf">
                  Betingelser Oljeekspressen (pdf)
                </a>
                &nbsp;
              </li>
              <li>
                <a href="/tjenester/pakker-og-gods/Transportguiden_01122023.pdf">
                  Vilkår for godstjenester fra 01.12.2023 (pdf)
                </a>
                &nbsp;
              </li>
            </ul>
          </TabContent>
          <TabContent forTabId="second">
            <h2>Vilkår for post med like formater</h2>
          </TabContent>
          <TabContent forTabId="third">
            <h2>Generelle vilkår</h2>
          </TabContent>
        </TabContents>
      </>
    ),
  },
};

export default meta;
