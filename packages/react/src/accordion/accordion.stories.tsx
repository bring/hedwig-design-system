/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Accordion } from ".";

const meta: Meta<typeof Accordion> = {
  title: "Accordion",
  component: Accordion,
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Preview: Story = {
  tags: ["!dev"],
  args: {
    children: (
      <>
        <Accordion.Item>
          <Accordion.Header>Can the mail be forwarded abroad?</Accordion.Header>
          <Accordion.Content>
            Yes, with some limitations. Shipments of items cannot be forwarded abroad due to customs
            declaration.
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item defaultOpen>
          <Accordion.Header>Will all mail be forwarded to new address?</Accordion.Header>
          <Accordion.Content>
            All types of addressed mail distributed through Posten will be forwarded. Within Norway,
            it also applies to items sent in letters.
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Header>How do I change my order?</Accordion.Header>
          <Accordion.Content>
            Sign in to My address or call customer service at 22 03 00 00.
          </Accordion.Content>
        </Accordion.Item>
      </>
    ),
  },
};
