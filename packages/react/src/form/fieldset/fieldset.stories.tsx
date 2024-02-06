/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
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
    _unstableAriaLiveOnErrorMessage: { if: { arg: "needThisToHidePropInStorybook", exists: true } },
  },
  render: (props) => (
    <Fieldset {...props}>
      <label style={{ display: "block" }}>
        <input type="checkbox" value="Hello " />
        Hello
      </label>
      <label style={{ display: "block" }}>
        <input type="checkbox" value="Hello " />
        Hello
      </label>
      <label style={{ display: "block" }}>
        <input type="checkbox" value="Hello " />
        Hello
      </label>
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
      <label style={{ display: "block" }}>
        <input type="checkbox" value="Hello " />
        Hello
      </label>
      <label style={{ display: "block" }}>
        <input type="checkbox" value="Hello " />
        Hello
      </label>
      <label style={{ display: "block" }}>
        <input type="checkbox" value="Hello " />
        Hello
      </label>
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
      <label style={{ display: "block" }}>
        <input type="checkbox" value="Hello " />
        Hello
      </label>
      <label style={{ display: "block" }}>
        <input type="checkbox" value="Hello " />
        Hello
      </label>
      <label style={{ display: "block" }}>
        <input type="checkbox" value="Hello " />
        Hello
      </label>
    </Fieldset>
  ),
};
