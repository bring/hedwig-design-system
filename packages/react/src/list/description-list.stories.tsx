/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import type { DLProps } from "./description-list";
import { DD, DL, DT } from ".";

type Story = StoryObj<typeof DL>;
type DLVariant = Pick<DLProps, "variant">;

const DLStory = (variant: DLVariant): Story => ({
  args: {
    variant: variant.variant,
    children: (
      <>
        <DT>Vekt</DT>
        <DD>12 kg</DD>
        <DT>Antall kolli</DT>
        <DD>2</DD>
        <DT>Sendingsnummer</DT>
        <DD>7000001</DD>
        <DT>Avsender</DT>
        <DD>Fjellsport</DD>
      </>
    ),
  },
});

export const Horizontal: Story = DLStory({ variant: "horizontal" });
export const Vertical: Story = DLStory({ variant: "vertical" });
export const Default: Story = DLStory({ variant: "vertical" });

const meta: Meta<typeof DL> = {
  title: "Description List",
  component: DL,
  argTypes: {
    children: {
      description: "Either DT or DD elements",
    },
    variant: {
      type: "string",
      defaultValue: "vertical",
      description: "Direction of the description list",
    },
  },
};
export default meta;
