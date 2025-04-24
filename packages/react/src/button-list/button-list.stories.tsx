/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../button";
import { ButtonList } from ".";

const meta: Meta<typeof ButtonList> = {
  title: "Button List",
  component: ButtonList,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ButtonList>;

export const Preview: Story = {
  tags: ["!dev"],
  args: {
    variant: "default",
    children: (
      <>
        <Button>First button</Button>
        <Button variant="secondary">Second button</Button>
      </>
    ),
  },
};
