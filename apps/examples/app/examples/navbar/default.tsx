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

      <Container as="main">
        {/* Some filler content */}
        {Array.from({ length: 50 }).map((_, i) => (
          <Skeleton key={i} animation={false} width={i % 4 === 0 ? "75%" : "100%"} />
        ))}
      </Container>
    </>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  layout: "none",
};
