import "@postenbring/hedwig-css";
import { Card, Link, Container } from "@postenbring/hedwig-react";
import customerParcel from "../../assets/customer-parcel.svg";

function Example() {
  return (
    <>
      <Container>
        <h2>Miniature Card - All colors</h2>
        <div
          style={{
            marginTop: "var(--hds-spacing-20)",
            marginBottom: "var(--hds-spacing-20)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "var(--hds-spacing-24-32)",
          }}
        >
          <Card variant="miniature">
            <Card.Media>
              <Card.MediaImg src={customerParcel} />
            </Card.Media>
            <Card.Body>
              <Card.BodyHeader as="h2">
                <Card.BodyHeaderTitle>Brand Default (default)</Card.BodyHeaderTitle>
              </Card.BodyHeader>
              <Card.BodyDescription>
                Our services for national and international transport
              </Card.BodyDescription>
              <Card.BodyAction asChild>
                <Link href="https://www.posten.no" variant="solid" target="_blank">
                  <Card.BodyActionArrow direction="up-right" />
                  Parcels and cargo
                </Link>
              </Card.BodyAction>
            </Card.Body>
          </Card>
          <Card variant="miniature" theme="tinted">
            <Card.Media>
              <Card.MediaImg src={customerParcel} />
            </Card.Media>
            <Card.Body>
              <Card.BodyHeader as="h2">
                <Card.BodyHeaderTitle>Brand Tinted</Card.BodyHeaderTitle>
              </Card.BodyHeader>
              <Card.BodyDescription>
                Our services for national and international transport
              </Card.BodyDescription>
              <Card.BodyAction asChild>
                <Link href="https://www.posten.no" variant="solid" target="_blank">
                  <Card.BodyActionArrow direction="up-right" />
                  Parcels and cargo
                </Link>
              </Card.BodyAction>
            </Card.Body>
          </Card>
          <Card variant="miniature" theme="base">
            <Card.Media>
              <Card.MediaImg src={customerParcel} />
            </Card.Media>
            <Card.Body>
              <Card.BodyHeader as="h2">
                <Card.BodyHeaderTitle>Brand Base</Card.BodyHeaderTitle>
              </Card.BodyHeader>
              <Card.BodyDescription>
                Mail and direct mail delivered to the mailbox
              </Card.BodyDescription>
              <Card.BodyAction asChild>
                <Link href="https://www.posten.no" variant="solid" target="_blank">
                  <Card.BodyActionArrow direction="up-right" />
                  Mail to mailbox
                </Link>
              </Card.BodyAction>
            </Card.Body>
          </Card>
          <Card variant="miniature" theme="default" data-color="neutral">
            <Card.Media>
              <Card.MediaImg src={customerParcel} />
            </Card.Media>
            <Card.Body>
              <Card.BodyHeader as="h2">
                <Card.BodyHeaderTitle>Neutral Default</Card.BodyHeaderTitle>
              </Card.BodyHeader>
              <Card.BodyDescription>Our services for international transport</Card.BodyDescription>
              <Card.BodyAction asChild>
                <Link href="https://www.posten.no" variant="solid" target="_blank">
                  <Card.BodyActionArrow />
                  International cargo
                </Link>
              </Card.BodyAction>
            </Card.Body>
          </Card>
          <Card variant="miniature" theme="tinted" data-color="neutral">
            <Card.Media>
              <Card.MediaImg src={customerParcel} />
            </Card.Media>
            <Card.Body>
              <Card.BodyHeader as="h2">
                <Card.BodyHeaderTitle>Neutral Tinted</Card.BodyHeaderTitle>
              </Card.BodyHeader>
              <Card.BodyDescription>
                Our services for national and international transport
              </Card.BodyDescription>
              <Card.BodyAction asChild>
                <Link href="https://www.posten.no" variant="solid" target="_blank">
                  <Card.BodyActionArrow direction="up-right" />
                  Parcels and cargo
                </Link>
              </Card.BodyAction>
            </Card.Body>
          </Card>
          <Card variant="miniature" theme="base" data-color="neutral">
            <Card.Media>
              <Card.MediaImg src={customerParcel} />
            </Card.Media>
            <Card.Body>
              <Card.BodyHeader as="h2">
                <Card.BodyHeaderTitle>Neutral Base</Card.BodyHeaderTitle>
              </Card.BodyHeader>
              <Card.BodyDescription>
                Mail and direct mail delivered to the mailbox
              </Card.BodyDescription>
              <Card.BodyAction asChild>
                <Link href="https://www.posten.no" variant="solid" target="_blank">
                  <Card.BodyActionArrow />
                  Mail to mailbox
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
