/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "../text";
import { Link } from "../link";
import { Box } from ".";

const meta: Meta<typeof Box> = {
  title: "Box",
  component: Box,
  argTypes: {
    variant: {
      options: ["light-grey", "lighter", "white", "warning"],
      control: {
        type: "radio",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Box>;

export const Preview: Story = {
  tags: ["!dev"],
  args: {
    closeable: false,
    children: (
      <>
        <Text variant="h3-title" as="h3">
          Box content
        </Text>
        <Text className="hds-mt-16-20">
          This is some body copy in a box, but you can basically add anything you want in here.
        </Text>
        <Text className="hds-mt-16-20">
          <Link href="#a-link-for-whatever-reason">A link for whatever reason</Link>
        </Text>{" "}
      </>
    ),
  },
};
