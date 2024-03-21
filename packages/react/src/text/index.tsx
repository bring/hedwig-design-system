import type { TextProps } from "./text";
import { Text } from "./text";

export { Text };
export type * from "./text";

/**
 * # 🚨 Unstable alternative
 *
 * named as the different typography levels with Text prefix
 *
 * ## Alias to @see Text
 */
export const TextH1Display = textVariant("h1-display", "TextH1Display");
/**
 * # 🚨 Unstable alternative
 *
 * named as the different typography levels with Text prefix
 *
 * ## Alias to @see Text
 */
export const TextH1 = textVariant("h1", "TextH1");
/**
 * # 🚨 Unstable alternative
 *
 * named as the different typography levels with Text prefix
 *
 * ## Alias to @see Text
 */
export const TextH2 = textVariant("h2", "TextH2");
/**
 * # 🚨 Unstable alternative
 *
 * named as the different typography levels with Text prefix
 *
 * ## Alias to @see Text
 */
export const TextH3 = textVariant("h3", "TextH3");
/**
 * # 🚨 Unstable alternative
 *
 * named as the different typography levels with Text prefix
 *
 * ## Alias to @see Text
 */
export const TextH3Title = textVariant("h3-title", "TextH3Title");
/**
 * # 🚨 Unstable alternative
 *
 * named as the different typography levels with Text prefix
 *
 * ## Alias to @see Text
 */
export const TextBody = textVariant("body", "TextBody"); // Less weird
/**
 * # 🚨 Unstable alternative
 *
 * named as the different typography levels with Text prefix
 *
 * ## Alias to @see Text
 */
export const TextBodyTitle = textVariant("body-title", "TextBodyTitle");
/**
 * # 🚨 Unstable alternative
 *
 * named as the different typography levels with Text prefix
 *
 * ## Alias to @see Text
 */
export const TextBodySmall = textVariant("body-small", "TextBodySmall");
/**
 * # 🚨 Unstable alternative
 *
 * named as the different typography levels with Text prefix
 *
 * ## Alias to @see Text
 */
export const TextBodySmallTitle = textVariant("body-small-title", "TextBodySmallTitle");
/**
 * 🚨 Unstable alterentative: Named as the different typography levels with Text prefix
 *
 * ## Alias to @see Text
 */
export const TextTechnical = textVariant("technical", "TextTechnical");
/**
 * 🚨 Unstable alterentative: Named as the different typography levels with Text prefix
 *
 * ## Alias to @see Text
 */
export const TextTechnicalTitle = textVariant("technical-title", "TextTechnicalTitle");
/**
 * 🚨 Unstable alterentative: Named as the different typography levels with Text prefix
 *
 * ## Alias to @see Text
 */
export const TextCaption = textVariant("caption", "TextCaption");
/**
 * 🚨 Unstable alterentative: Named as the different typography levels with Text prefix
 *
 * ## Alias to @see Text
 */
export const TextCaptionTitle = textVariant("caption-title", "TextCaptionTitle");

const variantToHtmlTag = {
  "h1-display": "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  "h3-title": "h3",
  body: "p",
  "body-title": "p",
  "body-small": "p",
  "body-small-title": "p",
  technical: "p",
  "technical-title": "p",
  caption: "p",
  "caption-title": "p",
} as const;

function textVariant(
  variant: TextProps["variant"],
  displayName: string,
): React.FunctionComponent<Omit<TextProps, "variant">> {
  function WrappedText(props: Omit<TextProps, "variant">) {
    return <Text variant={variant} as={variantToHtmlTag[variant ?? "body"]} {...props} />;
  }
  WrappedText.displayName = displayName;

  return WrappedText;
}
