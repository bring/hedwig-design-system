import "@postenbring/hedwig-css";
import { Card, Container, Button, ButtonList } from "@postenbring/hedwig-react";
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
        <h2>Default color (darker) - Imageposition right - one CTA button</h2>
        <Card variant="focus">
          <Card.Media>
            <Card.MediaImg alt="Image to the right" src={postenBringImage} />
          </Card.Media>
          <Card.Body>
            <Card.BodyHeader as="h1">
              <Card.BodyHeaderTitle>Hero card</Card.BodyHeaderTitle>
            </Card.BodyHeader>
            <Card.BodyDescription>
              Hero cards should use H1 headers (&lt;Card.BodyHeader as=&quot;h1&quot;&gt;), as they
              usually function as the main title of a page.
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

        <h2>Dark color - Imageposition left - two CTA buttons</h2>
        <Card variant="focus" color="dark" imagePosition="left">
          <Card.Media>
            <Card.MediaImg alt="Image to the left" src={postenBringImage} />
          </Card.Media>
          <Card.Body>
            <Card.BodyHeader as="h1">
              <Card.BodyHeaderTitle>Hero card</Card.BodyHeaderTitle>
            </Card.BodyHeader>
            <Card.BodyDescription>
              On multiple buttons, they should be wrapped in a common &lt;ButtonList
              variant=&quot;stretched&quot;&gt;. Every button except the first one should be
              variant=&lt;&quot;inverted&quot;&gt;.
            </Card.BodyDescription>
            <Card.BodyActionRow asChild>
              <ButtonList variant="stretched">
                <Card.BodyAction asChild>
                  <Button fullWidth="mobile" asChild>
                    <a href="https://www.posten.no">First button</a>
                  </Button>
                </Card.BodyAction>
                <Card.BodyAction asChild>
                  <Button fullWidth="mobile" variant="inverted" asChild>
                    <a href="https://www.posten.no">Second, inverted</a>
                  </Button>
                </Card.BodyAction>
              </ButtonList>
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
