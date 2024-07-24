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
      name: "description",
      label: "Description",
      required: false,
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "status",
      label: "Status",
      options: ["ready-to-use", "pending-implementation", "work-in-progress", "deprecated"],
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
