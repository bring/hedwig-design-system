/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Text } from "../text";
import { Link } from "../link";
import { Box } from ".";

const meta: Meta<typeof Box> = {
  title: "Box",
  component: Box,
  args: {
    closeable: false,
    children: (
      <>
        <Text variant="h3-title" as="h2">
          Box content header
        </Text>
        <Text _unstableSpacing>
          Kepp the content in here short and to the point. This is some body copy in a box and a
          link, but you can basically add anything you want in here.
        </Text>
        <Link href="#a-link-for-whatever-reason">A link if thats what you need</Link>
      </>
    ),
  },
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
export const LightGreyBox: Story = {
  args: {
    variant: "light-grey",
  },
};

export const LighterBox: Story = {
  args: {
    closeable: true,
    variant: "lighter",
  },
};

export const WhiteBox: Story = {
  args: {
    closeable: true,
    variant: "white",
  },
};

export const WarningBox: Story = {
  args: {
    closeable: true,
    variant: "warning",
  },
};

export const OnCloeCallback: Story = {
  args: {
    closeable: true,
    variant: "warning",
    // eslint-disable-next-line no-alert -- Storybook story
    onClose: () => window.confirm("Are you sure you want to close?"),
  },
};

export const Custom: Story = {
  render: function CustomBox() {
    const [closeTimer, setCloseTimer] = useState<number | null>(null);
    function countDownFrom(seconds: number) {
      if (seconds > 0) {
        setCloseTimer(seconds);
        window.setTimeout(() => {
          countDownFrom(seconds - 1);
        }, 1000);
      } else {
        setCloseTimer(0);
      }
    }

    // Choosing to not render the box at all instead of hiding it with CSS
    if (closeTimer === 0) {
      // eslint-disable-next-line react/jsx-no-useless-fragment -- Typescript did not like it when I returned null in a story
      return <></>;
    }

    return (
      <Box variant="lighter">
        {/* Choosing to render the close button manually */}
        <Box.CloseButton
          onClick={() => {
            closeTimer === null && countDownFrom(5);
          }}
        />
        <Text variant="h3-title" as="h2">
          A customomized box
          {closeTimer !== null && ` - closing in ${closeTimer} seconds`}
        </Text>
        <Text _unstableSpacing>
          With a custom close button, and a custom content. The content can be anything you like.
        </Text>
      </Box>
    );
  },
};
