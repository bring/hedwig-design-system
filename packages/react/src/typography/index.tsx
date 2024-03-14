import type { TypographyProps } from "./typography";
import { Typography } from "./typography";

export { Typography };
export type * from "./typography";

/**
 * Alternative: Named `Text`
 *
 * ## Alias to @see Typography
 *
 * Only one component will remain
 */
export const Text = Typography;
Text.displayName = "Text";

/**
 * Alternative: Named as the different typography levels
 *
 * ## Alias to @see Typography
 */
export const H1Display = typographyVariant("h1-display", "H1Display");
export const H1 = typographyVariant("h1", "H1");
export const H2 = typographyVariant("h2", "H2");
export const H3 = typographyVariant("h3", "H3");
export const H3Title = typographyVariant("h3-title", "H3Title");
export const Body = typographyVariant("body", "Body"); // This one is a bit weird, as it can be mistaken for `<body>`
export const BodyTitle = typographyVariant("body-title", "BodyTitle");
export const BodySmall = typographyVariant("body-small", "BodySmall");
export const BodySmallTitle = typographyVariant("body-small-title", "BodySmallTitle");
export const Technical = typographyVariant("technical", "Technical");
export const TechnicalTitle = typographyVariant("technical-title", "TechnicalTitle");
export const Caption = typographyVariant("caption", "Caption");
export const CaptionTitle = typographyVariant("caption-title", "CaptionTitle");

/**
 * Alternative: Named as the different typography levels with Text prefix
 *
 * ## Alias to @see Typography
 */
export const TextH1Display = typographyVariant("h1-display", "TextH1Display");
export const TextH1 = typographyVariant("h1", "TextH1");
export const TextH2 = typographyVariant("h2", "TextH2");
export const TextH3 = typographyVariant("h3", "TextH3");
export const TextH3Title = typographyVariant("h3-title", "TextH3Title");
export const TextBody = typographyVariant("body", "TextBody"); // This one is a bit weird, as it can be mistaken for `<body>`
export const TextBodyTitle = typographyVariant("body-title", "TextBodyTitle");
export const TextBodySmall = typographyVariant("body-small", "TextBodySmall");
export const TextBodySmallTitle = typographyVariant("body-small-title", "TextBodySmallTitle");
export const TextTechnical = typographyVariant("technical", "TextTechnical");
export const TextTechnicalTitle = typographyVariant("technical-title", "TextTechnicalTitle");
export const TextCaption = typographyVariant("caption", "TextCaption");
export const TextCaptionTitle = typographyVariant("caption-title", "TextCaptionTitle");

/**
 * Alternative: Named as the different typography levels with Typography prefix
 *
 * ## Alias to @see Typography
 */
export const TypographyH1Display = typographyVariant("h1-display", "TypographyH1Display");
export const TypographyH1 = typographyVariant("h1", "TypographyH1");
export const TypographyH2 = typographyVariant("h2", "TypographyH2");
export const TypographyH3 = typographyVariant("h3", "TypographyH3");
export const TypographyH3Title = typographyVariant("h3-title", "TypographyH3Title");
export const TypographyBody = typographyVariant("body", "TypographyBody"); // This one is a bit weird, as it can be mistaken for `<body>`
export const TypographyBodyTitle = typographyVariant("body-title", "TypographyBodyTitle");
export const TypographyBodySmall = typographyVariant("body-small", "TypographyBodySmall");
export const TypographyBodySmallTitle = typographyVariant(
  "body-small-title",
  "TypographyBodySmallTitle",
);
export const TypographyTechnical = typographyVariant("technical", "TypographyTechnical");
export const TypographyTechnicalTitle = typographyVariant(
  "technical-title",
  "TypographyTechnicalTitle",
);
export const TypographyCaption = typographyVariant("caption", "TypographyCaption");
export const TypographyCaptionTitle = typographyVariant("caption-title", "TypographyCaptionTitle");

function typographyVariant(
  variant: TypographyProps["variant"],
  displayName: string,
): React.FunctionComponent<Omit<TypographyProps, "variant">> {
  function WrappedTypography(props: Omit<TypographyProps, "variant">) {
    return <Typography variant={variant} {...props} />;
  }
  WrappedTypography.displayName = displayName;

  return WrappedTypography;
}
