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
        <dd>12 kg</dd>
        <dt>Antall kolli</dt>
        <dd>2</dd>
        <dt>Sendingsnummer</dt>
        <dd>7000001</dd>
        <dt>Avsender</dt>
        <dd>Fjellsport</dd>
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
          <dd>12 kg</dd>
        </div>
        <div>
          <dt>Antall kolli</dt>
          <dd>2</dd>
        </div>
        <div>
          <dt>Sendingsnummer</dt>
          <dd>7000001</dd>
        </div>
        <div>
          <dt>Avsender</dt>
          <dd>Fjellsport</dd>
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
        <dd>12 kg</dd>
        <dt>
          <p>Title</p>
        </dt>
        <dd>
          <p>Paragraph</p>
        </dd>
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
        <dd>12 kg</dd>
        <dt>
          <p>Title</p>
        </dt>
        <dd>
          <p>
            ParagraphParagraphParagraphParagraphParagraphParagraphParagraphParagraphParagraphParagraphParagraphParagraphParagraphParagraphParagraphParagraph
          </p>
        </dd>
        <dt>Avsender</dt>
        <dd>Fjellsport</dd>
      </>
    ),
  },
};
