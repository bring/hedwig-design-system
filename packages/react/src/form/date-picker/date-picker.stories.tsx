/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { DatePicker } from ".";

const meta: Meta<typeof DatePicker> = {
  title: "Form/Date Picker",
  component: DatePicker,
  argTypes: {
    variant: { control: "inline-radio", options: ["default", "white"] },
  },
};

export default meta;

type Story = StoryObj<typeof DatePicker>;

export const Preview: Story = {
  tags: ["!dev"],
  args: {
    label: "Choose a date",
    errorMessage: "",
    readOnly: false,
    size: "large",
    min: "2024-04-05",
    max: "2026-04-04",
    calendarButtonTitle: "Open calendar",
  },
};
