/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { Blockquote } from ".";

const meta: Meta<typeof Blockquote> = {
  title: "Blockquote",
  component: Blockquote,
};

export default meta;

export const Preview: StoryObj<typeof Blockquote> = {
  args: {
    children: (
      <>
        <p>... but they&rsquo;ll never take our freedom!</p>
        <footer>William Wallace</footer>
      </>
    ),
  },
};
