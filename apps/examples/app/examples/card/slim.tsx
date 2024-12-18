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
            This is the default card variant. The link below is preceeded by an arrow.
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
            The slim cards are a collection of items. They will have the same height while on the
            same row.
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
            If there is a lot of contents in the card body, the media will be cropped to make the
            cards look equally crowded. The links will be aligned at the bottom across the cards in
            a row.
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
          <Card.BodyDescription>A short card.</Card.BodyDescription>
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
