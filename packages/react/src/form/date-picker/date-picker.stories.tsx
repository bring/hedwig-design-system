/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { DatePicker } from ".";

const meta: Meta<typeof DatePicker> = {
  title: "Form/Date Picker",
  component: DatePicker,
};

export default meta;

type Story = StoryObj<typeof DatePicker>;

export const PlainDatePicker: Story = {
  args: {
    label: "Some kind of date picker",
    errorMessage: "",
    readOnly: false,
    variant: "default",
    min: "2024-04-05",
    max: "2026-04-04",
    calendarButtonTitle: "Åpne kalender",
  },
  argTypes: {
    variant: { control: "inline-radio", options: ["default", "white"] },
  },
};
