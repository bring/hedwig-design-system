import "@postenbring/hedwig-css";
import { Link, VStack } from "@postenbring/hedwig-react";

function Example() {
  return (
    <VStack gap="40" align="center">
      <Link href="#demo-link" size="default">
        Default link
      </Link>
      <Link href="#demo-link" size="small">
        Small link
      </Link>
      <Link href="#demo-link" size="large">
        Large link
      </Link>
      <Link size="technical">Technical</Link>
    </VStack>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 0,
};
