import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.tsx", "src/**/*.tsx", "!src/**/*.stories.tsx"],
  sourcemap: true,
  format: ["cjs", "esm"],
  experimentalDts: true,
  external: ["react", "react-dom"],
});
