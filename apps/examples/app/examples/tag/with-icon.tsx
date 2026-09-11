import "@postenbring/hedwig-css";
import { Tag, HStack } from "@postenbring/hedwig-react";

function Example() {
  return (
    <HStack gap="8" align="end">
      <Tag data-color="success">
        <CheckIcon />
        Leading icon
      </Tag>
      <Tag data-color="info">
        Trailing icon
        <CheckIcon />
      </Tag>
    </HStack>
  );
}

const CheckIcon = () => (
  <svg
    aria-hidden
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    width="1em"
    height="1em"
    fill="currentColor"
  >
    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
  </svg>
);

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 4,
  description: "You can place an icon inside the tag, either before or after the text.",
};
