/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { Select } from ".";

const meta: Meta<typeof Select> = {
  title: "Form/Select",
  component: Select,
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Preview: Story = {
  tags: ["!dev"],
  args: {
    label: "Default select",
    errorMessage: "",
    size: "large",
  },
  argTypes: {
    size: { control: "inline-radio", options: ["large", "small"] },
  },
  render: (props) => (
    <Select {...props} defaultValue="">
      <option disabled hidden value="">
        Please select
      </option>
      <option value="1">option 1</option>
      <option value="2">option 2</option>
      <option value="3">option 3</option>
    </Select>
  ),
};
