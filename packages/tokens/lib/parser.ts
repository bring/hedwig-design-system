import type { DesignTokens, Parser } from "style-dictionary-utils";
import { w3cTokenJsonParser } from "style-dictionary-utils/dist/parser/w3c-token-json-parser";
import type { CustomTokenTypography } from "./typography";

/**
 * Custom tokens parser
 *
 * - Handle w3c token spec
 * - Apply the type property to all tokens
 */
export const customTokensParser: Parser = {
  pattern: w3cTokenJsonParser.pattern,
  parse: (options) => {
    /**
     * Case #1
     *
     * Handle $type, $value, $description
     */
    const result = w3cTokenJsonParser.parse(options) as DesignTokens;

    /**
     * Case #2
     *
     * Ensure type is set on all tokens,
     * by setting the parent type on every child.
     *
     * This is needed because the transformer matchers don't have access to the parent types
     * and thus will not be applied.
     * This is a shortcoming of the current version of style-dictionary
     */
    function applyTypeToEachChild(obj: Partial<DesignTokens>, parentType?: string) {
      const type =
        (obj.type as string | undefined) ?? (obj.$type as string | undefined) ?? parentType;
      if (obj.value !== undefined) {
        // @ts-expect-error -- If value is set, it's safe to set type as well
        obj.type = type;
      }
      for (const child of Object.values(obj)) {
        if (typeof child === "object") {
          applyTypeToEachChild(child, type);
        }
      }
    }
    applyTypeToEachChild(result);

    /**
     * Case #3
     *
     * Extract font sizes into their own values,
     * including fluid values with min-max
     * Very specialized for the current structure of the tokens
     *
     * Creates three new token categories, `font-size`, `line-height`, and `font-weight`
     */
    function extractFontSizeAndLineHeightsAndFontWeight(
      obj: Partial<DesignTokens>,
      parentKey = "",
      extractedTokens: {
        fontSize: Record<string, { type?: string; value: string | [string, string] }>;
        lineHeight: Record<string, { type?: string; value: string | [string, string] }>;
        fontWeight: Record<string, { type?: string; value: number }>;
      } = {
        fontSize: {},
        lineHeight: {},
        fontWeight: {},
      },
    ) {
      const type = obj.type as string | undefined;
      const value = obj.value as unknown as CustomTokenTypography | undefined;
      if (type === "typography" && typeof value !== "undefined") {
        if (Array.isArray(value.fontSize)) {
          const [min, max] = value.fontSize;
          extractedTokens.fontSize[parentKey] = { type: "fluidDimension", value: [min, max] };
          extractedTokens.fontSize[`${parentKey}-min`] = { value: min };
          extractedTokens.fontSize[`${parentKey}-max`] = { value: max };
        } else if (value.fontSize) {
          extractedTokens.fontSize[parentKey] = { value: value.fontSize };
        }
        if (Array.isArray(value.lineHeight)) {
          const [min, max] = value.lineHeight;
          extractedTokens.lineHeight[parentKey] = {
            type: "fluidDimension",
            value: [min, max],
          };
          extractedTokens.lineHeight[`${parentKey}-min`] = { value: min };
          extractedTokens.lineHeight[`${parentKey}-max`] = { value: max };
        } else if (value.lineHeight) {
          extractedTokens.lineHeight[parentKey] = { value: value.lineHeight };
        }
        if (value.fontWeight) {
          extractedTokens.fontWeight[parentKey] = { value: value.fontWeight };
        }
      }

      for (const [key, child] of Object.entries(obj)) {
        if (typeof child === "object") {
          extractFontSizeAndLineHeightsAndFontWeight(child, key, extractedTokens);
        }
      }
      return extractedTokens;
    }
    const extractedTokens = extractFontSizeAndLineHeightsAndFontWeight(result);
    Object.assign(result, {
      "font-size": { ...result["font-size"], type: "dimension", ...extractedTokens.fontSize },
      "line-height": { ...result["line-height"], type: "dimension", ...extractedTokens.lineHeight },
      "font-weight": { ...result["font-weight"], type: "number", ...extractedTokens.fontWeight },
    });

    return result;
  },
};
