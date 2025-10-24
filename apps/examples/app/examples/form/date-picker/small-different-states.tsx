import "@postenbring/hedwig-css";
import { DatePicker, VStack } from "@postenbring/hedwig-react";

function Example() {
  return (
    <VStack gap="16-20" style={{ padding: "var(--hds-spacing-24-32) 0" }}>
      <DatePicker
        label="Plain"
        min="2024-04-05"
        max="2026-04-04"
        calendarButtonTitle="Open calendar"
        size="small"
      />
      <DatePicker
        label="Danger"
        min="2024-04-05"
        max="2026-04-04"
        calendarButtonTitle="Open calendar"
        validationMessage="This is invalid"
        size="small"
      />
      <DatePicker
        label="Disabled"
        min="2024-04-05"
        max="2026-04-04"
        calendarButtonTitle="Open calendar"
        disabled
        size="small"
      />
      <DatePicker
        label="Read only"
        min="2024-04-05"
        max="2026-04-04"
        calendarButtonTitle="Open calendar"
        readOnly
        size="small"
      />
    </VStack>
  );
}

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  index: 3,
  layout: "centered-fullwidth",
};
