/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { Link } from ".";

const meta: Meta<typeof Link> = {
  title: "Link",
  component: Link,

  // Hide onClick from the auto generated table
  argTypes: {
    onClick: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Link>;

export const Preview: Story = {
  tags: ["!dev"],
  args: {
    children: "Link",
    href: "https://www.posten.no/",
    onClick: (e) => {
      e.preventDefault();
      // eslint-disable-next-line no-alert -- Storybook Demo
      alert("Hello");
    },
  },
};
