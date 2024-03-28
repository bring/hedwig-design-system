import { Card, Link } from "@postenbring/hedwig-react";
import postenBringImage from "../../assets/posten-bring.avif";

function Example() {
  return (
    <div
      style={{
        margin: "20px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "2.5em",
      }}
    >
      <Card>
        <Card.Media>
          <Card.Media.Img alt="posten-bring" src={postenBringImage} />
        </Card.Media>
        <Card.Body>
          <Card.Body.Header as="h3">
            <Card.Body.Header.Overline>Theme</Card.Body.Header.Overline>
            <Card.Body.Header.Title as="a" href="#">
              Article 1
            </Card.Body.Header.Title>
          </Card.Body.Header>
          <Card.Body.Description>
            In this example, the whole card is an <code>&lt;a&gt;</code> tag.
          </Card.Body.Description>
          <Card.Body.Action.Arrow as="span" />
        </Card.Body>
      </Card>
      <Card>
        <Card.Media>
          <Card.Media.Img alt="posten-bring" src={postenBringImage} />
        </Card.Media>
        <Card.Body>
          <Card.Body.Header as="h3">
            <Card.Body.Header.Overline>Theme</Card.Body.Header.Overline>
            <Card.Body.Header.Title as="a" href="#">
              Article 2
            </Card.Body.Header.Title>
          </Card.Body.Header>
          <Card.Body.Description>
            In this example, only the arrow below is a link.
          </Card.Body.Description>
          <Card.Body.Action.Arrow />
        </Card.Body>
      </Card>
      <Card>
        <Card.Media>
          <Card.Media.Img alt="posten-bring" src={postenBringImage} />
        </Card.Media>
        <Card.Body>
          <Card.Body.Header as="h3">
            <Card.Body.Header.Overline>Theme</Card.Body.Header.Overline>
            <Card.Body.Header.Title as={Link} href="#">
              Article 3
            </Card.Body.Header.Title>
          </Card.Body.Header>
          <Card.Body.Description>
            In this example, there is a <code>&lt;Link&gt;</code> component below.
          </Card.Body.Description>
          <Card.Body.Action>Read more</Card.Body.Action>
        </Card.Body>
      </Card>
      <Card className="hds-theme-bring">
        <Card.Media>
          <Card.Media.Img alt="posten-bring" src={postenBringImage} />
        </Card.Media>
        <Card.Body>
          <Card.Body.Header as="h3">
            <Card.Body.Header.Overline>Theme</Card.Body.Header.Overline>
            <Card.Body.Header.Title as="a" href="#">
              Article 4
            </Card.Body.Header.Title>
          </Card.Body.Header>
          <Card.Body.Description>A Bring card.</Card.Body.Description>
          <Card.Body.Action.Arrow as="span" />
        </Card.Body>
      </Card>
    </div>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  layout: "none",
};
