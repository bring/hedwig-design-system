import "@postenbring/hedwig-css";
import { Card, Link, Container } from "@postenbring/hedwig-react";
import postenBringImage from "../../assets/posten-bring.avif";

function Example() {
  return (
    <>
      <Container>
        <h2>Slim Card - All colors</h2>
        <div
          style={{
            marginTop: "var(--hds-spacing-20)",
            marginBottom: "var(--hds-spacing-20)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "var(--hds-spacing-24-32)",
          }}
        >
          <Card variant="slim" color="brand-default">
            <Card.Media>
              <Card.MediaImg
                alt="Posten delivery van with Bring cargo truck in the background"
                src={postenBringImage}
              />
            </Card.Media>
            <Card.Body>
              <Card.BodyHeader as="h3">
                <Card.BodyHeaderOverline>Services</Card.BodyHeaderOverline>
                <Card.BodyHeaderTitle>Brand Default</Card.BodyHeaderTitle>
              </Card.BodyHeader>
              <Card.BodyDescription>Find the right service and order</Card.BodyDescription>
              <Card.BodyAction asChild>
                <Link href="#article-1" variant="solid">
                  <Card.BodyActionArrow />
                  Find a service
                </Link>
              </Card.BodyAction>
            </Card.Body>
          </Card>
          <Card variant="slim" color="brand-tinted">
            <Card.Media>
              <Card.MediaImg
                alt="Posten delivery van with Bring cargo truck in the background"
                src={postenBringImage}
              />
            </Card.Media>
            <Card.Body>
              <Card.BodyHeader as="h3">
                <Card.BodyHeaderOverline>Customer service</Card.BodyHeaderOverline>
                <Card.BodyHeaderTitle>Brand Tinted</Card.BodyHeaderTitle>
              </Card.BodyHeader>
              <Card.BodyDescription>
                Contact our customer service for help with your questions
              </Card.BodyDescription>
              <Card.BodyAction asChild>
                <Link href="#article-2" variant="solid">
                  <Card.BodyActionArrow />
                  Get in touch
                </Link>
              </Card.BodyAction>
            </Card.Body>
          </Card>
          <Card variant="slim" color="brand-base">
            <Card.Media>
              <Card.MediaImg
                alt="Posten delivery van with Bring cargo truck in the background"
                src={postenBringImage}
              />
            </Card.Media>
            <Card.Body>
              <Card.BodyHeader as="h3">
                <Card.BodyHeaderOverline>Quote</Card.BodyHeaderOverline>
                <Card.BodyHeaderTitle>Brand Base</Card.BodyHeaderTitle>
              </Card.BodyHeader>
              <Card.BodyDescription>Request a quote for your business</Card.BodyDescription>
              <Card.BodyAction asChild>
                <Link href="#article-3" variant="solid">
                  <Card.BodyActionArrow />
                  Request a quote
                </Link>
              </Card.BodyAction>
            </Card.Body>
          </Card>
          <Card variant="slim" color="neutral-default">
            <Card.Media>
              <Card.MediaImg
                alt="Posten delivery van with Bring cargo truck in the background"
                src={postenBringImage}
              />
            </Card.Media>
            <Card.Body>
              <Card.BodyHeader as="h3">
                <Card.BodyHeaderOverline>Customs</Card.BodyHeaderOverline>
                <Card.BodyHeaderTitle>Neutral Default</Card.BodyHeaderTitle>
              </Card.BodyHeader>
              <Card.BodyDescription>
                Familiarise yourself with regulations relating to customs and fees
              </Card.BodyDescription>
              <Card.BodyAction asChild>
                <Link href="#article-4" variant="solid">
                  <Card.BodyActionArrow />
                  Find out about customs
                </Link>
              </Card.BodyAction>
            </Card.Body>
          </Card>
          <Card variant="slim" color="neutral-tinted">
            <Card.Media>
              <Card.MediaImg
                alt="Posten delivery van with Bring cargo truck in the background"
                src={postenBringImage}
              />
            </Card.Media>
            <Card.Body>
              <Card.BodyHeader as="h3">
                <Card.BodyHeaderOverline>Customs</Card.BodyHeaderOverline>
                <Card.BodyHeaderTitle>Neutral Tinted</Card.BodyHeaderTitle>
              </Card.BodyHeader>
              <Card.BodyDescription>
                Familiarise yourself with regulations relating to customs and fees
              </Card.BodyDescription>
              <Card.BodyAction asChild>
                <Link href="#article-4" variant="solid">
                  <Card.BodyActionArrow />
                  Find out about customs
                </Link>
              </Card.BodyAction>
            </Card.Body>
          </Card>
          <Card variant="slim" color="neutral-base">
            <Card.Media>
              <Card.MediaImg
                alt="Posten delivery van with Bring cargo truck in the background"
                src={postenBringImage}
              />
            </Card.Media>
            <Card.Body>
              <Card.BodyHeader as="h3">
                <Card.BodyHeaderOverline>Customs</Card.BodyHeaderOverline>
                <Card.BodyHeaderTitle>Neutral Base</Card.BodyHeaderTitle>
              </Card.BodyHeader>
              <Card.BodyDescription>
                Familiarise yourself with regulations relating to customs and fees
              </Card.BodyDescription>
              <Card.BodyAction asChild>
                <Link href="#article-4" variant="solid">
                  <Card.BodyActionArrow />
                  Find out about customs
                </Link>
              </Card.BodyAction>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 1,
  layout: "none",
};
