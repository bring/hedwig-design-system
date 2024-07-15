// tina/config.ts
import { defineConfig } from "tinacms";

// tina/global-collection.ts
var GlobalCollection = {
  label: "Global",
  name: "global",
  path: "content/global",
  format: "json",
  ui: {
    global: true
  },
  fields: [
    {
      type: "object",
      label: "Header",
      name: "header",
      fields: [
        {
          type: "boolean",
          label: "Short header",
          description: "Use 'Hedwig' instead of 'Hedwig Design System' in the header",
          name: "shortHeader"
        },
        {
          type: "object",
          label: "Nav Links",
          name: "nav",
          list: true,
          ui: {
            itemProps: (item) => ({
              label: item.label
            })
          },
          fields: [
            {
              type: "string",
              label: "Link",
              name: "href",
              required: true
            },
            {
              type: "string",
              label: "Label",
              name: "label",
              required: true
            },
            {
              type: "boolean",
              label: "External",
              name: "external",
              required: false
            },
            {
              type: "string",
              label: "Icon svg",
              name: "iconSvg",
              ui: {
                component: "textarea"
              },
              required: false
            },
            {
              type: "string",
              label: "Icon Behaviour",
              name: "iconBehaviour",
              required: false,
              options: [
                { label: "Icon and label", value: "iconAndLabel" },
                { label: "Only icon", value: "onlyIcon" },
                { label: "Only icon on large", value: "onlyIconOnLarge" },
                { label: "Only icon on mobile", value: "onlyIconOnMobile" }
              ]
            }
          ]
        }
      ]
    }
  ]
};

// tina/rich-text-templates.ts
import { tinaTableTemplate } from "tinacms";
var templates = [
  // Examples
  {
    name: "Examples",
    label: "Examples",
    ui: {
      defaultItem: {
        componentName: "button"
      }
    },
    fields: [
      {
        name: "componentName",
        label: "Name of the component or pattern",
        type: "string",
        required: true
      },
      {
        name: "exampleName",
        description: "Only show one specific example",
        label: "Specific example",
        type: "string"
      },
      {
        name: "showCodeByDefault",
        label: "Show code by default",
        type: "boolean"
      }
    ]
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
        list: true
      }
    ]
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
        required: true
      },
      {
        name: "hideBottomBar",
        label: "Hide bottom bar",
        type: "boolean"
      }
    ]
  }
];
templates.push(tinaTableTemplate);

// tina/page-collection.ts
var contentBlockSchema = {
  name: "content",
  label: "Content",
  ui: {
    defaultItem: {
      content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede."
    }
  },
  fields: [
    {
      type: "rich-text",
      label: "Content",
      name: "content",
      templates
    }
  ]
};
var brandSloganSchema = {
  name: "brandSlogan",
  label: "Brand Slogan",
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title"
    },
    {
      type: "string",
      label: "Slogan",
      name: "slogan",
      required: true
    },
    {
      type: "string",
      label: "Illustration svg",
      name: "illustrationSvg",
      ui: {
        component: "textarea"
      },
      required: false
    }
  ]
};
var navCardSchema = {
  name: "navCards",
  label: "Nav Cards",
  fields: [
    {
      type: "object",
      label: "Card",
      name: "cards",
      list: true,
      ui: {
        itemProps: (item) => ({ label: item.title })
      },
      fields: [
        {
          type: "string",
          label: "Title",
          name: "title",
          required: true
        },
        {
          type: "string",
          label: "Description",
          name: "description"
        },
        {
          type: "string",
          label: "Link",
          required: true,
          name: "link"
        }
      ]
    }
  ]
};
var PageCollection = {
  format: "mdx",
  label: "Pages",
  name: "page",
  path: "content/pages",
  ui: {
    router: ({ document }) => {
      if (document._sys.filename === "home") {
        return `/hedwig-design-system/examples/storefront`;
      }
      return `/hedwig-design-system/examples/storefront/${document._sys.breadcrumbs.join("/")}`;
    }
  },
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title",
      isTitle: true,
      required: true
    },
    {
      type: "string",
      label: "Description",
      name: "description",
      required: false
    },
    {
      type: "boolean",
      description: "Hide title and description",
      label: "Hide Title and Description",
      name: "hideTitleAndDescription"
    },
    {
      type: "object",
      list: true,
      name: "blocks",
      label: "Page Sections",
      ui: {
        visualSelector: true
      },
      templates: [contentBlockSchema, brandSloganSchema, navCardSchema]
    }
  ]
};

// tina/component-collection.ts
var ComponentCollection = {
  format: "mdx",
  ui: {
    router: (props) => {
      return `/hedwig-design-system/examples/storefront/components/${props.document._sys.breadcrumbs.join("/")}`;
    }
  },
  name: "component",
  label: "Components",
  path: "content/components",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true
    },
    {
      type: "string",
      name: "subtitle",
      label: "Subtitle",
      required: false
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body",
      isBody: true,
      templates
    }
  ]
};

// tina/config.ts
var branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var config_default = defineConfig({
  branch,
  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,
  cmsCallback: (a) => a,
  build: {
    basePath: "/hedwig-design-system/examples/storefront/",
    outputFolder: "storefront/admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public"
    }
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [PageCollection, ComponentCollection, GlobalCollection]
  }
});
export {
  config_default as default
};
