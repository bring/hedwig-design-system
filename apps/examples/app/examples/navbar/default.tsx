import { Accordion, Container, Link, LinkList, Navbar, Skeleton } from "@postenbring/hedwig-react";

function Example() {
  return (
    <>
      <Navbar>
        <Navbar.Logo as="a" href="https://www.posten.no/" title="To the front page" />
        <Navbar.Navigation>
          <Navbar.Button as="a" href="https://www.posten.no/" title="Link">
            English
          </Navbar.Button>
          <Navbar.Button title="Button">Search</Navbar.Button>
          <Navbar.ExpandableMenu>
            <Navbar.ExpandableMenu.Trigger whenClosedText="Meny" whenOpenText="Close" />
            <Navbar.ExpandableMenu.Content>
              <Container>
                <h2>Menu contents</h2>
                <Accordion>
                  <Accordion.Item>
                    <Accordion.Header>Tjenester</Accordion.Header>
                    <Accordion.Content>
                      <LinkList>
                        <li>
                          <Link href="#">Post</Link>
                        </li>
                        <li>
                          <Link href="#">Pakker og gods</Link>
                        </li>
                        <li>
                          <Link href="#">Bud og ekspress</Link>
                        </li>
                      </LinkList>
                    </Accordion.Content>
                  </Accordion.Item>
                </Accordion>
              </Container>
            </Navbar.ExpandableMenu.Content>
          </Navbar.ExpandableMenu>
        </Navbar.Navigation>
      </Navbar>

      {/* Hero illustration */}
      <div
        style={{
          height: "55vh",
          width: "100%",
          background:
            "url('https://www.posten.no/_/image/24de2334-84c9-46e4-b3c3-bba51753d0b4:e26630321db9d6cd94d9b5b384c3a9638963dab1/width-2500/posten-desktop.png?quality=70')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "50% 50%",
        }}
      />

      <Container as="main" id="container">
        {/* Some filler content */}
        {Array.from({ length: 15 }).map((_, i) => (
          <Skeleton
            key={i}
            animation={false}
            width={i % 3 === 0 ? "100%" : `${((i % 3) + 0) * 30}%`}
          />
        ))}
        <Link href="#some-link">
          This link should not be targetable while the expandable menu is open
        </Link>
      </Container>
    </>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  layout: "none",
};
