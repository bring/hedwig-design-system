/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { Link } from ".";

const meta: Meta<typeof Link> = {
  title: "Link",
  component: Link,
};

export default meta;

type Story = StoryObj<typeof Link>;

export const Primary: Story = {
  args: {
    children: "Link",
    href: "https://www.posten.no/",
    onClick: (e) => {
      e.preventDefault();
      // eslint-disable-next-line no-alert -- Storybook Demo
      alert("Hello");
    },
  },

  // Hide onClick from the auto generated table
  argTypes: {
    onClick: {
      table: {
        disable: true,
      },
    },
  },
};
