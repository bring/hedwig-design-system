import "@postenbring/hedwig-css";
import { DatePicker } from "@postenbring/hedwig-react";

const Example = () => (
  <>
    <DatePicker
      label="Choose a date"
      min="2024-04-05"
      max="2026-04-04"
      calendarButtonTitle="Open calendar"
      validationMessage="Information"
      data-color="info"
    />
    <DatePicker
      label="Choose a date"
      min="2024-04-05"
      max="2026-04-04"
      calendarButtonTitle="Open calendar"
      validationMessage="Success!"
      data-color="success"
    />
    <DatePicker
      label="Choose a date"
      min="2024-04-05"
      max="2026-04-04"
      calendarButtonTitle="Open calendar"
      validationMessage="Warning"
      data-color="warning"
    />
  </>
);

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  index: 4,
  layout: "centered-fullwidth",
};
