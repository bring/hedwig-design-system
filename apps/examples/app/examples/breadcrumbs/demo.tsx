import { Breadcrumbs, Link } from "@postenbring/hedwig-react";

function Example() {
  return (
    <Breadcrumbs>
      <li>
        <Link href="https://www.posten.no">Home</Link>
      </li>
      <li>
        <Link href="https://www.posten.no">Somewhere</Link>
      </li>
      <li>
        <Link href="https://www.posten.no">Deep inside</Link>
      </li>
      <li>
        <Link href="https://www.posten.no">Posten dot no</Link>
      </li>
      <li>You will find this page</li>
    </Breadcrumbs>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 0,
  breakpointIndicator: "top",
};
