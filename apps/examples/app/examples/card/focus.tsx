import "@postenbring/hedwig-css";
import { Card, Container, Link } from "@postenbring/hedwig-react";
import postenBringImage from "../../assets/posten-bring.avif";

function Example() {
  return (
    <Container>
      <div
        style={{
          display: "grid",
          gap: "var(--hds-spacing-24-32)",
        }}
      >
        <h2>Color - Darker Brand - Default</h2>
        <Card variant="focus">
          <Card.Media>
            <Card.MediaImg
              alt="Posten delivery van with Bring cargo truck in the background"
              src={postenBringImage}
            />
          </Card.Media>
          <Card.Body>
            <Card.BodyHeader as="h2">
              <Card.BodyHeaderTitle>Import duties</Card.BodyHeaderTitle>
            </Card.BodyHeader>
            <Card.BodyDescription>
              From January 1, 2024, the authorities will abolish the 350-kroner limit. This means
              that you have to pay import duties from the first krone on most of what you buy from
              abroad. The new rules largely mean that foreign online shops will collect the value
              added tax (VAT) immediately when you shop and pay for the goods.
            </Card.BodyDescription>
            <Card.BodyAction asChild>
              <Link href="https://www.posten.no" icon="leading">
                <Card.BodyActionArrow direction="right" />
                Internal link
              </Link>
            </Card.BodyAction>
          </Card.Body>
        </Card>

        <h2>Color - Dark Brand - Image right</h2>
        <Card variant="focus" color="dark" imagePosition="right">
          <Card.Media>
            <Card.MediaImg
              alt="Posten delivery van with Bring cargo truck in the background"
              src={postenBringImage}
            />
          </Card.Media>
          <Card.Body>
            <Card.BodyHeader as="h2">
              <Card.BodyHeaderTitle>Import duties</Card.BodyHeaderTitle>
            </Card.BodyHeader>
            <Card.BodyDescription>
              From January 1, 2024, the authorities will abolish the 350-kroner limit. This means
              that you have to pay import duties from the first krone on most of what you buy from
              abroad. The new rules largely mean that foreign online shops will collect the value
              added tax (VAT) immediately when you shop and pay for the goods.
            </Card.BodyDescription>
            <Card.BodyAction asChild>
              <Link href="posten.no" variant="inverted">
                <Card.BodyActionArrow direction="up-right" />
                External link
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
