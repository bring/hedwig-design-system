/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from ".";

const meta: Meta<typeof Textarea> = {
  title: "Textarea",
  component: Textarea,
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const PlainTextarea: Story = {
  args: {
    label: "Some kind of textarea",
    placeholder: "I am a placeholder",
  },
};

export const PlainTextareaWithError: Story = {
  args: {
    label: "Some kind of textarea with error",
    errorMessage: "This is invalid",
    placeholder: "I am a placeholder",
  },
};

export const ReadonlyTextarea: Story = {
  args: {
    label: "Some kind of readonly textarea",
    readOnly: true,
    value: "This is a read-only value",
  },
};

export const ReadonlyTextareaWithError: Story = {
  args: {
    label: "Some kind of readonly textarea",
    readOnly: true,
    value: "This is a read-only value",
    errorMessage: "This is invalid",
  },
};

export const DisabledTextarea: Story = {
  args: {
    label: "Some kind of disabled textarea",
    disabled: true,
    value: "This textarea is disabled",
  },
};

export const DisabledTextareaWithError: Story = {
  args: {
    label: "Some kind of disabled textarea",
    disabled: true,
    value: "This textarea is disabled",
    errorMessage: "This is invalid",
  },
};

export const WhiteTextarea: Story = {
  args: {
    label: "Some kind of white textarea",
    variant: "white",
    placeholder: "I am a placeholder",
  },
  render: (props) => (
    <div style={{ background: "var(--hds-ui-colors-light-grey-fill)", padding: "1em" }}>
      <Textarea {...props} />
    </div>
  ),
};

export const WhiteTextareaWithError: Story = {
  args: {
    label: "Some kind of white textarea",
    variant: "white",
    placeholder: "I am a placeholder",
    errorMessage: "This is invalid",
  },
  render: (props) => (
    <div style={{ background: "var(--hds-ui-colors-light-grey-fill)", padding: "1em" }}>
      <Textarea {...props} />
    </div>
  ),
};

export const WhiteReadonlyTextarea: Story = {
  args: {
    label: "Some kind of readonly textarea",
    variant: "white",
    readOnly: true,
    value: "This is a read-only value",
  },
  render: (props) => (
    <div style={{ background: "var(--hds-ui-colors-light-grey-fill)", padding: "1em" }}>
      <Textarea {...props} />
    </div>
  ),
};

export const WhiteReadonlyTextareaWithError: Story = {
  args: {
    label: "Some kind of readonly textarea",
    variant: "white",
    readOnly: true,
    value: "This is a read-only value",
    errorMessage: "This is invalid",
  },
  render: (props) => (
    <div style={{ background: "var(--hds-ui-colors-light-grey-fill)", padding: "1em" }}>
      <Textarea {...props} />
    </div>
  ),
};

export const WhiteDisabledTextarea: Story = {
  args: {
    label: "Some kind of disabled textarea",
    variant: "white",
    disabled: true,
    value: "This textarea is disabled",
  },
  render: (props) => (
    <div style={{ background: "var(--hds-ui-colors-light-grey-fill)", padding: "1em" }}>
      <Textarea {...props} />
    </div>
  ),
};

export const WhiteDisabledTextareaWithError: Story = {
  args: {
    label: "Some kind of disabled textarea",
    variant: "white",
    disabled: true,
    value: "This textarea is disabled",
    errorMessage: "This is invalid",
  },
  render: (props) => (
    <div style={{ background: "var(--hds-ui-colors-light-grey-fill)", padding: "1em" }}>
      <Textarea {...props} />
    </div>
  ),
};
