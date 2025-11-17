import "@postenbring/hedwig-css";
import { Card, Link, Container, Button, ButtonList } from "@postenbring/hedwig-react";
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
        <h2>Color - Brand Default - Default</h2>
        <Card variant="full-width" color="brand-default">
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
        <h2>Color - Brand Default - Image right</h2>
        <Card variant="full-width" color="brand-default" imagePosition="right">
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
        <h2>Color - Neutral Default</h2>
        <Card variant="full-width" color="neutral-default">
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
        <h2>Color - Neutral Subtle</h2>
        <Card variant="full-width" color="neutral-subtle">
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
        <h2>A single CTA Button</h2>
        <Card variant="full-width" color="brand-default">
          <Card.Media>
            <Card.MediaImg
              alt="Posten delivery van with Bring cargo truck in the background"
              src={postenBringImage}
            />
          </Card.Media>
          <Card.Body>
            <Card.BodyHeader as="h2">
              <Card.BodyHeaderOverline>CTA buttons</Card.BodyHeaderOverline>
              <Card.BodyHeaderTitle>Only one button: Button</Card.BodyHeaderTitle>
            </Card.BodyHeader>
            <Card.BodyDescription>
              For a single CTA button, just use the Button component direclty.
            </Card.BodyDescription>
            <Card.BodyActionRow>
              <Card.BodyAction asChild>
                <Button fullWidth="mobile" asChild>
                  <a href="https://www.postenbring.no" target="_blank" rel="noreferrer">
                    Primary
                  </a>
                </Button>
              </Card.BodyAction>
            </Card.BodyActionRow>
          </Card.Body>
        </Card>
        <h2>More CTA Buttons</h2>
        <Card variant="full-width" color="brand-default">
          <Card.Media>
            <Card.MediaImg
              alt="Posten delivery van with Bring cargo truck in the background"
              src={postenBringImage}
            />
          </Card.Media>
          <Card.Body>
            <Card.BodyHeader as="h2">
              <Card.BodyHeaderOverline>CTA buttons</Card.BodyHeaderOverline>
              <Card.BodyHeaderTitle>Multiple buttons: ButtonList</Card.BodyHeaderTitle>
            </Card.BodyHeader>
            <Card.BodyDescription>
              For more than 1 CTA button, use{" "}
              <pre
                style={{
                  display: "inline",
                  backgroundColor: "rgba(0,0,0,.06)",
                  padding: "0 4px",
                }}
              >
                &lt;ButtonList variant=&quot;stretched&quot;&gt;
              </pre>
              , and add an &apos;asChild&apos; prop to the surrounding Card.BodyActionRow.
            </Card.BodyDescription>
            <Card.BodyActionRow asChild>
              <ButtonList variant="stretched">
                <Card.BodyAction asChild>
                  <Button fullWidth="mobile" asChild>
                    <a href="https://www.postenbring.no" target="_blank" rel="noreferrer">
                      Primary
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
              </ButtonList>
            </Card.BodyActionRow>
          </Card.Body>
        </Card>
        <h2>Scale image, no cropping</h2>
        <Card variant="full-width" color="brand-default">
          <Card.Media>
            <Card.MediaImg
              alt="Posten delivery van with Bring cargo truck in the background"
              variant="scale"
              src={postenBringImage}
            />
          </Card.Media>
          <Card.Body>
            <Card.BodyHeader as="h2">
              <Card.BodyHeaderOverline>Scale</Card.BodyHeaderOverline>
              <Card.BodyHeaderTitle>No image cropping</Card.BodyHeaderTitle>
            </Card.BodyHeader>
            <Card.BodyDescription>
              Some images, in particular SVG illustrations with transparent backgrounds, should not
              have their edges cropped but show the background instead (since they are transparent
              and do that anyway). The prop{" "}
              <pre
                style={{
                  display: "inline",
                  backgroundColor: "rgba(0,0,0,.06)",
                  padding: "0 4px",
                }}
              >
                variant=&quot;scale&quot;
              </pre>{" "}
              on the image disables the cropping behavior when images resize.
            </Card.BodyDescription>
            <Card.BodyActionRow>
              <Card.BodyAction asChild>
                <Button fullWidth="mobile" asChild>
                  <a href="https://www.postenbring.no" target="_blank" rel="noreferrer">
                    Button
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
