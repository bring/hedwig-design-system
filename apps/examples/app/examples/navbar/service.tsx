import { Link, Navbar } from "@postenbring/hedwig-react";

function Example() {
  return (
    <>
      <Navbar>
        <Navbar.LogoAndText variant="service" asChild>
          <a href="/" aria-label="To the front page">
            Notifications admin
          </a>
        </Navbar.LogoAndText>
        <Navbar.Navigation>
          <Link href="#login">Login</Link>
        </Navbar.Navigation>
      </Navbar>
    </>
  );
}

export default Example;

import type { ExampleConfig } from "../../examples";
export const config: ExampleConfig = {
  breakpointIndicator: "bottom",
  layout: "none",
};
