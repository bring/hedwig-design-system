import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.tsx", "src/button/button.tsx", "src/button/button-with-css.tsx"],
});
