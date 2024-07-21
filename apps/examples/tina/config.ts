import { defineConfig } from "tinacms";
import { GlobalCollection } from "./global-collection";
import { PageCollection } from "./page-collection";
import { ComponentCollection } from "./component-collection";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  cmsCallback: (a) => a,
  build: {
    basePath: "/hedwig-design-system/storefront/",
    outputFolder: "storefront/admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },

  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [PageCollection, ComponentCollection, GlobalCollection],
  },
});
