/**
 * Import the hedwig css file, so the consumers don't have to. Plug and play.
 *
 * NOTE: Importing the full path, not just the package name.
 * For some reason vite did not include the css during development when this file only imported the package name.
 *
 * Consumers using the `@postenbring/hedwig-css` package directly should only need to import the package without a path.
 */
import "@postenbring/hedwig-css/dist/index.css";

export * from "./index-no-css";
