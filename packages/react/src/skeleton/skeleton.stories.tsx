/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { VStack } from "../layout";
import { Skeleton } from ".";

const meta: Meta<typeof Skeleton> = {
  title: "Skeleton",
  component: Skeleton,
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Preview: Story = {
  render: () => (
    <VStack gap="8">
      <Skeleton variant="circle">
        <div style={{ height: "6rem", width: "6rem", background: "deeppink" }}>Avatar</div>
      </Skeleton>
      <div>
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" width="80%" />
      </div>
    </VStack>
  ),
};
