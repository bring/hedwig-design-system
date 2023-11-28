/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { clsx } from "@postenbring/hedwig-css/typed-classname/index.mjs";
import { useState } from "react";
import { Box, BoxCloseButton } from ".";

const meta: Meta<typeof Box> = {
  title: "Box",
  component: Box,
  args: {
    closeable: false,
    children: (
      <>
        <h3 className={clsx("hds-typography-h3", "hds-typography-h3--title")} style={{ margin: 0 }}>
          Replace me please
        </h3>
        <p>
          Swap this content with a component whatever you like. Prefferably text, list, button and
          simple inputs.
        </p>
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
        {/* Choosing to render the close button manualy */}
        <BoxCloseButton
          onClick={() => {
            closeTimer === null && countDownFrom(5);
          }}
        />
        <h3 className={clsx("hds-typography-h3", "hds-typography-h3--title")} style={{ margin: 0 }}>
          A customomized box
          {closeTimer !== null && ` - closing in ${closeTimer} seconds`}
        </h3>
        <p>
          With a custom close button, and a custom content. The content can be anything you like.
        </p>
      </Box>
    );
  },
};
