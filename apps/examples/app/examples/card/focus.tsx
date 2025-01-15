import "@postenbring/hedwig-css";
import { Card, Link, Container } from "@postenbring/hedwig-react";
import postenBringImage from "../../assets/posten-bring.avif";

function Example() {
  return (
    <Container>
      <Card variant="focus">
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
            From January 1, 2024, the authorities will abolish the 350-kroner limit. This means that
            you have to pay import duties from the first krone on most of what you buy from abroad.
            The new rules largely mean that foreign online shops will collect the value added tax
            (VAT) immediately when you shop and pay for the goods.
          </Card.BodyDescription>
          <Card.BodyAction asChild>
            <Link href="https://www.posten.no" variant="solid">
              <Card.BodyActionArrow />
              This is smart to know
            </Link>
          </Card.BodyAction>
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
