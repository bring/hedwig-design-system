import "@postenbring/hedwig-css";
import { Card, Link, Container } from "@postenbring/hedwig-react";
import postenBringImage from "../../assets/posten-bring.avif";

function Example() {
  return (
    <>
      <Container>
        <h2>Color - Lighter Brand - Default</h2>
        <div
          style={{
            marginTop: "var(--hds-spacing-20)",
            marginBottom: "var(--hds-spacing-20)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "var(--hds-spacing-24-32)",
          }}
        >
          <Card variant="slim" color="lighter-brand">
            <Card.Media>
              <Card.MediaImg
                alt="Posten delivery van with Bring cargo truck in the background"
                src={postenBringImage}
              />
            </Card.Media>
            <Card.Body>
              <Card.BodyHeader as="h3">
                <Card.BodyHeaderOverline>Services</Card.BodyHeaderOverline>
                <Card.BodyHeaderTitle>Information about services</Card.BodyHeaderTitle>
              </Card.BodyHeader>
              <Card.BodyDescription>Find the right service and order</Card.BodyDescription>
              <Card.BodyAction>
                <Link href="#article-1" variant="solid">
                  <Card.BodyActionArrow />
                  Find a service
                </Link>
              </Card.BodyAction>
            </Card.Body>
          </Card>
          <Card variant="slim" color="lighter-brand">
            <Card.Media>
              <Card.MediaImg
                alt="Posten delivery van with Bring cargo truck in the background"
                src={postenBringImage}
              />
            </Card.Media>
            <Card.Body>
              <Card.BodyHeader as="h3">
                <Card.BodyHeaderOverline>Customer service</Card.BodyHeaderOverline>
                <Card.BodyHeaderTitle>Contact Customer service</Card.BodyHeaderTitle>
              </Card.BodyHeader>
              <Card.BodyDescription>
                Contact our customer service for help with your questions
              </Card.BodyDescription>
              <Card.BodyAction>
                <Card.BodyActionArrow />
                <Link href="#article-2" variant="solid">
                  Get in touch
                </Link>
              </Card.BodyAction>
            </Card.Body>
          </Card>
          <Card variant="slim" color="lighter-brand">
            <Card.Media>
              <Card.MediaImg
                alt="Posten delivery van with Bring cargo truck in the background"
                src={postenBringImage}
              />
            </Card.Media>
            <Card.Body>
              <Card.BodyHeader as="h3">
                <Card.BodyHeaderOverline>Quote</Card.BodyHeaderOverline>
                <Card.BodyHeaderTitle>Price enquiry</Card.BodyHeaderTitle>
              </Card.BodyHeader>
              <Card.BodyDescription>Request a quote for your business</Card.BodyDescription>
              <Card.BodyAction>
                <Link href="#article-3" variant="solid">
                  <Card.BodyActionArrow />
                  Request a quote
                </Link>
              </Card.BodyAction>
            </Card.Body>
          </Card>
          <Card variant="slim" color="lighter-brand">
            <Card.Media>
              <Card.MediaImg
                alt="Posten delivery van with Bring cargo truck in the background"
                src={postenBringImage}
              />
            </Card.Media>
            <Card.Body>
              <Card.BodyHeader as="h3">
                <Card.BodyHeaderOverline>Customs</Card.BodyHeaderOverline>
                <Card.BodyHeaderTitle>Get familiar with customs</Card.BodyHeaderTitle>
              </Card.BodyHeader>
              <Card.BodyDescription>
                Familiarise yourself with regulations relating to customs and fees
              </Card.BodyDescription>
              <Card.BodyAction>
                <Link href="#article-4" variant="solid">
                  <Card.BodyActionArrow />
                  Find out about customs
                </Link>
              </Card.BodyAction>
            </Card.Body>
          </Card>
        </div>
      </Container>
      <Container>
        <h2>Color - Light Grey Fill</h2>
        <div
          style={{
            marginTop: "var(--hds-spacing-20)",
            marginBottom: "var(--hds-spacing-20)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "var(--hds-spacing-24-32)",
          }}
        >
          <Card variant="slim" color="light-grey-fill">
            <Card.Body>
              <Card.BodyHeader as="h3">
                <Card.BodyHeaderOverline>Services</Card.BodyHeaderOverline>
                <Card.BodyHeaderTitle>Information about services</Card.BodyHeaderTitle>
              </Card.BodyHeader>
              <Card.BodyDescription>Find the right service and order</Card.BodyDescription>
              <Card.BodyAction>
                <Link href="#article-1" variant="solid">
                  <Card.BodyActionArrow />
                  Find a service
                </Link>
              </Card.BodyAction>
            </Card.Body>
          </Card>
          <Card variant="slim" color="light-grey-fill">
            <Card.Body>
              <Card.BodyHeader as="h3">
                <Card.BodyHeaderOverline>Customer service</Card.BodyHeaderOverline>
                <Card.BodyHeaderTitle>Contact Customer service</Card.BodyHeaderTitle>
              </Card.BodyHeader>
              <Card.BodyDescription>
                Contact our customer service for help with your questions
              </Card.BodyDescription>
              <Card.BodyAction>
                <Card.BodyActionArrow />
                <Link href="#article-2" variant="solid">
                  Get in touch
                </Link>
              </Card.BodyAction>
            </Card.Body>
          </Card>
          <Card variant="slim" color="light-grey-fill">
            <Card.Body>
              <Card.BodyHeader as="h3">
                <Card.BodyHeaderOverline>Quote</Card.BodyHeaderOverline>
                <Card.BodyHeaderTitle>Price enquiry</Card.BodyHeaderTitle>
              </Card.BodyHeader>
              <Card.BodyDescription>Request a quote for your business</Card.BodyDescription>
              <Card.BodyAction>
                <Link href="#article-3" variant="solid">
                  <Card.BodyActionArrow />
                  Request a quote
                </Link>
              </Card.BodyAction>
            </Card.Body>
          </Card>
          <Card variant="slim" color="light-grey-fill">
            <Card.Body>
              <Card.BodyHeader as="h3">
                <Card.BodyHeaderOverline>Customs</Card.BodyHeaderOverline>
                <Card.BodyHeaderTitle>Get familiar with customs</Card.BodyHeaderTitle>
              </Card.BodyHeader>
              <Card.BodyDescription>
                Familiarise yourself with regulations relating to customs and fees
              </Card.BodyDescription>
              <Card.BodyAction>
                <Link href="#article-4" variant="solid">
                  <Card.BodyActionArrow />
                  Find out about customs
                </Link>
              </Card.BodyAction>
            </Card.Body>
          </Card>
        </div>
      </Container>
      <Container>
        <h2>Color - White</h2>
        <div
          style={{
            marginTop: "var(--hds-spacing-20)",
            marginBottom: "var(--hds-spacing-20)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "var(--hds-spacing-24-32)",
          }}
        >
          <Card variant="slim" color="white">
            <Card.Media>
              <Card.MediaImg
                alt="Posten delivery van with Bring cargo truck in the background"
                src={postenBringImage}
              />
            </Card.Media>
            <Card.Body>
              <Card.BodyHeader as="h3">
                <Card.BodyHeaderOverline>Services</Card.BodyHeaderOverline>
                <Card.BodyHeaderTitle>Information about services</Card.BodyHeaderTitle>
              </Card.BodyHeader>
              <Card.BodyDescription>Find the right service and order</Card.BodyDescription>
              <Card.BodyAction>
                <Link href="#article-1" variant="solid">
                  <Card.BodyActionArrow />
                  Find a service
                </Link>
              </Card.BodyAction>
            </Card.Body>
          </Card>
          <Card variant="slim" color="white">
            <Card.Media>
              <Card.MediaImg
                alt="Posten delivery van with Bring cargo truck in the background"
                src={postenBringImage}
              />
            </Card.Media>
            <Card.Body>
              <Card.BodyHeader as="h3">
                <Card.BodyHeaderOverline>Customer service</Card.BodyHeaderOverline>
                <Card.BodyHeaderTitle>Contact Customer service</Card.BodyHeaderTitle>
              </Card.BodyHeader>
              <Card.BodyDescription>
                Contact our customer service for help with your questions
              </Card.BodyDescription>
              <Card.BodyAction>
                <Card.BodyActionArrow />
                <Link href="#article-2" variant="solid">
                  Get in touch
                </Link>
              </Card.BodyAction>
            </Card.Body>
          </Card>
          <Card variant="slim" color="white">
            <Card.Media>
              <Card.MediaImg
                alt="Posten delivery van with Bring cargo truck in the background"
                src={postenBringImage}
              />
            </Card.Media>
            <Card.Body>
              <Card.BodyHeader as="h3">
                <Card.BodyHeaderOverline>Quote</Card.BodyHeaderOverline>
                <Card.BodyHeaderTitle>Price enquiry</Card.BodyHeaderTitle>
              </Card.BodyHeader>
              <Card.BodyDescription>Request a quote for your business</Card.BodyDescription>
              <Card.BodyAction>
                <Link href="#article-3" variant="solid">
                  <Card.BodyActionArrow />
                  Request a quote
                </Link>
              </Card.BodyAction>
            </Card.Body>
          </Card>
          <Card variant="slim" color="white">
            <Card.Media>
              <Card.MediaImg
                alt="Posten delivery van with Bring cargo truck in the background"
                src={postenBringImage}
              />
            </Card.Media>
            <Card.Body>
              <Card.BodyHeader as="h3">
                <Card.BodyHeaderOverline>Customs</Card.BodyHeaderOverline>
                <Card.BodyHeaderTitle>Get familiar with customs</Card.BodyHeaderTitle>
              </Card.BodyHeader>
              <Card.BodyDescription>
                Familiarise yourself with regulations relating to customs and fees
              </Card.BodyDescription>
              <Card.BodyAction>
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
