import { Collection } from "tinacms";
import { templates } from "./rich-text-templates";

export const ComponentCollection: Collection = {
  format: "mdx",
  ui: {
    router: (props) => {
      return `/hedwig-design-system/storefront/components/${props.document._sys.breadcrumbs.join("/")}`;
    },
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
};
