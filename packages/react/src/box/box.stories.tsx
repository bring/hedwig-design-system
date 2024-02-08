/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Typography } from "../typography";
import { Link } from "../link";
import { Box } from ".";

const meta: Meta<typeof Box> = {
  title: "Box",
  component: Box,
  args: {
    closeable: false,
    children: (
      <>
        <Typography variant="h3-title">Box content</Typography>
        <Typography _unstableSpacing>
          This is some body copy in a box, but you can basically add anything you want in here.
        </Typography>
        <Link href="#a-link-for-whatever-reason">A link for whatever reason</Link>
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

export const AreYouSureDialog: Story = {
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
        <Typography variant="h3-title">
          A customomized box
          {closeTimer !== null && ` - closing in ${closeTimer} seconds`}
        </Typography>
        <Typography _unstableSpacing>
          With a custom close button, and a custom content. The content can be anything you like.
        </Typography>
      </Box>
    );
  },
};
