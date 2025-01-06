import "@postenbring/hedwig-css";
import { Card, Link, Container } from "@postenbring/hedwig-react";
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
        <Card variant="full-width" color="lighter-brand">
          <Card.Media>
            <Card.MediaImg alt="posten-bring" src={postenBringImage} />
          </Card.Media>
          <Card.Body>
            <Card.BodyHeader as="h2">
              <Card.BodyHeaderOverline>Color - Lighter Brand (default)</Card.BodyHeaderOverline>
              <Card.BodyHeaderTitle>Cool article</Card.BodyHeaderTitle>
            </Card.BodyHeader>
            <Card.BodyDescription>
              The card will take up all available space by default. It is the consumer&apos;s choice
              and responsibility to limit the width if wanted.
            </Card.BodyDescription>
            <Card.BodyAction asChild>
              <Link href="https://www.posten.no" variant="solid">
                <Card.BodyActionArrow />
                Read more
              </Link>
            </Card.BodyAction>
          </Card.Body>
        </Card>
        <Card variant="full-width" color="light-grey-fill">
          <Card.Media>
            <Card.MediaImg alt="posten-bring" src={postenBringImage} />
          </Card.Media>
          <Card.Body>
            <Card.BodyHeader as="h2">
              <Card.BodyHeaderOverline>Color - Light Grey Fill</Card.BodyHeaderOverline>
              <Card.BodyHeaderTitle>Cool article</Card.BodyHeaderTitle>
            </Card.BodyHeader>
            <Card.BodyDescription>
              The card will take up all available space by default. It is the consumer&apos;s choice
              and responsibility to limit the width if wanted.
            </Card.BodyDescription>
            <Card.BodyAction asChild>
              <Link href="https://www.posten.no" variant="solid">
                <Card.BodyActionArrow />
                Read more
              </Link>
            </Card.BodyAction>
          </Card.Body>
        </Card>
        <Card variant="full-width" color="white">
          <Card.Media>
            <Card.MediaImg alt="posten-bring" src={postenBringImage} />
          </Card.Media>
          <Card.Body>
            <Card.BodyHeader as="h2">
              <Card.BodyHeaderOverline>Color - White</Card.BodyHeaderOverline>
              <Card.BodyHeaderTitle>Cool article</Card.BodyHeaderTitle>
            </Card.BodyHeader>
            <Card.BodyDescription>
              The card will take up all available space by default. It is the consumer&apos;s choice
              and responsibility to limit the width if wanted.
            </Card.BodyDescription>
            <Card.BodyAction asChild>
              <Link href="https://www.posten.no" variant="solid">
                <Card.BodyActionArrow />
                Read more
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
