import "@postenbring/hedwig-css";
import { Avatar } from "@postenbring/hedwig-react";

const sizes = ["small", "medium", "large", "xlarge"] as const;

function Example() {
  return (
    <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
      {sizes.map((size) => (
        <Avatar key={size} size={size} aria-label="Anne Heier">
          AH
        </Avatar>
      ))}
    </div>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 1,
  description:
    "Use <code>size</code> to choose between <code>small</code> (32px), <code>medium</code> (40px, default), <code>large</code> (60px) and <code>xlarge</code> (100px).",
};
