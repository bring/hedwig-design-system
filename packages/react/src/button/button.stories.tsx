/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { PrimaryButton, SecondaryButton } from ".";

const meta: Meta<typeof PrimaryButton> = {
  title: "Button",
  component: PrimaryButton,
  argTypes: {
    fullWidth: { control: "radio", options: [false, true, "mobile"] },
  },
};

export default meta;

type Story = StoryObj<typeof PrimaryButton>;

export const Primary: Story = {
  args: {
    children: "Primary button",
  },
};

export const PrimaryOutline: Story = {
  args: {
    children: "Primary outlined button",
    fill: "outlined",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary button",
  },
  render: (props) => <SecondaryButton {...props} />,
};

export const SecondaryOutline: Story = {
  render: (props) => <SecondaryButton {...props} />,
  args: {
    children: "Secondary outlined button",
    fill: "outlined",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled button",
    disabled: true,
  },
};

export const DisabledOutlined: Story = {
  args: {
    children: "Disabled outlined button",
    fill: "outlined",
    disabled: true,
  },
};
