import { Navbar } from "@postenbring/hedwig-react";

function Example() {
  return (
    <Navbar>
      <Navbar.LogoAndText variant="flagship" asChild>
        <a href="/" aria-label="To the front page">
          Flagship service
        </a>
      </Navbar.LogoAndText>
      <Navbar.Navigation>
        <Navbar.Button>Search</Navbar.Button>
      </Navbar.Navigation>
    </Navbar>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  breakpointIndicator: "bottom",
  layout: "none",
};
