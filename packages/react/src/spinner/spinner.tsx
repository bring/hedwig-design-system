import { forwardRef, useEffect, useState } from "react";
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

  /**
   * The delay before showing the spinner
   *
   * @default 1000
   */
  delay?: number;
}

export type SpinnerProps = SpinnerPropsInner;

/**
 * Use spinner loading states as placeholder for your content while waiting for data to load.
 */
export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
  ({ size = "medium", title = "", delay = 1000, className, ...rest }, ref) => {
    const [shownAfterOneMinute, setShownAfterOneMinute] = useState<boolean>(false);
    useEffect(() => {
      const timeout = setTimeout(() => {
        setShownAfterOneMinute(true);
      }, delay);
      return () => {
        clearTimeout(timeout);
      };
    });
    return shownAfterOneMinute ? (
      <div
        title={title}
        className={clsx("hds-spinner", `hds-spinner--${size}`, className as undefined)}
        ref={ref}
        {...rest}
      />
    ) : null;
  },
);
Spinner.displayName = "Spinner";
