/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup } from "./radiogroup";
import { Radiobutton } from "./index";

const meta: Meta<typeof RadioGroup> = {
  title: "Form/Radiobutton/Radiogroup",
  component: RadioGroup,
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const PlainRadioGroup: Story = {
  name: "Radio group with radiobuttons",
  args: {
    legend: "Radio group with radiobuttons",
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
      options: [undefined, "First radiobutton", "Second radiobutton"],
    },
  },
  render: (props) => (
    <RadioGroup {...props}>
      <Radiobutton value="First radiobutton">This is a radiobutton</Radiobutton>
      <Radiobutton value="Second radiobutton">This is another radiobutton</Radiobutton>
    </RadioGroup>
  ),
};
