import type { TypographyProps as TextProps } from "./text";
import { Text } from "./text";

export { Text };
export type * from "./text";

/**
 * Alternative: Named as the different typography levels
 *
 * ## Alias to @see Text
 */
export const H1Display = textVariant("h1-display", "H1Display");
export const H1 = textVariant("h1", "H1");
export const H2 = textVariant("h2", "H2");
export const H3 = textVariant("h3", "H3");
export const H3Title = textVariant("h3-title", "H3Title");
export const Body = textVariant("body", "Body"); // This one is a bit weird, as it can be mistaken for `<body>`
export const BodyTitle = textVariant("body-title", "BodyTitle");
export const BodySmall = textVariant("body-small", "BodySmall");
export const BodySmallTitle = textVariant("body-small-title", "BodySmallTitle");
export const Technical = textVariant("technical", "Technical");
export const TechnicalTitle = textVariant("technical-title", "TechnicalTitle");
export const Caption = textVariant("caption", "Caption");
export const CaptionTitle = textVariant("caption-title", "CaptionTitle");

/**
 * Alternative: Named as the different typography levels with Text prefix
 *
 * ## Alias to @see Text
 */
export const TextH1Display = textVariant("h1-display", "TextH1Display");
export const TextH1 = textVariant("h1", "TextH1");
export const TextH2 = textVariant("h2", "TextH2");
export const TextH3 = textVariant("h3", "TextH3");
export const TextH3Title = textVariant("h3-title", "TextH3Title");
export const TextBody = textVariant("body", "TextBody"); // This one is a bit weird, as it can be mistaken for `<body>`
export const TextBodyTitle = textVariant("body-title", "TextBodyTitle");
export const TextBodySmall = textVariant("body-small", "TextBodySmall");
export const TextBodySmallTitle = textVariant("body-small-title", "TextBodySmallTitle");
export const TextTechnical = textVariant("technical", "TextTechnical");
export const TextTechnicalTitle = textVariant("technical-title", "TextTechnicalTitle");
export const TextCaption = textVariant("caption", "TextCaption");
export const TextCaptionTitle = textVariant("caption-title", "TextCaptionTitle");

function textVariant(
  variant: TextProps["variant"],
  displayName: string,
): React.FunctionComponent<Omit<TextProps, "variant">> {
  function WrappedText(props: Omit<TextProps, "variant">) {
    return <Text variant={variant} {...props} />;
  }
  WrappedText.displayName = displayName;

  return WrappedText;
}
