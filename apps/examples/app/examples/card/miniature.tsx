import "@postenbring/hedwig-css";
import { Card, Link, Container } from "@postenbring/hedwig-react";
import customerParcel from "../../assets/customer-parcel.svg";

function Example() {
  return (
    <>
      <Container>
        <h2>Color - Brand Default - Default</h2>
        <div
          style={{
            marginTop: "var(--hds-spacing-20)",
            marginBottom: "var(--hds-spacing-20)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "var(--hds-spacing-24-32)",
          }}
        >
          <Card variant="miniature" color="brand-default">
            <Card.Media>
              <Card.MediaImg src={customerParcel} />
            </Card.Media>
            <Card.Body>
              <Card.BodyHeader as="h2">
                <Card.BodyHeaderTitle>Parcels and cargo</Card.BodyHeaderTitle>
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
          <Card variant="miniature" color="brand-tinted">
            <Card.Media>
              <Card.MediaImg src={customerParcel} />
            </Card.Media>
            <Card.Body>
              <Card.BodyHeader as="h2">
                <Card.BodyHeaderTitle>Parcels and cargo</Card.BodyHeaderTitle>
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
          <Card variant="miniature" color="brand-base">
            <Card.Media>
              <Card.MediaImg src={customerParcel} />
            </Card.Media>
            <Card.Body>
              <Card.BodyHeader as="h2">
                <Card.BodyHeaderTitle>Mail</Card.BodyHeaderTitle>
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
          <Card variant="miniature" color="neutral-default">
            <Card.Media>
              <Card.MediaImg src={customerParcel} />
            </Card.Media>
            <Card.Body>
              <Card.BodyHeader as="h2">
                <Card.BodyHeaderTitle>International cargo</Card.BodyHeaderTitle>
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
          <Card variant="miniature" color="neutral-tinted">
            <Card.Media>
              <Card.MediaImg src={customerParcel} />
            </Card.Media>
            <Card.Body>
              <Card.BodyHeader as="h2">
                <Card.BodyHeaderTitle>Parcels and cargo</Card.BodyHeaderTitle>
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
          <Card variant="miniature" color="neutral-base">
            <Card.Media>
              <Card.MediaImg src={customerParcel} />
            </Card.Media>
            <Card.Body>
              <Card.BodyHeader as="h2">
                <Card.BodyHeaderTitle>Mail</Card.BodyHeaderTitle>
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
  index: 0,
  layout: "none",
};
