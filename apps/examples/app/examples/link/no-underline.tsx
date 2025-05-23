import "@postenbring/hedwig-css";
import { Link, VStack } from "@postenbring/hedwig-react";

function Example() {
  return (
    <VStack gap="40" align="center">
      <Link href="#demo-link" variant="no-underline" size="default">
        Call to action
      </Link>
      <Link href="#demo-link" variant="no-underline" size="small">
        Call to action
      </Link>
      <Link href="#demo-link" variant="no-underline" size="technical">
        Call to action
      </Link>
    </VStack>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  description: "Except when you hover, then a underline appears.",
  index: 2,
};
