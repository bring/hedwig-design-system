/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { DescriptionList } from ".";

type Story = StoryObj<typeof DescriptionList>;

const meta: Meta<typeof DescriptionList> = {
  title: "Description List",
  component: DescriptionList,
};

export default meta;

export const Preview: Story = {
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
