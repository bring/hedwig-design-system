import "@postenbring/hedwig-css";
import { Link, HStack } from "@postenbring/hedwig-react";

function Example() {
  return (
    <>
      <HStack gap="40" className="hds-mt-24">
        <Link href="#demo-link" icon="leading">
          <ArrowRightIcon />
          Internal link with leading icon
        </Link>
        <Link href="#demo-link" icon="leading">
          Link with no icon
        </Link>
        <Link href="#demo-link" icon="trailing">
          External link with trailing icon
          <ArrowUpRightIcon />
        </Link>
      </HStack>
    </>
  );
}

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
  </svg>
);

const ArrowUpRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
    <path d="M352 128c0-17.7-14.3-32-32-32L96 96c-17.7 0-32 14.3-32 32s14.3 32 32 32l146.7 0L41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L288 205.3 288 352c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224z" />
  </svg>
);

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 5,
};
