import "@postenbring/hedwig-css";
import { Card } from "@postenbring/hedwig-react";
import type { ReactNode } from "react";
import postenBringImage from "../../assets/posten-bring.avif";

function Example() {
  return (
    <Card as="div">
      <Card.Media>
        <Card.MediaImg alt="posten-bring" src={postenBringImage} />
      </Card.Media>
      <Card.Body>
        <Card.BodyHeader as="h2">
          <Card.BodyHeaderOverline>Theme</Card.BodyHeaderOverline>
          <Card.BodyHeaderTitle asChild>
            <Link to="#article">Cool article</Link>
          </Card.BodyHeaderTitle>
        </Card.BodyHeader>
        <Card.BodyDescription>
          The card will take up all available space by default. It is the consumer&apos;s choice and
          responsibility to limit the width if wanted.
        </Card.BodyDescription>
        <Card.BodyActionArrow />
      </Card.Body>
    </Card>
  );
}

function Link({
  to,
  className,
  children,
}: {
  to: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a className={className} href={to}>
      {children}
    </a>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 0,
  layout: "none",
  description: `The card will take up all available space by default. It is the consumer&apos;s choice and responsibility to limit the width if wanted.`,
};
