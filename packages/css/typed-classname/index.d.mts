import { ClassNames } from "../dist/classnames";

/**
 * Helper function to ensure classnames are referenced correctly
 *
 * ```tsx
 * <button className="hds-button"> ✅ Passes
 * <button className="hds-buton">  ❌ Fails typecheck
 * ```
 *
 * @param {ClassNames} value
 * @returns {ClassNames}
 */
export function t(value: ClassNames): ClassNames;
