/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { StyledHtml } from "../styled-html";
import { Tabs } from ".";

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
        <Tabs.List>
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
      </>
    ),
  },
};

export const Vertical: Story = {
  args: {
    defaultTab: "first",
    children: (
      <>
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
      </>
    ),
  },
};

export const HorizontalWithMiddleSelected: Story = {
  args: {
    defaultTab: "second",
    children: (
      <>
        <Tabs.List>
          <Tabs.Tab tabId="first">Pakker og gods for bedrift</Tabs.Tab>
          <Tabs.Tab tabId="second">Post og brevpost</Tabs.Tab>
          <Tabs.Tab tabId="third">Bud- og ekspress-pakker</Tabs.Tab>
        </Tabs.List>
        <Tabs.Contents>
          <Tabs.Content forTabId="first" as={StyledHtml}>
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
          </Tabs.Content>
          <Tabs.Content forTabId="second">
            <h2>Vilkår for post med like formater</h2>
          </Tabs.Content>
          <Tabs.Content forTabId="third">
            <h2>Generelle vilkår</h2>
          </Tabs.Content>
        </Tabs.Contents>
      </>
    ),
  },
};

export default meta;
