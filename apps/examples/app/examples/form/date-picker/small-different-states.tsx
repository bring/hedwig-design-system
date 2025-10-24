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
        label="Info"
        min="2024-04-05"
        max="2026-04-04"
        calendarButtonTitle="Open calendar"
        validationMessage={{ value: "Some information", variant: "info" }}
        size="small"
      />
      <DatePicker
        label="Success"
        min="2024-04-05"
        max="2026-04-04"
        calendarButtonTitle="Open calendar"
        validationMessage={{ value: "This went really well", variant: "success" }}
        size="small"
      />
      <DatePicker
        label="Warning"
        min="2024-04-05"
        max="2026-04-04"
        calendarButtonTitle="Open calendar"
        validationMessage={{
          value: "You should probably fix this, but don't worry too much",
          variant: "warning",
        }}
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
