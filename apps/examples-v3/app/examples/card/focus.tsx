import "@postenbring/hedwig-css";
import { Card, Container, Link, ButtonList, Button } from "@postenbring/hedwig-react";
import postenBringImage from "../../assets/posten-bring.avif";
import vectoriImage from "../../assets/customer-parcel.svg";

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
              alt="Use variant=crop on photographs, to make the image fill the frame completely"
              src={postenBringImage}
              variant="crop"
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
              <Link href="https://www.posten.no" variant="inverted" icon="leading">
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
              alt="Use variant=crop on photographs, to make the image fill the frame completely"
              src={postenBringImage}
              variant="crop"
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

        <h2>Scale illustrations (no cropping)</h2>
        <Card variant="focus" color="dark">
          <Card.Media>
            <Card.MediaImg
              alt="Images with transparent backgrounds (eg. SVG's, some PNG's) should be used with variant=scale, or no variant prop at all. This leaves some empty space on the sides/above/below if needed for showing the full image."
              src={vectoriImage}
            />
          </Card.Media>
          <Card.Body>
            <Card.BodyHeader as="h2">
              <Card.BodyHeaderTitle>Import duties</Card.BodyHeaderTitle>
            </Card.BodyHeader>
            <Card.BodyDescription>
              Images with transparent backgrounds (eg. SVG&lsquo;s, some PNG&lsquo;s) should be used
              with variant=scale, or no variant prop at all. This leaves some empty space on the
              sides/above/below if needed for showing the full image.
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
                  <Button fullWidth="mobile" variant="inverted" asChild>
                    <a href="https://www.posten.no" target="_blank" rel="noreferrer">
                      Inverted
                    </a>
                  </Button>
                </Card.BodyAction>
              </ButtonList>
            </Card.BodyActionRow>
          </Card.Body>
        </Card>

        <h2>Hero card</h2>
        <Card variant="focus">
          <Card.Media>
            <Card.MediaImg alt="Image to the right" src={postenBringImage} />
          </Card.Media>
          <Card.Body>
            <Card.BodyHeader asChild>
              <h1>
                <Card.BodyHeaderTitle>Hero card</Card.BodyHeaderTitle>
              </h1>
            </Card.BodyHeader>
            <Card.BodyDescription>
              H1 header to function as the main title of a page.
            </Card.BodyDescription>
            <Card.BodyActionRow>
              <Card.BodyAction asChild>
                <Button fullWidth="mobile" asChild>
                  <a href="https://www.posten.no">Internal link</a>
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
  description: `<p>
    Please note that Focus card will be deprecated in the next major release. From the next major release, you can achieve the same look as the deprecated default focus card (darker) by setting <code>data-color-scheme="dark"</code> and <code>data-color="tinted"</code> on your full-width card component.
     </p>`,
};
