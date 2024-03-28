import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 6005,
  },
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        "kitchen-sink": resolve(__dirname, "kitchen-sink.html"),
        tailwind: resolve(__dirname, "tailwind.html"),
        "css-only": resolve(__dirname, "css-only.html"),
      },
    },
  },
  resolve: {
    alias: [
      {
        find: "@postenbring/hedwig-react",
        replacement: new URL("../../packages/react/src", import.meta.url).pathname,
      },
    ],
  },
});
