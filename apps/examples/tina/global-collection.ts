import type { Collection } from "tinacms";

export const GlobalCollection: Collection = {
  label: "Global",
  name: "global",
  path: "content/global",
  format: "json",
  ui: {
    global: true,
  },
  fields: [
    {
      type: "object",
      label: "Header",
      name: "header",
      fields: [
        {
          type: "object",
          label: "Nav Links",
          name: "nav",
          list: true,
          ui: {
            itemProps: (item) => {
              return { label: item?.label };
            },
          },
          fields: [
            {
              type: "string",
              label: "Link",
              name: "href",
              required: true,
            },
            {
              type: "string",
              label: "Label",
              name: "label",
              required: true,
            },
            {
              type: "boolean",
              label: "External",
              name: "external",
              required: false,
            },
            {
              type: "string",
              label: "Icon svg",
              name: "iconSvg",
              ui: {
                component: "textarea",
              },
              required: false,
            },
          ],
        },
      ],
    },
  ],
};
