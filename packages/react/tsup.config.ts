import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.tsx", "src/**/*.tsx", "!src/**/*.stories.tsx"],
  sourcemap: true,
  format: ["cjs", "esm"],
  dts: true,
  external: ["react", "react-dom"],
});
