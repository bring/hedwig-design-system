import "@postenbring/hedwig-css";
import { HStack, Spinner } from "@postenbring/hedwig-react";

function Example() {
  return (
    <HStack gap="24" wrap align="end">
      <Spinner />
      <Spinner delay="2s" />
      <Spinner delay="5s" />
    </HStack>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 0,
};
