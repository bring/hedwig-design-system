import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.tsx", "src/**/*.tsx", "!src/**/*.stories.tsx"],
});
