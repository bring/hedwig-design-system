/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "../../box";
import { Grid } from ".";

type Story = StoryObj<typeof Grid>;

const meta: Meta<typeof Grid> = {
  title: "Layout/Grid",
  component: Grid,
};

export default meta;

export const Preview: Story = {
  args: {
    gap: "12-16",
    span: { initial: 12, small: 4 },
    children: (
      <>
        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
      </>
    ),
  },
};
