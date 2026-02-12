import "@postenbring/hedwig-css";
import { Link, LinkList, HStack } from "@postenbring/hedwig-react";

function Example() {
  return (
    <HStack gap="20" wrap>
      <LinkList size="default">
        <li>
          <Link href="https://hedwig.posten.no">Link somewhere</Link>
        </li>
        <li>
          <Link href="https://hedwig.posten.no" target="_blank">
            Link somewhere
          </Link>
        </li>
        <li>
          <Link href="https://hedwig.posten.no" target="_self">
            Link somewhere
          </Link>
        </li>
      </LinkList>
      <LinkList size="small">
        <li>
          <Link href="https://hedwig.posten.no">Link somewhere</Link>
        </li>
        <li>
          <Link href="https://hedwig.posten.no" target="_blank">
            Link somewhere
          </Link>
        </li>
        <li>
          <Link href="https://hedwig.posten.no" target="_self">
            Link somewhere
          </Link>
        </li>
      </LinkList>
      <LinkList size="technical">
        <li>
          <Link href="https://hedwig.posten.no">Link somewhere</Link>
        </li>
        <li>
          <Link href="https://hedwig.posten.no" target="_blank">
            Link somewhere
          </Link>
        </li>
        <li>
          <Link href="https://hedwig.posten.no" target="_self">
            Link somewhere
          </Link>
        </li>
      </LinkList>
    </HStack>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 0,
};
