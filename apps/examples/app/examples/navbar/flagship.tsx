import { Navbar } from "@postenbring/hedwig-react";

function Example() {
  return (
    <>
      <Navbar>
        <Navbar.LogoAndText variant="flagship" asChild>
          <a href="/" aria-label="To the front page">
            <div>
              Hedwig <span className="hidden-on-mobile">Design System</span>
            </div>
          </a>
        </Navbar.LogoAndText>
        <Navbar.Button>Search</Navbar.Button>
      </Navbar>

      {/* Poor man's css-in-js */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
              .hidden-on-mobile {
                display: none;
              }
              @media (min-width: 720px) {
                .hidden-on-mobile {
                  display: unset;
                }
              }
            `,
        }}
      />
    </>
  );
}

export default Example;

import type { ExampleConfig } from "../../examples";
export const config: ExampleConfig = {
  layout: "none",
};
