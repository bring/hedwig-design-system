/* eslint tsdoc/syntax: off -- disable this as I don't know how to do the TSdoc correctly */
/* TODO fix TSdoc so it doesn't violate the lint rule, or remove this TODO if the TSdoc is correct and the rule is wrong.
    We never ran lint on the .mts file, so we never knew this doc broke the rule, until we made this .ts copy */
import { type ClassNames } from "../dist/classnames";

/**
 * Helper function to ensure classnames are referenced correctly
 *
 * ```tsx
 * <button className={t("hds-button")}> ✅ Passes
 * <button className={t("hds-buton")}>  ❌ Fails typecheck
 * ```
 *
 * @param {ClassNames} value
 * @returns {ClassNames}
 */
export function t(value: ClassNames): ClassNames;

type ClassValue =
  | ClassArray
  | ClassDictionary<ClassNames>
  | ClassNames
  | number
  | null
  | boolean
  | undefined;

type ClassDictionary<K extends string> = {
  [P in K]?: unknown;
};
type ClassArray = ClassValue[];

export function clsx(...inputs: ClassValue[]): string;
