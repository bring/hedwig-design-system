import "@postenbring/hedwig-css";
import { Card, Link, Container } from "@postenbring/hedwig-react";
import postenBringImage from "../../assets/posten-bring.avif";

function Example() {
  return (
    <Container>
      <Card variant="horizontal">
        <Card.Media>
          <Card.MediaImg alt="posten-bring" src={postenBringImage} />
        </Card.Media>
        <Card.Body>
          <Card.BodyHeader as="h2">
            <Card.BodyHeaderOverline>Theme</Card.BodyHeaderOverline>
            <Card.BodyHeaderTitle>Cool article</Card.BodyHeaderTitle>
          </Card.BodyHeader>
          <Card.BodyDescription>
            The card will take up all available space by default. It is the consumer&apos;s choice
            and responsibility to limit the width if wanted.
          </Card.BodyDescription>
          <Card.BodyActionArrow />{" "}
          <Link href="https://www.posten.no" variant="solid">
            Read more
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 0,
  layout: "none",
};
