/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "../link";
import { UnorderedList } from "../list";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from ".";

const meta: Meta<typeof Accordion> = {
  title: "Accordion",
  component: Accordion,
  args: {
    variant: "single",
    children: (
      <>
        <AccordionItem>
          <AccordionTrigger>And this too</AccordionTrigger>
          <AccordionContent>hello content</AccordionContent>
        </AccordionItem>
        <AccordionItem>
          <AccordionTrigger>This is just so amazing, can you imagine!</AccordionTrigger>
          <AccordionContent>
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
          </AccordionContent>
        </AccordionItem>
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
    size: {
      options: ["small", "medium"],
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

export const SingleItemSmallSmall: Story = {
  args: {
    variant: "single",
    size: "small",
  },
};

export const MultipleItems: Story = {
  name: "Multiple items",
  args: {
    variant: "multiple",
  },
};

export const MultipleItemsSmall: Story = {
  args: {
    variant: "multiple",
    size: "small",
  },
};

export default meta;
