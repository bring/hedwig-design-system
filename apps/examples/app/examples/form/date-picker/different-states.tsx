import "@postenbring/hedwig-css";
import { DatePicker, VStack } from "@postenbring/hedwig-react";

const Example = () => (
  <VStack gap="16-20" style={{ padding: "var(--hds-spacing-24-32) 0" }}>
    <DatePicker
      label="Plain"
      min="2024-04-05"
      max="2026-04-04"
      calendarButtonTitle="Open calendar"
    />
    <DatePicker
      label="Error"
      min="2024-04-05"
      max="2026-04-04"
      calendarButtonTitle="Open calendar"
      validationMessage="This is invalid"
      data-color="error"
      aria-invalid
    />
    <DatePicker
      label="Disabled"
      min="2024-04-05"
      max="2026-04-04"
      calendarButtonTitle="Open calendar"
      disabled
    />
    <DatePicker
      label="Read only"
      min="2024-04-05"
      max="2026-04-04"
      calendarButtonTitle="Open calendar"
      readOnly
    />
  </VStack>
);

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  index: 2,
  layout: "centered-fullwidth",
};
