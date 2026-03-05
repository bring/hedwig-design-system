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
        <Card variant="miniature" color="white">
          <Card.Media>
            <Card.MediaImg
              src={postenBringImage}
              alt="Posten delivery van with Bring cargo truck in the background"
            />
          </Card.Media>
          <Card.Body>
            <Card.BodyHeader as="h2">
              <Card.BodyHeaderTitle>White -{">"} Neutral Default</Card.BodyHeaderTitle>
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

        <Card variant="miniature" color="lighter-brand">
          <Card.Media>
            <Card.MediaImg
              src={postenBringImage}
              alt="Posten delivery van with Bring cargo truck in the background"
            />
          </Card.Media>
          <Card.Body>
            <Card.BodyHeader as="h2">
              <Card.BodyHeaderTitle>Lighter Brand -{">"} Brand Default</Card.BodyHeaderTitle>
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

        <Card variant="miniature" color="light-grey-fill">
          <Card.Media>
            <Card.MediaImg
              src={postenBringImage}
              alt="Posten delivery van with Bring cargo truck in the background"
            />
          </Card.Media>
          <Card.Body>
            <Card.BodyHeader as="h2">
              <Card.BodyHeaderTitle>Light Grey Fill -{">"} Neutral Base</Card.BodyHeaderTitle>
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

        <h2>Focus - No color given</h2>
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

        <h2>Focus - Darker color given</h2>
        <Card variant="focus" color="darker">
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

        <h2>Focus - Dark color given</h2>
        <Card variant="focus" color="dark">
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
              <Link href="posten.no">
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
  index: 3,
  layout: "none",
  description:
    "⚠️ Focus card is deprecated. Use Full-width card instead.<br>" +
    "Colors deprecated. Use props `data-color` and `theme` instead ⚠️",
};
