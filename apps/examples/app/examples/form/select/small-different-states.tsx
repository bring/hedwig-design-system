import "@postenbring/hedwig-css";
import { Select, SelectProps, VStack } from "@postenbring/hedwig-react";

function Example() {
  return (
    <VStack gap="16-20" style={{ padding: "var(--hds-spacing-24-32) 0" }}>
      <SelectExample label="Plain" />
      <SelectExample
        label="Info"
        defaultValue="Some value"
        validationMessage={{ value: "Some information", variant: "info" }}
      />
      <SelectExample
        label="Success"
        defaultValue="Some value"
        validationMessage={{ value: "This went really well", variant: "success" }}
      />
      <SelectExample
        label="Warning"
        defaultValue="Some value"
        validationMessage={{
          value: "You should probably fix this, but don't worry too much",
          variant: "warning",
        }}
      />
      <SelectExample label="Danger" defaultValue="Some value" validationMessage="This is invalid" />
      <SelectExample label="Disabled" disabled />
    </VStack>
  );
}

function SelectExample(props: Omit<SelectProps, "children">) {
  return (
    <Select defaultValue="" {...props} size="small">
      <option disabled hidden value="">
        Please select
      </option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </Select>
  );
}

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  index: 3,
  layout: "centered-fullwidth",
};
