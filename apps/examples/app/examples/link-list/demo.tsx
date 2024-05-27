import "@postenbring/hedwig-css";
import { Link, LinkList } from "@postenbring/hedwig-react";

function Example() {
  return (
    <LinkList>
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
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 0,
};
