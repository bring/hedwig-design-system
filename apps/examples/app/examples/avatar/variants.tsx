import "@postenbring/hedwig-css";
import { Avatar } from "@postenbring/hedwig-react";

function portrait(background: string) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="${background}"/><circle cx="50" cy="38" r="18" fill="#fff" fill-opacity=".8"/><path d="M14 100c0-22 16-36 36-36s36 14 36 36z" fill="#fff" fill-opacity=".8"/></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

function Example() {
  return (
    <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
      <Avatar size="large" aria-label="Anne Heier">
        AH
      </Avatar>
      <Avatar size="large" aria-label="Ukjent bruker" />
      <Avatar size="large" src={portrait("#7a9cc6")} alt="Thomas Lind" />
      <Avatar size="large" variant="logo" aria-label="Posten Bring" />
    </div>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 2,
  description:
    'An avatar can show initials, an icon, an image (<code>src</code>) or a logo (<code>variant="logo"</code>).',
};
