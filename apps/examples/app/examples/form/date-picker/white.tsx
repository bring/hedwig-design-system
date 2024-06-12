import "@postenbring/hedwig-css";
import { Box, DatePicker } from "@postenbring/hedwig-react";

function Example() {
  return (
    <Box>
      <DatePicker
        variant="white"
        label="Choose a date"
        min="2024-04-05"
        max="2026-04-04"
        calendarButtonTitle="Open calendar"
      />
    </Box>
  );
}

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  index: 0,
  layout: "centered-fullwidth",
};
