/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
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

export const PlainCheckbox: Story = {
  name: "Checkboxes",
  render: (_props) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--hds-spacing-4)",
      }}
    >
      <Checkbox>This is a checkbox</Checkbox>
      <Checkbox hasError>This is a checkbox with error</Checkbox>
      <Checkbox errorMessage="Something is wrong">
        This is a checkbox with an error message
      </Checkbox>
    </div>
  ),
};

export const BoundedCheckbox: Story = {
  name: "Checkbox with bounding box",
  render: (_props) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--hds-spacing-4)",
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
        gap: "var(--hds-spacing-4)",
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
        gap: "var(--hds-spacing-4)",
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
