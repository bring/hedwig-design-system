/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { Fieldset } from "../fieldset";
import { Checkbox } from "./index";

const meta: Meta<typeof Checkbox> = {
  title: "Form/Checkbox",
  component: Checkbox,
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const JustACheckbox: Story = {
  name: "Just a checkbox",
  args: {
    title: "",
    children: "Just a checkbox",
    checked: true,
    errorMessage: "",
    variant: "plain",
    onChange: () => {
      /**/
    },
  },
  argTypes: {
    variant: { control: "inline-radio", options: ["plain", "bounding-box"] },
  },
};

export const PlainCheckboxes: Story = {
  name: "Checkboxes",
  render: (_props) => (
    <Fieldset legend="Checkboxes should be grouped in a Fieldset">
      <Checkbox>This is a checkbox</Checkbox>
      <Checkbox>This is another checkbox</Checkbox>
    </Fieldset>
  ),
};

export const PlainCheckboxesWithError: Story = {
  name: "Checkboxes with error",
  render: (_props) => (
    <Fieldset
      legend="Fieldset will aid you with styling and aria when it is provided an error message"
      errorMessage="Something is wrong"
    >
      <Checkbox>This is a checkbox</Checkbox>
      <Checkbox>This is another checkbox</Checkbox>
    </Fieldset>
  ),
};

export const PlainCheckboxeWithError: Story = {
  name: "Standalone checkbox with error message",
  args: {
    errorMessage: "Something is wrong",
    children: "This is a checkbox with an error message",
  },
};

export const BoundedCheckbox: Story = {
  name: "Checkbox with bounding box",
  render: (_props) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--hds-spacing-8)",
      }}
    >
      <Checkbox variant="bounding-box">This is a checkbox with bounding box</Checkbox>
      <Checkbox errorMessage="Something is wrong" variant="bounding-box">
        This is a checkbox with bounding box and error
      </Checkbox>
    </div>
  ),
};

export const DetailedContentCheckbox: Story = {
  name: "Checkbox with title",
  render: (_props) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--hds-spacing-8)",
      }}
    >
      <Checkbox title="Check this box">Detailed description if needed</Checkbox>
      <Checkbox errorMessage="Something is wrong" title="Checkbox with error">
        Detailed description if needed
      </Checkbox>
    </div>
  ),
};

export const DetailedContentCheckboxWithBoundingBox: Story = {
  name: "Checkbox with bounding box and title",
  render: (_props) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--hds-spacing-8)",
      }}
    >
      <Checkbox title="Check this box" variant="bounding-box">
        Detailed description if needed
      </Checkbox>
      <Checkbox
        errorMessage="Something is wrong"
        title="Checkbox with error"
        variant="bounding-box"
      >
        Detailed description if needed
      </Checkbox>
    </div>
  ),
};
