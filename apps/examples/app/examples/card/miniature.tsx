import "@postenbring/hedwig-css";
import { Card, Link, Container } from "@postenbring/hedwig-react";
import customerParcel from "../../assets/customer-parcel.svg";

function Example() {
  return (
    <Container>
      <div
        style={{
          margin: "var(--hds-spacing-20)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "var(--hds-spacing-24-32)",
        }}
      >
        <Card variant="miniature">
          <Card.Media>
            <Card.MediaImg alt="posten-bring" src={customerParcel} />
          </Card.Media>
          <Card.Body>
            <Card.BodyHeader as="h2">
              <Card.BodyHeaderTitle>Cool article</Card.BodyHeaderTitle>
            </Card.BodyHeader>
            <Card.BodyDescription>
              If you have an address label for return, you can place it on the middle of the parcel.
            </Card.BodyDescription>
            <Card.BodyAction>
              <Link href="https://www.posten.no" variant="solid" target="_blank">
                <Card.BodyActionArrow direction="up-right" />
                Only link
              </Link>
            </Card.BodyAction>
          </Card.Body>
        </Card>
        <Card variant="miniature">
          <Card.Media>
            <Card.MediaImg alt="posten-bring" src={customerParcel} />
          </Card.Media>
          <Card.Body>
            <Card.BodyHeader as="h2">
              <Card.BodyHeaderTitle>Another article</Card.BodyHeaderTitle>
            </Card.BodyHeader>
            <Card.BodyDescription>
              If you have an address label for return, you can place it on the middle of the parcel.
            </Card.BodyDescription>
            <Card.BodyAction asChild>
              <Link href="https://www.posten.no" variant="solid" target="_blank">
                <Card.BodyActionArrow />
                Only link
              </Link>
            </Card.BodyAction>
          </Card.Body>
        </Card>
        <Card variant="miniature">
          <Card.Media>
            <Card.MediaImg alt="posten-bring" src={customerParcel} />
          </Card.Media>
          <Card.Body>
            <Card.BodyAction asChild>
              <Link href="https://www.posten.no" variant="solid" target="_blank">
                <Card.BodyActionArrow />
                Only link
              </Link>
            </Card.BodyAction>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 0,
  layout: "none",
};
