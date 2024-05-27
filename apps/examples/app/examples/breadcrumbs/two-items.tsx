import "@postenbring/hedwig-css";
import { Breadcrumbs, Link } from "@postenbring/hedwig-react";

function Example() {
  return (
    <Breadcrumbs>
      <li>
        <Link href="https://www.posten.no">Track letters and parcels</Link>
      </li>
      <li>Shipment from SOMEONE YOU KNOW</li>
    </Breadcrumbs>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 0,
  breakpointIndicator: "top",
  description: "You should have at minimum two levels in your hierarchy to use breadcrumbs.",
};
