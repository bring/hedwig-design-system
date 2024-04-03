/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../checkbox";
import { Radiobutton } from "../radiobutton";
import { Fieldset } from ".";

const meta: Meta<typeof Fieldset> = {
  title: "Form/Fieldset",
  component: Fieldset,
};

export default meta;

type Story = StoryObj<typeof Fieldset>;

export const Default: Story = {
  args: {
    legend: "Default fieldset",
    errorMessage: "",
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

export const FieldsetErrorCheckboxes: Story = {
  args: {
    legend: "Checkboxes wrapped in Fieldset will get error styling when Fieldset has errorMessage",
    errorMessage: "Something's wrong",
  },
  render: (props) => (
    <Fieldset {...props}>
      <Checkbox value="Hello">Hello</Checkbox>
      <Checkbox value="Hello">Hello</Checkbox>
      <Checkbox value="Hello">Hello</Checkbox>
    </Fieldset>
  ),
};

export const FieldsetErrorRadiobuttons: Story = {
  args: {
    legend: (
      <>
        Radiobuttons wrapped in Fieldset will get error styling when Fieldset has errorMessage
        <br />
        However, you should probably use RadioGroup instead of Fieldset for Radiobuttons
      </>
    ),
    errorMessage: "Something's wrong",
  },
  render: (props) => (
    <Fieldset {...props}>
      <Radiobutton value="Hello" name="radiogroup">
        Hello
      </Radiobutton>
      <Radiobutton value="Hello" name="radiogroup">
        Hello
      </Radiobutton>
      <Radiobutton value="Hello" name="radiogroup">
        Hello
      </Radiobutton>
    </Fieldset>
  ),
};
