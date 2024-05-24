import "@postenbring/hedwig-css";
import { Link, Message, Text } from "@postenbring/hedwig-react";

function Example() {
  return (
    <Message variant="attention" lang="no">
      <Message.Title>For tiden store forsinkelser</Message.Title>
      <Message.Description>
        Store snømenger skaper problemer i trafikken som igjen fører til noe lengre leveringstid.
        <Text className="hds-mt-16-20">
          <Link href="#">Til driftsmeldinger</Link>
        </Text>
      </Message.Description>
    </Message>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {};
