import { Accordion, Container, Link, LinkList, Navbar, Skeleton } from "@postenbring/hedwig-react";

function Example() {
  return (
    <>
      <Navbar>
        <Navbar.Logo asChild>
          <a href="https://www.posten.no/" title="Til forsiden" />
        </Navbar.Logo>
        <Navbar.Navigation>
          <Navbar.LinkItem title="Link" href="https://www.posten.no/">
            English
          </Navbar.LinkItem>
          <Navbar.ButtonItem title="Button">Search</Navbar.ButtonItem>
          <Navbar.ExpandableMenu>
            <Navbar.ExpandableMenuTrigger whenClosedText="Meny" whenOpenText="Close" />
            <Navbar.ExpandableMenuContent>
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
            </Navbar.ExpandableMenuContent>
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
