import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";

export interface DescriptionListProps extends HTMLAttributes<HTMLDListElement> {
  /**
   * Either `dt`, `dl`, or `div` elements
   */
  children?: ReactNode;
  /**
   * Direction of the description list
   */
  variant?: "vertical" | "horizontal";
}

/**
 * @example
 * ```tsx
 * <DescriptionList>
 *   <dt>Vekt</dt>
 *   <dd>12 kg</dd>
 *   <dt>Antall kolli</dt>
 *   <dd>2</dd>
 * </DescriptionList>
 * ```
 *
 */
export const DescriptionList = forwardRef<HTMLDListElement, DescriptionListProps>(
  ({ variant = "vertical", className, ...rest }, ref) => {
    return (
      <dl
        ref={ref}
        className={clsx(
          "hds-description-list",
          {
            "hds-description-list--horizontal": variant === "horizontal",
          },
          className as undefined,
        )}
        {...rest}
      />
    );
  },
);
DescriptionList.displayName = "DescriptionList";
