import "@postenbring/hedwig-css";
import { Avatar, AvatarGroup } from "@postenbring/hedwig-react";

function portrait(background: string) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="${background}"/><circle cx="50" cy="38" r="18" fill="#fff" fill-opacity=".8"/><path d="M14 100c0-22 16-36 36-36s36 14 36 36z" fill="#fff" fill-opacity=".8"/></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

const sizes = ["small", "medium", "large", "xlarge"] as const;

function Example() {
  return (
    <div style={{ display: "grid", gap: "1.5rem", justifyItems: "start" }}>
      {sizes.map((size) => (
        <div key={size}>
          <p>{size}</p>
          <AvatarGroup size={size} aria-label="Deltakere">
            <Avatar src={portrait("#7a9cc6")} alt="Anne Heier" />
            <Avatar aria-label="Per Hansen">PH</Avatar>
            <Avatar src={portrait("#c69c7a")} alt="Kari Berg" />
            <Avatar aria-label="Ola Nordmann">ON</Avatar>
          </AvatarGroup>
        </div>
      ))}
    </div>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 1,
  description:
    "<code>AvatarGroup</code> shows avatars as an overlapping stack. The avatars get the <code>size</code> of the group, and can be a mix of images and initials.",
};
