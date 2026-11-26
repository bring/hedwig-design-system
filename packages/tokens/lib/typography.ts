import type { Named, Transform } from "style-dictionary";
import { isTypography } from "style-dictionary-utils/dist/filter/isTypography";
import { lineHeightRatioToLength, transformMaybeFluidDimension } from "./fluid-dimension";

export interface CustomTokenTypography {
  fontFamily: string;
  fontSize: string | [string, string];
  fontWeight?: number;
  lineHeight?: string | [string, string];
  fontStyle?: string;
}

export const customTypography: Named<Transform> = {
  name: "custom/typography",
  type: `value`,
  transitive: true,
  matcher: (token) => {
    return (
      isTypography(token) ||
      Boolean(
        typeof token.value === "object" &&
        (token.value as CustomTokenTypography).fontFamily &&
        (token.value as CustomTokenTypography).fontSize,
      )
    );
  },
  transformer: ({ value }: { value: CustomTokenTypography }) => {
    const fontSize = transformMaybeFluidDimension(value.fontSize);
    const lineHeight = Array.isArray(value.lineHeight)
      ? transformMaybeFluidDimension(lineHeightRatioToLength(value.fontSize, value.lineHeight))
      : value.lineHeight;

    // font: font-style font-variant font-weight font-size/line-height font-family;
    return `${value.fontStyle ?? ""} ${String(value.fontWeight ?? "")} ${String(fontSize)}${
      lineHeight ? `/${String(lineHeight)}` : ""
    } ${value.fontFamily}`
      .trim()
      .replace(/\s\s+/g, " ");
  },
};
