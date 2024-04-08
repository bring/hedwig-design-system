/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { VStack } from "../../layout";
import { Radiobutton, RadioGroup } from "./index";

const meta: Meta<typeof Radiobutton> = {
  title: "Form/Radiobutton/Radiobutton",
  component: Radiobutton,
};

export default meta;

type Story = StoryObj<typeof Radiobutton>;

export const JustARadiobutton: Story = {
  name: "Just a radiobutton",
  args: {
    title: "",
    children: "Just a radiobutton",
    checked: true,
    hasError: false,
    variant: "plain",
  },
  argTypes: {
    variant: { control: "inline-radio", options: ["plain", "bounding-box"] },
  },
};

export const PlainRadiobuttons: Story = {
  name: "Radiobuttons",
  render: (_props) => (
    <RadioGroup legend="Radiobuttons should be grouped in a RadioGroup" name="group1">
      <Radiobutton>This is a radiobutton</Radiobutton>
      <Radiobutton>This is another radiobutton</Radiobutton>
    </RadioGroup>
  ),
};

export const PlainRadiobuttonsWithError: Story = {
  name: "Radiobuttons with error",
  render: (_props) => (
    <RadioGroup
      legend="RadioGroup will aid you with styling and aria when it is provided an error message"
      errorMessage="Something is wrong"
      name="group1error"
    >
      <Radiobutton>This is a radiobutton</Radiobutton>
      <Radiobutton>This is another radiobutton</Radiobutton>
    </RadioGroup>
  ),
};

export const BoundedRadiobutton: Story = {
  name: "Radiobuttons with bounding box",
  render: (_props) => (
    <VStack gap="8" role="radiogroup">
      <Radiobutton name="group2" variant="bounding-box">
        This is a radiobutton with bounding box
      </Radiobutton>
      <Radiobutton hasError name="group2" variant="bounding-box">
        This is a radiobutton with bounding box and error
      </Radiobutton>
    </VStack>
  ),
};

export const DetailedContentRadiobutton: Story = {
  name: "Radiobuttons with title",
  render: (_props) => (
    <VStack gap="8" role="radiogroup">
      <Radiobutton name="group4" title="Option 1">
        Detailed description if needed
      </Radiobutton>
      <Radiobutton hasError name="group4" title="Option 2">
        Detailed description if needed
      </Radiobutton>
    </VStack>
  ),
};

export const DetailedContentRadiobuttonWithBoundingBox: Story = {
  name: "Radiobuttons with bounding box and title",
  render: (_props) => (
    <VStack gap="8" role="radiogroup">
      <Radiobutton name="group5" title="Option 1" variant="bounding-box">
        Detailed description if needed
      </Radiobutton>
      <Radiobutton hasError name="group5" title="Option 2" variant="bounding-box">
        Detailed description if needed
      </Radiobutton>
    </VStack>
  ),
};
