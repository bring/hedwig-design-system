import { defineConfig } from "tsup";

export default defineConfig({
  entry: [
    "src/index.tsx",

    "src/button/index.tsx",
    "src/button/button.tsx",

    "src/badge/index.tsx",
    "src/badge/badge.tsx",

    "src/link/index.tsx",
    "src/link/link.tsx",
  ],
});
