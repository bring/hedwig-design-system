import type { Collection } from "tinacms";

const Page: Collection = {
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
      description: "The title of the page. This is used to display the title in the CMS",
      isTitle: true,
      required: true,
    },
    {
      type: "object",
      list: true,
      name: "blocks",
      label: "Page Sections",
      ui: {
        visualSelector: true,
      },
      templates: [],
    },
  ],
};

export default Page;
