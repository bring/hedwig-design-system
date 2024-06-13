/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup } from "./radio-group";
import { RadioButton } from "./index";

const meta: Meta<typeof RadioGroup> = {
  title: "Form/Radiogroup",
  component: RadioGroup,
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const Preview: Story = {
  args: {
    legend: "Radio group with radio buttons",
    errorMessage: "",
    name: "group1",
    value: undefined,
    onChange: () => {
      return undefined;
    },
  },
  argTypes: {
    value: {
      description: "Use this prop for a controlled value",
      control: "inline-radio",
      options: [undefined, "First RadioButton", "Second RadioButton"],
    },
  },
  render: (props) => (
    <RadioGroup {...props}>
      <RadioButton value="First RadioButton">This is a RadioButton</RadioButton>
      <RadioButton value="Second RadioButton">This is another RadioButton</RadioButton>
    </RadioGroup>
  ),
};
