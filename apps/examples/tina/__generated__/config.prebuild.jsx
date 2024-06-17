// tina/config.ts
import { defineConfig } from "tinacms";

// tina/templates.ts
import { tinaTableTemplate } from "tinacms";
var templates = [
  // Examples
  {
    name: "Examples",
    label: "Examples",
    fields: [
      {
        name: "componentName",
        label: "Name of the component or pattern",
        type: "string",
        required: true,
      },
      {
        name: "exampleName",
        description: "Only show one specific example",
        label: "Specific example",
        type: "string",
      },
      {
        name: "showCodeByDefault",
        label: "Show code by default",
        type: "boolean",
      },
    ],
  },
  // Figma Previews
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
  // Figma Embed
  {
    name: "FigmaEmbed",
    label: "Figma Embed",
    fields: [
      {
        name: "url",
        label: "Figma URL",
        type: "string",
        required: true,
      },
      {
        name: "hideBottomBar",
        label: "Hide bottom bar",
        type: "boolean",
      },
    ],
  },
];
templates.push(tinaTableTemplate);

// tina/config.ts
var branch =
  process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var config_default = defineConfig({
  branch,
  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,
  cmsCallback: (a) => a,
  build: {
    basePath: "/hedwig-design-system/examples/storefront",
    outputFolder: "admin",
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
            return `/hedwig-design-system/examples/storefront/${props.document._sys.breadcrumbs.join("/")}`;
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
            templates,
          },
        ],
      },
    ],
  },
});
export { config_default as default };
