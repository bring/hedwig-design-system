/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { Link } from ".";

const meta: Meta<typeof Link> = {
  title: "Link",
  component: Link,

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

export default meta;

type Story = StoryObj<typeof Link>;

export const Underline: Story = {};
export const Solid: Story = {
  args: {
    variant: "solid",
  },
};
export const Inverted: Story = {
  args: {
    variant: "inverted",
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};
export const NoUnderline: Story = {
  args: {
    variant: "no-underline",
  },
};

export const ButtonAsLink: Story = {
  name: "Button as a link",
  args: {
    as: "button",
    children: "Les mer",
    href: undefined,
    onClick: () => {
      // eslint-disable-next-line no-alert -- Story
      alert(`Hello world`);
    },
  },
};
