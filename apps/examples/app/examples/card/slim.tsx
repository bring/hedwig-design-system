import "@postenbring/hedwig-css";
import { Card, Link } from "@postenbring/hedwig-react";
import postenBringImage from "../../assets/posten-bring.avif";

function Example() {
  return (
    <div
      style={{
        margin: "var(--hds-spacing-20)",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "var(--hds-spacing-24-32)",
      }}
    >
      <Card variant="slim">
        <Card.Media>
          <Card.MediaImg alt="posten-bring" src={postenBringImage} />
        </Card.Media>
        <Card.Body>
          <Card.BodyHeader as="h3">
            <Card.BodyHeaderOverline>Theme</Card.BodyHeaderOverline>
            <Card.BodyHeaderTitle>Article 1</Card.BodyHeaderTitle>
          </Card.BodyHeader>
          <Card.BodyDescription>
            In this example, the whole card is an <code>&lt;a&gt;</code> tag.
          </Card.BodyDescription>
          <Card.BodyAction>
            <Link href="#article-1" variant="solid">
              <Card.BodyActionArrow />
              Read more
            </Link>
          </Card.BodyAction>
        </Card.Body>
      </Card>
      <Card variant="slim">
        <Card.Media>
          <Card.MediaImg alt="posten-bring" src={postenBringImage} />
        </Card.Media>
        <Card.Body>
          <Card.BodyHeader as="h3">
            <Card.BodyHeaderOverline>Theme</Card.BodyHeaderOverline>
            <Card.BodyHeaderTitle>Article 2 </Card.BodyHeaderTitle>
          </Card.BodyHeader>
          <Card.BodyDescription>
            In this example, only the arrow below is a link.
          </Card.BodyDescription>
          <Card.BodyAction>
            <Card.BodyActionArrow />
            <Link href="#article-2" variant="solid">
              Read more
            </Link>
          </Card.BodyAction>
        </Card.Body>
      </Card>
      <Card variant="slim">
        <Card.Media>
          <Card.MediaImg alt="posten-bring" src={postenBringImage} />
        </Card.Media>
        <Card.Body>
          <Card.BodyHeader as="h3">
            <Card.BodyHeaderOverline>Theme</Card.BodyHeaderOverline>
            <Card.BodyHeaderTitle>Article 3</Card.BodyHeaderTitle>
          </Card.BodyHeader>
          <Card.BodyDescription>
            In this example, there is a <code>&lt;Link&gt;</code> component below.
          </Card.BodyDescription>
          <Card.BodyAction>
            <Link href="#article-3" variant="solid">
              <Card.BodyActionArrow />
              Read more
            </Link>
          </Card.BodyAction>
        </Card.Body>
      </Card>
      <Card variant="slim">
        <Card.Media>
          <Card.MediaImg alt="posten-bring" src={postenBringImage} />
        </Card.Media>
        <Card.Body>
          <Card.BodyHeader as="h3">
            <Card.BodyHeaderOverline>Theme</Card.BodyHeaderOverline>
            <Card.BodyHeaderTitle>Article 4</Card.BodyHeaderTitle>
          </Card.BodyHeader>
          <Card.BodyDescription>A Bring card.</Card.BodyDescription>
          <Card.BodyAction>
            <Link href="#article-4" variant="solid">
              <Card.BodyActionArrow />
              Read more
            </Link>
          </Card.BodyAction>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 1,
  layout: "none",
};
