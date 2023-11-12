import type { DesignTokens, Parser } from "style-dictionary-utils";
import { w3cTokenJsonParser } from "style-dictionary-utils/dist/parser/w3c-token-json-parser";

/**
 * Custom tokens parser
 *
 * - Handle w3c token spec
 * - Apply the type property to all tokens
 */
export const customTokensParser: Parser = {
  pattern: w3cTokenJsonParser.pattern,
  parse: (options) => {
    // Handle $type, $value, $description
    const result = w3cTokenJsonParser.parse(options) as DesignTokens;

    // Ensure type is set on all tokens,
    // by setting the parent type on every child.
    //
    // This is needed because the transformer matchers don't have access to the parent types
    // and thus will not be applied.
    // This is a shortcoming of the current version of style-dictionary
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
    return result;
  },
};
