/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "../link";
import { UnorderedList } from "../list";
import { Accordion } from ".";

const meta: Meta<typeof Accordion> = {
  title: "Accordion",
  component: Accordion,
  args: {
    children: (
      <>
        <Accordion.Item>
          <Accordion.Header>Professional accordion title</Accordion.Header>
          <Accordion.Content>
            This is the simplest form of accordion body. Can be extensive.
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Header>Yet another POAT with &laquo;advanced&raquo; content</Accordion.Header>
          <Accordion.Content>
            <h4>Hello</h4>
            <div>
              <p>
                This is some really, really exciting stuff with{" "}
                <Link href="https://www.posten.no">a link</Link> and all sorts of things like a
                list, even!
              </p>
              <UnorderedList>
                <li>Unordered</li>
                <li>Like</li>
                <li>You have</li>
                <li>Never seen</li>
              </UnorderedList>
            </div>
          </Accordion.Content>
        </Accordion.Item>
      </>
    ),
  },
};

type Story = StoryObj<typeof Accordion>;

export const MultipleItems: Story = {
  name: "Multiple items",
};

export const JustOneItem: Story = {
  name: "Just one item",
  args: {
    children: (
      <Accordion.Item>
        <Accordion.Header>Professional accordion title</Accordion.Header>
        <Accordion.Content>
          This is the simplest form of accordion body. Can be extensive.
        </Accordion.Content>
      </Accordion.Item>
    ),
  },
};

export const NoIndent: Story = {
  args: {
    indent: false,
    children: (
      <Accordion.Item>
        <Accordion.Header>Professional accordion title</Accordion.Header>
        <Accordion.Content>
          This is the simplest form of accordion body. Can be extensive.
        </Accordion.Content>
      </Accordion.Item>
    ),
  },
};

export const DefaultOpen: Story = {
  args: {
    children: (
      <>
        <Accordion.Item defaultOpen>
          <Accordion.Header>Professional accordion title</Accordion.Header>
          <Accordion.Content>
            This is the simplest form of accordion body. Can be extensive.
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Header>Professional accordion title</Accordion.Header>
          <Accordion.Content>
            This is the simplest form of accordion body. Can be extensive.
          </Accordion.Content>
        </Accordion.Item>
      </>
    ),
  },
};

export default meta;
