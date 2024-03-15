/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { Fieldset } from "../fieldset";
import { Radiobutton } from "./index";

const meta: Meta<typeof Radiobutton> = {
  title: "Radiobutton",
  component: Radiobutton,
};

export default meta;

type Story = StoryObj<typeof Radiobutton>;

export const PlainRadiobutton: Story = {
  name: "Radio buttons",
  render: (_props) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--hds-spacing-small-2)",
      }}
    >
      <Radiobutton name="group1">This is a radiobutton</Radiobutton>
      <Radiobutton hasError name="group1">
        This is a radiobutton with error
      </Radiobutton>
    </div>
  ),
};

export const BoundedRadiobutton: Story = {
  name: "Radio buttons with bounding box",
  render: (_props) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--hds-spacing-small-2)",
      }}
    >
      <Radiobutton name="group2" variant="bounding-box">
        This is a radiobutton with bounding box
      </Radiobutton>
      <Radiobutton hasError name="group2" variant="bounding-box">
        This is a radiobutton with bounding box and error
      </Radiobutton>
    </div>
  ),
};

export const RadiobuttonInFieldset: Story = {
  name: "Radio buttons in a field set",
  render: (_props) => (
    <Fieldset legend="Radio buttons in a field set">
      <Radiobutton name="group3" variant="bounding-box">
        First option
      </Radiobutton>
      <Radiobutton name="group3" variant="bounding-box">
        Second option
      </Radiobutton>
      <Radiobutton name="group3" variant="bounding-box">
        Third option
      </Radiobutton>
    </Fieldset>
  ),
};

export const DetailedContentRadiobutton: Story = {
  name: "Radio buttons with title",
  render: (_props) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--hds-spacing-small-2)",
      }}
    >
      <Radiobutton name="group4" title="Option 1">
        Detailed description if needed
      </Radiobutton>
      <Radiobutton hasError name="group4" title="Option 2">
        Detailed description if needed
      </Radiobutton>
    </div>
  ),
};

export const DetailedContentRadiobuttonWithBoundingBox: Story = {
  name: "Radio buttons with bounding box and title",
  render: (_props) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--hds-spacing-small-2)",
      }}
    >
      <Radiobutton name="group5" title="Option 1" variant="bounding-box">
        Detailed description if needed
      </Radiobutton>
      <Radiobutton hasError name="group5" title="Option 2" variant="bounding-box">
        Detailed description if needed
      </Radiobutton>
    </div>
  ),
};
