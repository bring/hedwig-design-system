import { defineConfig } from "tsup";

export default defineConfig({
  // Set all files as entry points.
  // Only way I managed to get treeshaking in a fresh vite project to work (`npx create-vite@latest`)
  entry: ["src/**/*.ts", "src/**/*.tsx", "!src/**/*.stories.tsx"],
  sourcemap: true,
  bundle: true,
  format: ["esm", "cjs"],
  experimentalDts: true,
  external: ["react", "react-dom"],
});
