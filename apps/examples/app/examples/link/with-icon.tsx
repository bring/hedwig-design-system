import "@postenbring/hedwig-css";
import { Link, VStack } from "@postenbring/hedwig-react";

function Example() {
  return (
    <VStack gap="40">
      <Link href="#demo-link" size="large">
        <ArrowRightIcon />
        Internal link with leading icon
      </Link>
      <Link href="#demo-link" size="large">
        <ArrowUpRightIcon />
        External link with leading icon
      </Link>
      <Link href="#demo-link" size="large">
        Internal link with trailing icon
        <ArrowRightIcon />
      </Link>
      <Link href="#demo-link" size="large">
        External link with trailing icon
        <ArrowUpRightIcon />
      </Link>
    </VStack>
  );
}

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
    <path
      d="M17.875 7.82812L26.125 15.7031C26.3594 15.9375 26.5 16.2188 26.5 16.5469C26.5 16.8281 26.3594 17.1094 26.125 17.3438L17.875 25.2188C17.4531 25.6406 16.7031 25.6406 16.2812 25.1719C15.8594 24.75 15.8594 24 16.3281 23.5781L22.5625 17.6719H6.625C5.96875 17.6719 5.5 17.1562 5.5 16.5469C5.5 15.8906 5.96875 15.4219 6.625 15.4219H22.5625L16.3281 9.46875C15.8594 9.04688 15.8594 8.29688 16.2812 7.875C16.7031 7.40625 17.4062 7.40625 17.875 7.82812Z"
      fill="black"
    />
  </svg>
);

const ArrowUpRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
    <path
      d="M23.5 10.125V21.375C23.5 22.0312 22.9844 22.5 22.375 22.5C21.7188 22.5 21.25 22.0312 21.25 21.375V12.8438L10.4219 23.6719C10.1875 23.9062 9.90625 24 9.625 24C9.29688 24 9.01562 23.9062 8.82812 23.6719C8.35938 23.25 8.35938 22.5469 8.82812 22.125L19.6562 11.25H11.125C10.4688 11.25 10 10.7812 10 10.125C10 9.51562 10.4688 9 11.125 9H22.375C22.9844 9 23.5 9.51562 23.5 10.125Z"
      fill="black"
    />
  </svg>
);

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 4,
};
