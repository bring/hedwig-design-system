/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "../../box";
import { Stack } from ".";

type Story = StoryObj<typeof Stack>;

const meta: Meta<typeof Stack> = {
  title: "Layout/Stack",
  component: Stack,
};

export default meta;

export const Preview: Story = {
  args: {
    gap: "12-16",
    direction: { initial: "column", small: "row" },
    children: (
      <>
        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
      </>
    ),
  },
};
