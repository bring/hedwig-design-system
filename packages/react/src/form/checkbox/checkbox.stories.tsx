/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./index";

const meta: Meta<typeof Checkbox> = {
  title: "Form/Checkbox",
  component: Checkbox,
  argTypes: {
    variant: { control: "inline-radio", options: ["plain", "bounding-box"] },
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Preview: Story = {
  tags: ["!dev"],
  args: {
    title: "",
    children: "Just a checkbox",
    checked: true,
    errorMessage: "",
    variant: "plain",
    onChange: () => {
      /**/
    },
  },
};
