/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tag } from ".";

const meta: Meta<typeof Tag> = {
  title: "Tag",
  component: Tag,
};

export default meta;

export const Preview: StoryObj<typeof Tag> = {
  tags: ["!dev"],
  args: {
    children: "Tag",
    "data-color": "posten",
    size: "default",
    asChild: false,
  },
};
