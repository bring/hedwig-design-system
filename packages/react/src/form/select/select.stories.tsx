/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { Select } from ".";

const meta: Meta<typeof Select> = {
  title: "Select",
  component: Select,
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    label: "Default select",
    errorMessage: "",
    disabled: false,
    variant: "default",
  },
  argTypes: {
    variant: { control: "inline-radio", options: ["default", "white"] },
  },
  render: (props) => (
    <Select {...props}>
      <option disabled hidden selected value="">
        Please select
      </option>
      <option value="1">option 1</option>
      <option value="2">option 2</option>
      <option value="3">option 3</option>
    </Select>
  ),
};

export const White: Story = {
  args: {
    label: "White select",
    variant: "white",
  },
  render: (props) => (
    <div style={{ background: "var(--hds-ui-colors-light-grey-fill)", padding: "1em" }}>
      <Select {...props}>
        <option disabled hidden selected value="">
          Please select
        </option>
        <option value="1">option 1</option>
        <option value="2">option 2</option>
        <option value="3">option 3</option>
      </Select>
    </div>
  ),
};

export const DefaultWithError: Story = {
  args: {
    label: "select with error",
    name: "name",
    id: "someId",
    errorMessage: "Something is wrong",
  },
  render: (props) => (
    <Select {...props}>
      <option disabled hidden selected value="">
        Please select
      </option>
      <option value="1">option 1</option>
      <option value="2">option 2</option>
      <option value="3">option 3</option>
    </Select>
  ),
};

export const WhiteWithError: Story = {
  args: {
    label: "White select with error",
    variant: "white",
    name: "name",
    id: "someId",
    errorMessage: "Something is wrong",
  },
  render: (props) => (
    <div style={{ background: "var(--hds-ui-colors-light-grey-fill)", padding: "1em" }}>
      <Select {...props}>
        <option disabled hidden selected value="">
          Please select
        </option>
        <option value="1">option 1</option>
        <option value="2">option 2</option>
        <option value="3">option 3</option>
      </Select>
    </div>
  ),
};

export const DefaulDisabled: Story = {
  args: {
    label: "Default select disabled",
    name: "name",
    id: "someId",
    disabled: true,
  },
  render: (props) => (
    <Select {...props}>
      <option disabled hidden selected value="">
        Please select
      </option>
      <option value="1">option 1</option>
      <option value="2">option 2</option>
      <option value="3">option 3</option>
    </Select>
  ),
};

export const WhiteDisabled: Story = {
  args: {
    label: "White select disabled",
    variant: "white",
    name: "name",
    id: "someId",
    disabled: true,
  },
  render: (props) => (
    <div style={{ background: "var(--hds-ui-colors-light-grey-fill)", padding: "1em" }}>
      <Select {...props}>
        <option disabled hidden selected value="">
          Please select
        </option>
        <option value="1">option 1</option>
        <option value="2">option 2</option>
        <option value="3">option 3</option>
      </Select>
    </div>
  ),
};
