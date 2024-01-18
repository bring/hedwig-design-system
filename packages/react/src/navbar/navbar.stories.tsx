/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from ".";

const meta: Meta<typeof Navbar> = {
  title: "🚧 Navbar",
  component: Navbar,
};

export default meta;

type Story = StoryObj<typeof Navbar>;
export const Default: Story = {
  render: () => (
    <Navbar>
      <Navbar.Logo as="a" href="https://www.posten.no/" title="Til forsiden" />
      <div style={{ display: "flex", gap: 16 }}>
        <button type="button">Hallo</button>
        <button type="button">Hallo</button>
        <button type="button">Hallo</button>
        <button type="button">Hallo</button>
      </div>
      <Navbar.ExpandableMenu>
        <Navbar.ExpandableMenu.Trigger whenClosedText="Meny" whenOpenText="Close me" />
        <Navbar.ExpandableMenu.Content>Hello</Navbar.ExpandableMenu.Content>
      </Navbar.ExpandableMenu>
    </Navbar>
  ),
};
