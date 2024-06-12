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
      <Card>
        <Card.Media>
          <Card.MediaImg alt="posten-bring" src={postenBringImage} />
        </Card.Media>
        <Card.Body>
          <Card.BodyHeader as="h3">
            <Card.BodyHeaderOverline>Theme</Card.BodyHeaderOverline>
            <Card.BodyHeaderTitle asChild>
              <a href="#article-1">Article 1</a>
            </Card.BodyHeaderTitle>
          </Card.BodyHeader>
          <Card.BodyDescription>
            In this example, the whole card is an <code>&lt;a&gt;</code> tag.
          </Card.BodyDescription>
          <Card.BodyActionArrow />
        </Card.Body>
      </Card>
      <Card>
        <Card.Media>
          <Card.MediaImg alt="posten-bring" src={postenBringImage} />
        </Card.Media>
        <Card.Body>
          <Card.BodyHeader as="h3">
            <Card.BodyHeaderOverline>Theme</Card.BodyHeaderOverline>
            <Card.BodyHeaderTitle asChild>
              <a href="#article-2">Article 2</a>
            </Card.BodyHeaderTitle>
          </Card.BodyHeader>
          <Card.BodyDescription>
            In this example, only the arrow below is a link.
          </Card.BodyDescription>
          <Card.BodyActionArrow />
        </Card.Body>
      </Card>
      <Card>
        <Card.Media>
          <Card.MediaImg alt="posten-bring" src={postenBringImage} />
        </Card.Media>
        <Card.Body>
          <Card.BodyHeader as="h3">
            <Card.BodyHeaderOverline>Theme</Card.BodyHeaderOverline>
            <Card.BodyHeaderTitle asChild>
              <Link href="#article-3">Article 3</Link>
            </Card.BodyHeaderTitle>
          </Card.BodyHeader>
          <Card.BodyDescription>
            In this example, there is a <code>&lt;Link&gt;</code> component below.
          </Card.BodyDescription>
          <Card.BodyAction>Read more</Card.BodyAction>
        </Card.Body>
      </Card>
      <Card className="hds-theme-bring">
        <Card.Media>
          <Card.MediaImg alt="posten-bring" src={postenBringImage} />
        </Card.Media>
        <Card.Body>
          <Card.BodyHeader as="h3">
            <Card.BodyHeaderOverline>Theme</Card.BodyHeaderOverline>
            <Card.BodyHeaderTitle asChild>
              <a href="#article-4">Article 4</a>
            </Card.BodyHeaderTitle>
          </Card.BodyHeader>
          <Card.BodyDescription>A Bring card.</Card.BodyDescription>
          <Card.BodyActionArrow />
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
