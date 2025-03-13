import "@postenbring/hedwig-css";
import { Card, Link, Container, Button } from "@postenbring/hedwig-react";
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
        <h2>Color - Lighter Brand - Default</h2>
        <Card variant="full-width" color="lighter-brand">
          <Card.Media>
            <Card.MediaImg
              alt="Posten delivery van with Bring cargo truck in the background"
              src={postenBringImage}
            />
          </Card.Media>
          <Card.Body>
            <Card.BodyHeader as="h2">
              <Card.BodyHeaderOverline>Importing goods</Card.BodyHeaderOverline>
              <Card.BodyHeaderTitle>Import duties</Card.BodyHeaderTitle>
            </Card.BodyHeader>
            <Card.BodyDescription>
              From January 1, 2024, the authorities will abolish the 350-kroner limit. This means
              that you have to pay import duties from the first krone on most of what you buy from
              abroad. The new rules largely mean that foreign online shops will collect the value
              added tax (VAT) immediately when you shop and pay for the goods.
            </Card.BodyDescription>
            <Card.BodyAction asChild>
              <Link href="https://www.posten.no" variant="solid">
                <Card.BodyActionArrow />
                Import duty changes from 2024
              </Link>
            </Card.BodyAction>
          </Card.Body>
        </Card>
        <h2>Color - Lighter Brand - Default - Image right</h2>
        <Card variant="full-width" color="lighter-brand" imagePosition="right">
          <Card.Media>
            <Card.MediaImg
              alt="Posten delivery van with Bring cargo truck in the background"
              src={postenBringImage}
            />
          </Card.Media>
          <Card.Body>
            <Card.BodyHeader as="h2">
              <Card.BodyHeaderOverline>Importing goods</Card.BodyHeaderOverline>
              <Card.BodyHeaderTitle>Import duties</Card.BodyHeaderTitle>
            </Card.BodyHeader>
            <Card.BodyDescription>
              From January 1, 2024, the authorities will abolish the 350-kroner limit. This means
              that you have to pay import duties from the first krone on most of what you buy from
              abroad. The new rules largely mean that foreign online shops will collect the value
              added tax (VAT) immediately when you shop and pay for the goods.
            </Card.BodyDescription>
            <Card.BodyAction asChild>
              <Link href="https://www.posten.no" variant="solid">
                <Card.BodyActionArrow />
                Import duty changes from 2024
              </Link>
            </Card.BodyAction>
          </Card.Body>
        </Card>
        <h2>Color - Light Grey Fill</h2>
        <Card variant="full-width" color="light-grey-fill">
          <Card.Media>
            <Card.MediaImg
              alt="Posten delivery van with Bring cargo truck in the background"
              src={postenBringImage}
            />
          </Card.Media>
          <Card.Body>
            <Card.BodyHeader as="h2">
              <Card.BodyHeaderOverline>Importing goods</Card.BodyHeaderOverline>
              <Card.BodyHeaderTitle>Import duties</Card.BodyHeaderTitle>
            </Card.BodyHeader>
            <Card.BodyDescription>
              From January 1, 2024, the authorities will abolish the 350-kroner limit. This means
              that you have to pay import duties from the first krone on most of what you buy from
              abroad. The new rules largely mean that foreign online shops will collect the value
              added tax (VAT) immediately when you shop and pay for the goods.
            </Card.BodyDescription>
            <Card.BodyAction asChild>
              <Link href="https://www.posten.no" variant="solid">
                <Card.BodyActionArrow />
                Import duty changes from 2024
              </Link>
            </Card.BodyAction>
          </Card.Body>
        </Card>
        <h2>Color - White</h2>
        <Card variant="full-width" color="white">
          <Card.Media>
            <Card.MediaImg
              alt="Posten delivery van with Bring cargo truck in the background"
              src={postenBringImage}
            />
          </Card.Media>
          <Card.Body>
            <Card.BodyHeader as="h2">
              <Card.BodyHeaderOverline>Importing goods</Card.BodyHeaderOverline>
              <Card.BodyHeaderTitle>Import duties</Card.BodyHeaderTitle>
            </Card.BodyHeader>
            <Card.BodyDescription>
              From January 1, 2024, the authorities will abolish the 350-kroner limit. This means
              that you have to pay import duties from the first krone on most of what you buy from
              abroad. The new rules largely mean that foreign online shops will collect the value
              added tax (VAT) immediately when you shop and pay for the goods.
            </Card.BodyDescription>
            <Card.BodyAction asChild>
              <Link href="https://www.posten.no" variant="solid">
                <Card.BodyActionArrow />
                Import duty changes from 2024
              </Link>
            </Card.BodyAction>
          </Card.Body>
        </Card>
        <h2>CTA Buttons</h2>
        <Card variant="full-width" color="lighter-brand">
          <Card.Media>
            <Card.MediaImg
              alt="Posten delivery van with Bring cargo truck in the background"
              src={postenBringImage}
            />
          </Card.Media>
          <Card.Body>
            <Card.BodyHeader as="h2">
              <Card.BodyHeaderOverline>Importing goods</Card.BodyHeaderOverline>
              <Card.BodyHeaderTitle>Import duties</Card.BodyHeaderTitle>
            </Card.BodyHeader>
            <Card.BodyDescription>
              From January 1, 2024, the authorities will abolish the 350-kroner limit. This means
              that you have to pay import duties from the first krone on most of what you buy from
              abroad. The new rules largely mean that foreign online shops will collect the value
              added tax (VAT) immediately when you shop and pay for the goods.
            </Card.BodyDescription>
            <Card.BodyActionRow>
              <Card.BodyAction asChild>
                <Button fullWidth="mobile" asChild>
                  <a href="https://www.postenbring.no" target="_blank" rel="noreferrer">
                    Primary
                  </a>
                </Button>
              </Card.BodyAction>
              <Card.BodyAction asChild>
                <Button fullWidth="mobile" variant="primary-outline" asChild>
                  <a href="https://www.posten.no" target="_blank" rel="noreferrer">
                    Pr. outline
                  </a>
                </Button>
              </Card.BodyAction>
              <Card.BodyAction asChild>
                <Button fullWidth="mobile" variant="secondary" asChild>
                  <a href="https://www.posten.no" target="_blank" rel="noreferrer">
                    Secondary
                  </a>
                </Button>
              </Card.BodyAction>
              <Card.BodyAction asChild>
                <Button fullWidth="mobile" variant="secondary-outline" asChild>
                  <a href="https://www.posten.no" target="_blank" rel="noreferrer">
                    Sec. outline
                  </a>
                </Button>
              </Card.BodyAction>
            </Card.BodyActionRow>
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
