/* eslint-disable import/no-extraneous-dependencies -- storybook story */

import type { Meta, StoryObj } from "@storybook/react";
import { ShowMoreButton } from ".";

const meta: Meta<typeof ShowMoreButton> = {
  title: "Show more",
  component: ShowMoreButton,
};

export default meta;

type Story = StoryObj<typeof ShowMoreButton>;

export const Preview: Story = {
  tags: ["!dev"],
  args: {
    text: "Vis flere",
    onClick: () => {
      // eslint-disable-next-line no-alert -- It's an example
      alert("Clicked");
    },
  },
};
