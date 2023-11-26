import { ClassNames } from "../dist/classnames";

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
  [P in K]?: any;
};
type ClassArray = ClassValue[];

export function clsx(...inputs: ClassValue[]): string;
