/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../checkbox";
import { Fieldset } from ".";

const meta: Meta<typeof Fieldset> = {
  title: "Form/Fieldset",
  component: Fieldset,
};

export default meta;

type Story = StoryObj<typeof Fieldset>;

export const Preview: Story = {
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
