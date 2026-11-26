import "@postenbring/hedwig-css";
import { Avatar } from "@postenbring/hedwig-react";

function Example() {
  return (
    <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
      <Avatar size="large" src="/does-not-exist.png" aria-label="Thomas Lind">
        TL
      </Avatar>
      <Avatar size="large" src="/does-not-exist.png" aria-label="Ukjent bruker" />
    </div>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 4,
  description:
    "If the image fails to load, the avatar shows its children (e.g. initials). Without children, the default icon is shown.",
};
