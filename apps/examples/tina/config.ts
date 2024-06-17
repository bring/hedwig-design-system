import { defineConfig } from "tinacms";

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
    basePath: "/hedwig-design-system/examples/storefront",
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
    collections: [
      {
        format: "mdx",
        ui: {
          router: (props) => {
            return `/hedwig-design-system/examples/storefront/${props.document._sys.filename}`;
          },
        },
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "subtitle",
            label: "Subtitle",
            required: false,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
            templates: [
              {
                name: "Examples",
                label: "Examples",
                fields: [
                  {
                    name: "name",
                    label: "Name of the component/pattern",
                    type: "string",
                  },
                  {
                    name: "showCodeByDefault",
                    label: "Show code by default",
                    type: "boolean",
                  },
                ],
              },
              {
                name: "FigmaPreviews",
                label: "Figma Previews",
                fields: [
                  {
                    name: "urls",
                    label: "Figma URLs",
                    type: "string",
                    list: true,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
});
