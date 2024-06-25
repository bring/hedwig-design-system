import "@postenbring/hedwig-css";
import { HStack, Spinner } from "@postenbring/hedwig-react";

function Example() {
  return (
    <HStack gap="24" wrap align="end">
      <Spinner delay="0.4s" size="large" />
      <Spinner delay />
      <Spinner delay="1.5s" size="small" />
    </HStack>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  description: `<p>If the action usually takes less than 1 second, you can use a delay to prevent the spinner from flashing.<p>
    <p><a href="https://www.nngroup.com/articles/progress-indicators/" target="_blank">Read more loading times and spinners ↗</a></p>`,
  index: 1,
};
