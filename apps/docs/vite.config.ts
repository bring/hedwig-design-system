import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@postenbring/hedwig-react/dist/index-no-css",
        replacement: new URL("../../packages/react/src/index-no-css.tsx", import.meta.url).pathname,
      },
      {
        find: "@postenbring/hedwig-react",
        replacement: new URL("../../packages/react/src", import.meta.url).pathname,
      },
    ],
  },
});
