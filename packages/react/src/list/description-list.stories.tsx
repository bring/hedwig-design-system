/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import type { DLProps } from "./description-list";
import { DescriptionDetails, DescriptionList, DescriptionTerm } from ".";

type Story = StoryObj<typeof DescriptionList>;
type DLVariant = Pick<DLProps, "variant">;

const DLStory = (variant: DLVariant): Story => ({
  args: {
    variant: variant.variant,
    children: (
      <>
        <DescriptionTerm>Vekt</DescriptionTerm>
        <DescriptionDetails>12 kg</DescriptionDetails>
        <DescriptionTerm>Antall kolli</DescriptionTerm>
        <DescriptionDetails>2</DescriptionDetails>
        <DescriptionTerm>Sendingsnummer</DescriptionTerm>
        <DescriptionDetails>7000001</DescriptionDetails>
        <DescriptionTerm>Avsender</DescriptionTerm>
        <DescriptionDetails>Fjellsport</DescriptionDetails>
      </>
    ),
  },
});

export const Horizontal: Story = DLStory({ variant: "horizontal" });
export const Vertical: Story = DLStory({ variant: "vertical" });
export const Default: Story = DLStory({ variant: "vertical" });

const meta: Meta<typeof DescriptionList> = {
  title: "Description List",
  component: DescriptionList,
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
