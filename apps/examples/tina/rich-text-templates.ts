import { tinaTableTemplate } from "tinacms";
import type { TinaField } from "tinacms";

type RichTextField = Extract<TinaField, { type: "rich-text" }>;
type RichTextTemplate = NonNullable<RichTextField["templates"]>[number];

export const templates = [
  // Examples
  {
    name: "Examples",
    label: "Examples",
    ui: {
      defaultItem: {
        componentName: "button",
      },
    },
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
] as const satisfies RichTextTemplate[];

// Table
// Tina cms handles this template internally
// @ts-expect-error -- It's ok
templates.push(tinaTableTemplate);

export type TemplateNames = (typeof templates)[number]["name"];
