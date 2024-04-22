import { Skeleton, VStack } from "@postenbring/hedwig-react";

function Example() {
  return (
    <VStack gap="8" style={{ width: 320 }}>
      <Skeleton variant="circle">
        <div style={{ height: 92, width: 92, background: "deeppink" }}>Avatar</div>
      </Skeleton>
      <div>
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" width="80%" />
      </div>
    </VStack>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {};
