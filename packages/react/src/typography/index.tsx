import "@postenbring/hedwig-css/dist/fonts.css";
import "@postenbring/hedwig-css/dist/tokens.css";
import "@postenbring/hedwig-css/dist/body.css";

import "@postenbring/hedwig-css/dist/typography.css";

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
