/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { Figure } from ".";

const meta: Meta<typeof Figure> = {
  title: "Figure",
  component: Figure,
};

export default meta;

export const Preview: StoryObj<typeof Figure> = {
  tags: ["!dev"],
  args: {
    children: (
      <>
        <img src="https://placedog.net/500/280" alt="A very good dog" />
        <figcaption>Dogs are the best</figcaption>
      </>
    ),
  },
};
