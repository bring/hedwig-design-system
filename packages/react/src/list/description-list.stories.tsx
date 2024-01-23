/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { DescriptionList } from ".";

type Story = StoryObj<typeof DescriptionList>;

const meta: Meta<typeof DescriptionList> = {
  title: "Description List",
  component: DescriptionList,
  args: {
    children: (
      <>
        <dt>Vekt</dt>
        <dl>12 kg</dl>
        <dt>Antall kolli</dt>
        <dl>2</dl>
        <dt>Sendingsnummer</dt>
        <dl>7000001</dl>
        <dt>Avsender</dt>
        <dl>Fjellsport</dl>
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
          <dt>Vekt</dt>
          <dl>12 kg</dl>
        </div>
        <div>
          <dt>Antall kolli</dt>
          <dl>2</dl>
        </div>
        <div>
          <dt>Sendingsnummer</dt>
          <dl>7000001</dl>
        </div>
        <div>
          <dt>Avsender</dt>
          <dl>Fjellsport</dl>
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
        <dt>Vekt</dt>
        <dl>12 kg</dl>
        <dt>
          <p>Title</p>
        </dt>
        <dl>
          <p>Paragraph</p>
        </dl>
      </>
    ),
  },
};

export const HorizontalLongContent: Story = {
  args: {
    variant: "horizontal",
    children: (
      <>
        <dt>Vekt</dt>
        <dl>12 kg</dl>
        <dt>
          <p>Title</p>
        </dt>
        <dl>
          <p>
            ParagraphParagraphParagraphParagraphParagraphParagraphParagraphParagraphParagraphParagraphParagraphParagraphParagraphParagraphParagraphParagraph
          </p>
        </dl>
        <dt>Avsender</dt>
        <dl>Fjellsport</dl>
      </>
    ),
  },
};
