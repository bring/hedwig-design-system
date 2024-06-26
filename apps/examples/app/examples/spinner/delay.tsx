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
    <a href="https://www.nngroup.com/articles/progress-indicators/" target="_blank">Read more loading times and spinners ↗</a>
    <blockquote>
    <p>This indicator should be reserved for actions that take between 2-10 seconds. For anything that takes less than 1 second to load, it is distracting to use a looped animation, because users cannot keep up with what happened and might feel anxious about whatever flashed on the screen.
    <footer><cite>Neilsen Norman Group</cite></footer>
    </p>
    </blockquote>`,
  index: 1,
};
