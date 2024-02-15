/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./index";

const meta: Meta<typeof Checkbox> = {
  title: "Checkbox",
  component: Checkbox,
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const PlainCheckbox: Story = {
  name: "Checkbox",
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--hds-spacing-small-4)",
      }}
    >
      <Checkbox>This is a checkbox</Checkbox>
      <Checkbox hasError>This is a checkbox with error</Checkbox>
      <Checkbox disabled>This is a disabled checkbox</Checkbox>
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
        gap: "var(--hds-spacing-small-4)",
      }}
    >
      <Checkbox variant="bounding-box">This is a checkbox with bounding box</Checkbox>
      <Checkbox hasError variant="bounding-box">
        This is a checkbox with bounding box and error
      </Checkbox>
      <Checkbox disabled variant="bounding-box">
        This is a disabled checkbox with bounding box
      </Checkbox>
    </div>
  ),
};
