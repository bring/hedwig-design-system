/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "../link";
import { UnorderedList } from "../list";
import { Accordion } from ".";

const meta: Meta<typeof Accordion> = {
  title: "Accordion",
  component: Accordion,
  args: {
    variant: "single",
    children: (
      <>
        <Accordion.Item>
          <Accordion.Trigger>Professional accordion title</Accordion.Trigger>
          <Accordion.Content>
            This is the simplest form of accordion body. Can be extensive.
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Trigger>
            Yet another POAT with &laquo;advanced&raquo; content
          </Accordion.Trigger>
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
  argTypes: {
    variant: {
      options: ["multiple", "single"],
      control: {
        type: "radio",
      },
    },
  },
};

type Story = StoryObj<typeof Accordion>;

export const SingleItem: Story = {
  name: "Single items",
  args: {
    variant: "single",
  },
};

export const MultipleItems: Story = {
  name: "Multiple items",
  args: {
    variant: "multiple",
  },
};

export const JustOneItem: Story = {
  name: "Just one item",
  args: {
    variant: "multiple",
    children: (
      <Accordion.Item>
        <Accordion.Trigger>Professional accordion title</Accordion.Trigger>
        <Accordion.Content>
          This is the simplest form of accordion body. Can be extensive.
        </Accordion.Content>
      </Accordion.Item>
    ),
  },
};

export default meta;
