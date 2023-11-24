/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { Input } from ".";

const meta: Meta<typeof Input> = {
  title: "Input",
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

export const PlainInput: Story = {
  args: {
    label: "Some kind of input",
  },
};

export const PlainInputWithError: Story = {
  args: {
    label: "Some kind of input with error",
    errorMessage: "This is invalid",
    placeholder: "I am a placeholder",
  },
};

export const WhiteInput: Story = {
  args: {
    label: "Some kind of white input",
    variant: "white",
    placeholder: "I am a placeholder",
  },
  render: (props) => (
    <div style={{ background: "var(--hds-ui-colors-light-grey-fill)", padding: "1em" }}>
      <Input {...props} />
    </div>
  ),
};

export const WhiteInputWithError: Story = {
  args: {
    label: "Some kind of white input",
    variant: "white",
    placeholder: "I am a placeholder",
    errorMessage: "This is invalid",
  },
  render: (props) => (
    <div style={{ background: "var(--hds-ui-colors-light-grey-fill)", padding: "1em" }}>
      <Input {...props} />
    </div>
  ),
};

export const LinedInput: Story = {
  args: {
    label: "Some kind of lined input",
    variant: "lined",
    placeholder: "I am a placeholder",
  },
};

export const LinedInputWithError: Story = {
  args: {
    label: "Some kind of lined input with error",
    variant: "lined",
    errorMessage: "This is invalid",
    placeholder: "I am a placeholder",
  },
};

export const ReadonlyInput: Story = {
  args: {
    label: "Some kind of readonly input",
    readOnly: true,
    placeholder: "I am a placeholder",
  },
};

export const ReadonlyInputWithError: Story = {
  args: {
    label: "Some kind of readonly input",
    readOnly: true,
    placeholder: "I am a placeholder",
    errorMessage: "This is invalid",
  },
};

export const DisabledInput: Story = {
  args: {
    label: "Some kind of disabled input",
    disabled: true,
    placeholder: "I am a placeholder",
  },
};

export const DisabledInputWithError: Story = {
  args: {
    label: "Some kind of disabled input",
    disabled: true,
    placeholder: "I am a placeholder",
    errorMessage: "This is invalid",
  },
};
