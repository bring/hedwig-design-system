import type { Collection, Template } from "tinacms";
import { templates } from "./rich-text-templates";

export const contentBlockSchema: Template = {
  name: "content",
  label: "Content",
  ui: {
    defaultItem: {
      content:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
    },
  },
  fields: [
    {
      type: "rich-text",
      label: "Content",
      name: "content",
      templates,
    },
  ],
};

export const brandSloganSchema: Template = {
  name: "brandSlogan",
  label: "Brand Slogan",
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title",
    },
    {
      type: "string",
      label: "Slogan",
      name: "slogan",
      required: true,
    },
    {
      type: "string",
      label: "Illustration svg",
      name: "illustrationSvg",
      ui: {
        component: "textarea",
      },
      required: false,
    },
  ],
};

export const navCardSchema: Template = {
  name: "navCards",
  label: "Nav Cards",
  fields: [
    {
      type: "object",
      label: "Card",
      name: "cards",
      list: true,
      ui: {
        itemProps: (item) => ({ label: item.title }),
      },
      fields: [
        {
          type: "string",
          label: "Title",
          name: "title",
          required: true,
        },
        {
          type: "string",
          label: "Description",
          name: "description",
        },
        {
          type: "string",
          label: "Link",
          name: "link",
        },
      ],
    },
  ],
};

export const PageCollection: Collection = {
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
    },
  },
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title",
      isTitle: true,
      required: true,
    },
    {
      type: "string",
      label: "Description",
      name: "description",
      required: false,
    },
    {
      type: "boolean",
      description: "Hide title and description",
      label: "Hide Title and Description",
      name: "hideTitleAndDescription",
    },
    {
      type: "object",
      list: true,
      name: "blocks",
      label: "Page Sections",
      ui: {
        visualSelector: true,
      },
      templates: [contentBlockSchema, brandSloganSchema, navCardSchema],
    },
  ],
};
