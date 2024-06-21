import { forwardRef } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";

interface SpinnerPropsInner extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The size of the Spinner
   *
   * @default "medium"
   */
  size?: "small" | "medium" | "large";

  /**
   * The tooltip title
   *
   * @default ""
   */
  title?: string;
}

export type SpinnerProps = SpinnerPropsInner;

/**
 * Use spinner loading states as placeholder for your content while waiting for data to load.
 */
export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
  ({ size = "medium", title = "", className, ...rest }, ref) => {
    return (
      <div
        title={title}
        className={clsx("hds-spinner", `hds-spinner--${size}`, className as undefined)}
        ref={ref}
        {...rest}
      />
    );
  },
);
Spinner.displayName = "Spinner";
