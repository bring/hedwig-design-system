/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../checkbox";
import { Fieldset } from ".";

const meta: Meta<typeof Fieldset> = {
  title: "🚧 Fieldset",
  component: Fieldset,
};

export default meta;

type Story = StoryObj<typeof Fieldset>;

export const Default: Story = {
  args: {
    legend: "Default fieldset",
    errorMessage: "",
  },
  argTypes: {
    legendProps: { if: { arg: "needThisToHidePropInStorybook", exists: true } },
  },
  render: (props) => (
    <Fieldset {...props}>
      <Checkbox defaultChecked value="Hello">
        Hello
      </Checkbox>
      <Checkbox value="Hello">Hello</Checkbox>
      <Checkbox value="Hello">Hello</Checkbox>
    </Fieldset>
  ),
};

export const LargeLegend: Story = {
  args: {
    legend: "Fieldset with large legend",
    legendProps: { size: "large" },
    errorMessage: "Something's wrong",
  },
  render: (props) => (
    <Fieldset {...props}>
      <Checkbox defaultChecked value="Hello">
        Hello
      </Checkbox>
      <Checkbox hasError value="Hello">
        Hello
      </Checkbox>
      <Checkbox value="Hello">Hello</Checkbox>
    </Fieldset>
  ),
};

export const FieldsetError: Story = {
  args: {
    legend: "Fieldset with error message",
    errorMessage: "Something's wrong",
  },
  render: (props) => (
    <Fieldset {...props}>
      <Checkbox defaultChecked value="Hello">
        Hello
      </Checkbox>
      <Checkbox hasError value="Hello">
        Hello
      </Checkbox>
      <Checkbox value="Hello">Hello</Checkbox>
    </Fieldset>
  ),
};
