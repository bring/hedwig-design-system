import "@postenbring/hedwig-css";
import { Link, VStack } from "@postenbring/hedwig-react";

function Example() {
  return (
    <VStack gap="40" align="center">
      <Link href="#demo-link" variant="solid" size="default">
        Call to action
      </Link>
      <Link href="#demo-link" variant="solid" size="small">
        Call to action
      </Link>
      <Link href="#demo-link" variant="solid" size="technical">
        Call to action
      </Link>
    </VStack>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 1,
};
