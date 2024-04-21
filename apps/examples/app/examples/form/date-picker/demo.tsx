import { DatePicker } from "@postenbring/hedwig-react";

function Example() {
  return (
    <DatePicker
      label="Choose a date"
      min="2024-04-05"
      max="2026-04-04"
      calendarButtonTitle="Open calendar"
    />
  );
}

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  index: 0,
  layout: "centered-fullwidth",
};
