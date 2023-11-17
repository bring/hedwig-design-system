import type { Named, Transform } from "style-dictionary";
import { isTypography } from "style-dictionary-utils/dist/filter/isTypography";
import { transformMaybeFluidDimension } from "./fluid-dimension";

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
    const lineHeight = transformMaybeFluidDimension(value.lineHeight);

    // font: font-style font-variant font-weight font-size/line-height font-family;
    return `${value.fontStyle || ""} ${value.fontWeight || ""} ${fontSize}${
      lineHeight ? `/${lineHeight}` : ""
    } ${value.fontFamily}`
      .trim()
      .replace(/\s\s+/g, " ");
  },
};
