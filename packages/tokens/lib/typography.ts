import type { Named, Transform } from "style-dictionary";
import { isTypography } from "style-dictionary-utils/dist/filter/isTypography";
import { transformMaybeFluidValue } from "./fluid-value";

interface CustomTokenTypography {
  fontFamily: string;
  fontSize: number | [number, number];
  fontWeight?: number;
  lineHeight?: number | [number, number];
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
    const fontSize = transformMaybeFluidValue(value.fontSize);
    const lineHeight = transformMaybeFluidValue(value.lineHeight);

    // font: font-style font-variant font-weight font-size/line-height font-family;
    return `${value.fontStyle || ""} ${value.fontWeight || ""} ${fontSize}${
      lineHeight ? `/${lineHeight}` : ""
    } ${value.fontFamily}`
      .trim()
      .replace(/\s\s+/g, " ");
  },
};
