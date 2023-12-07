/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from ".";

const meta: Meta<typeof Dropdown> = {
  title: "Dropdown",
  component: Dropdown,
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    label: "Default dropdown",
    variant: "default",
  },
  render: (props) => (
    <Dropdown {...props}>
      <option disabled hidden selected value="">
        Please select
      </option>
      <option value="1">option 1</option>
      <option value="2">option 2</option>
      <option value="3">option 3</option>
    </Dropdown>
  ),
};

export const Lined: Story = {
  args: {
    label: "Lined dropdown",
    name: "name",
    id: "someId",
    variant: "lined",
  },
  render: (props) => (
    <Dropdown {...props}>
      <option disabled hidden selected value="">
        Please select
      </option>
      <option value="1">option 1</option>
      <option value="2">option 2</option>
      <option value="3">option 3</option>
    </Dropdown>
  ),
};

export const White: Story = {
  args: {
    label: "White dropdown",
    variant: "white",
  },
  render: (props) => (
    <div style={{ background: "var(--hds-ui-colors-light-grey-fill)", padding: "1em" }}>
      <Dropdown {...props}>
        <option disabled hidden selected value="">
          Please select
        </option>
        <option value="1">option 1</option>
        <option value="2">option 2</option>
        <option value="3">option 3</option>
      </Dropdown>
    </div>
  ),
};

export const DefaultWithError: Story = {
  args: {
    label: "Dropdown with error",
    variant: "default",
    name: "name",
    id: "someId",
    errorMessage: "Something is wrong",
  },
  render: (props) => (
    <Dropdown {...props}>
      <option disabled hidden selected value="">
        Please select
      </option>
      <option value="1">option 1</option>
      <option value="2">option 2</option>
      <option value="3">option 3</option>
    </Dropdown>
  ),
};

export const LinedWithError: Story = {
  args: {
    label: "White dropdown with error",
    variant: "lined",
    name: "name",
    id: "someId",
    errorMessage: "Something is wrong",
  },
  render: (props) => (
    <Dropdown {...props}>
      <option disabled hidden selected value="">
        Please select
      </option>
      <option value="1">option 1</option>
      <option value="2">option 2</option>
      <option value="3">option 3</option>
    </Dropdown>
  ),
};

export const WhiteWithError: Story = {
  args: {
    label: "White dropdown with error",
    variant: "white",
    name: "name",
    id: "someId",
    errorMessage: "Something is wrong",
  },
  render: (props) => (
    <div style={{ background: "var(--hds-ui-colors-light-grey-fill)", padding: "1em" }}>
      <Dropdown {...props}>
        <option disabled hidden selected value="">
          Please select
        </option>
        <option value="1">option 1</option>
        <option value="2">option 2</option>
        <option value="3">option 3</option>
      </Dropdown>
    </div>
  ),
};
