import "@postenbring/hedwig-css";
import { Input, ErrorSummary, ErrorSummaryError, VStack } from "@postenbring/hedwig-react";

function Example() {
  const errors: ErrorSummaryError[] = [
    { message: "Feil i input", anchor: "#test1" },
    { message: "Feil i input", anchor: "#test2" },
  ];
  return (
    <VStack gap="12-16">
      <ErrorSummary heading={"Test feiloppsummering"} errors={errors} />
      <Input id="test1" label="Test 1" name="test1" errorMessage={errors[0].message} />
      <Input id="test2" label="Test 2" name="test2" errorMessage={errors[1].message} />
    </VStack>
  );
}

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  index: 0,
  layout: "centered-fullwidth",
};
