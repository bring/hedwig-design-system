/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { HelpText } from ".";

type Story = StoryObj<typeof HelpText>;

const meta: Meta<typeof HelpText> = {
  title: "Help text",
  component: HelpText,
};

export default meta;

export const Preview: Story = {
  tags: ["!dev"],
  args: {
    helpText: `VOEC er en forkortelse for "VAT on E-commerce" (mva. på e-handel).`,
    children: <>VOEC</>,
  },
};
