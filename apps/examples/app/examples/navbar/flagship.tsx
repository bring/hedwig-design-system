import "@postenbring/hedwig-css";
import { Navbar } from "@postenbring/hedwig-react";

function Example() {
  return (
    <Navbar variant="service">
      <Navbar.LogoAndServiceText variant="flagship" asChild>
        <a href="/" aria-label="To the front page">
          Flagship
        </a>
      </Navbar.LogoAndServiceText>
      <Navbar.Navigation>
        <Navbar.ButtonItem>Search</Navbar.ButtonItem>
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
