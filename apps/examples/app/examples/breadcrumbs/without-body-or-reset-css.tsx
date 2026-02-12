import "@postenbring/hedwig-css/dist/tokens.css";
import "@postenbring/hedwig-css/dist/fonts.css";

import "@postenbring/hedwig-css/dist/breadcrumbs.css";
import "@postenbring/hedwig-css/dist/link.css";

import { Breadcrumbs, Link } from "@postenbring/hedwig-react";

function Example() {
  return (
    <>
      <Breadcrumbs>
        <li>
          <Link href="https://www.posten.no">Track letters and parcels</Link>
        </li>
        <li>Shipment from SOMEONE YOU KNOW</li>
      </Breadcrumbs>

      {/* Just for example sake, since the white background comes from `body.css` */}
      <style
        dangerouslySetInnerHTML={{
          __html: `body { background-color: var(--hds-colors-neutral-bg-default); }`,
        }}
      />
    </>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 2,
  breakpointIndicator: "top",
  description: "When just importing the bare minimum css required.",
};
