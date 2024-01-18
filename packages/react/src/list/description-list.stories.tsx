/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { DescriptionDetails, DescriptionList, DescriptionTerm } from ".";

type Story = StoryObj<typeof DescriptionList>;

const meta: Meta<typeof DescriptionList> = {
  title: "Description List",
  component: DescriptionList,
  args: {
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
};

export default meta;

export const Vertical: Story = { args: { variant: "vertical" } };
export const Horizontal: Story = { args: { variant: "horizontal" } };

export const WrappedInDivs: Story = {
  args: {
    children: (
      <>
        <div>
          <DescriptionTerm>Vekt</DescriptionTerm>
          <DescriptionDetails>12 kg</DescriptionDetails>
        </div>
        <div>
          <DescriptionTerm>Antall kolli</DescriptionTerm>
          <DescriptionDetails>2</DescriptionDetails>
        </div>
        <div>
          <DescriptionTerm>Sendingsnummer</DescriptionTerm>
          <DescriptionDetails>7000001</DescriptionDetails>
        </div>
        <div>
          <DescriptionTerm>Avsender</DescriptionTerm>
          <DescriptionDetails>Fjellsport</DescriptionDetails>
        </div>
      </>
    ),
  },
};

export const Paragraph: Story = {
  name: "<p> tag as child",
  args: {
    variant: "horizontal",
    children: (
      <>
        <DescriptionTerm>Vekt</DescriptionTerm>
        <DescriptionDetails>12 kg</DescriptionDetails>
        <DescriptionTerm>
          <p>Title</p>
        </DescriptionTerm>
        <DescriptionDetails>
          <p>Paragraph</p>
        </DescriptionDetails>
      </>
    ),
  },
};

export const HorizontalLongContent: Story = {
  args: {
    variant: "horizontal",
    children: (
      <>
        <DescriptionTerm>Vekt</DescriptionTerm>
        <DescriptionDetails>12 kg</DescriptionDetails>
        <DescriptionTerm>
          <p>Title</p>
        </DescriptionTerm>
        <DescriptionDetails>
          <p>
            ParagraphParagraphParagraphParagraphParagraphParagraphParagraphParagraphParagraphParagraphParagraphParagraphParagraphParagraphParagraphParagraph
          </p>
        </DescriptionDetails>
        <DescriptionTerm>Avsender</DescriptionTerm>
        <DescriptionDetails>Fjellsport</DescriptionDetails>
      </>
    ),
  },
};
