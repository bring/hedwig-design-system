import { Accordion } from "@postenbring/hedwig-react";

function Example() {
  return (
    <Accordion>
      <Accordion.Item>
        <Accordion.Header>The Dark Knight Rises</Accordion.Header>
        <Accordion.Content>
          Batman battles the formidable terrorist Bane to save Gotham City from destruction, facing
          personal challenges and sacrifices along the way.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Header>Looper</Accordion.Header>
        <Accordion.Content>
          Hitman goes back in time to kill people, but chokes it out when he is sent back to kill
          himself. Then some hovering grass if I remember it correctly.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Header>Jurassic Park</Accordion.Header>
        <Accordion.Content>
          A bunch of people go to an island to usertest a theme park with dinosaurs. And they
          brought kids, so what can go wrong? Hold on to ya butts.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {};
