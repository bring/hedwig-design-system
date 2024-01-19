/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { PrimaryButton } from "../button";
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
    placeholder: "I am a placeholder",
  },
};

export const PlainInputWithError: Story = {
  args: {
    label: "Some kind of input with error",
    errorMessage: "This is invalid",
    placeholder: "I am a placeholder",
  },
};

export const ReadonlyInput: Story = {
  args: {
    label: "Some kind of readonly input",
    readOnly: true,
    value: "This is a read-only value",
  },
};

export const ReadonlyInputWithError: Story = {
  args: {
    label: "Some kind of readonly input",
    readOnly: true,
    value: "This is a read-only value",
    errorMessage: "This is invalid",
  },
};

export const DisabledInput: Story = {
  args: {
    label: "Some kind of disabled input",
    disabled: true,
    value: "This input is disabled",
  },
};

export const DisabledInputWithError: Story = {
  args: {
    label: "Some kind of disabled input",
    disabled: true,
    value: "This input is disabled",
    errorMessage: "This is invalid",
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

export const WhiteReadonlyInput: Story = {
  args: {
    label: "Some kind of readonly input",
    variant: "white",
    readOnly: true,
    value: "This is a read-only value",
  },
  render: (props) => (
    <div style={{ background: "var(--hds-ui-colors-light-grey-fill)", padding: "1em" }}>
      <Input {...props} />
    </div>
  ),
};

export const WhiteReadonlyInputWithError: Story = {
  args: {
    label: "Some kind of readonly input",
    variant: "white",
    readOnly: true,
    value: "This is a read-only value",
    errorMessage: "This is invalid",
  },
  render: (props) => (
    <div style={{ background: "var(--hds-ui-colors-light-grey-fill)", padding: "1em" }}>
      <Input {...props} />
    </div>
  ),
};

export const WhiteDisabledInput: Story = {
  args: {
    label: "Some kind of disabled input",
    variant: "white",
    disabled: true,
    value: "This input is disabled",
  },
  render: (props) => (
    <div style={{ background: "var(--hds-ui-colors-light-grey-fill)", padding: "1em" }}>
      <Input {...props} />
    </div>
  ),
};

export const WhiteDisabledInputWithError: Story = {
  args: {
    label: "Some kind of disabled input",
    variant: "white",
    disabled: true,
    value: "This input is disabled",
    errorMessage: "This is invalid",
  },
  render: (props) => (
    <div style={{ background: "var(--hds-ui-colors-light-grey-fill)", padding: "1em" }}>
      <Input {...props} />
    </div>
  ),
};

export const TrackingNumberSearch: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "end",
        gap: "var(--hds-spacing-small-1)",
        maxWidth: 556,
      }}
    >
      <Input label="Sporingsnummer" style={{ width: "100%" }} />
      <PrimaryButton size="large">Spor</PrimaryButton>
    </div>
  ),
};
