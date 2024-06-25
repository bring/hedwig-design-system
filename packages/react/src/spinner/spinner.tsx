import { forwardRef } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { getResponsiveProps, type ResponsiveProp } from "../layout/responsive";

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
   * Seconds delay before the spinner fades in
   *
   * @default '0s'
   */
  delay?: ResponsiveProp<
    "0s" | "1s" | "2s" | "3s" | "4s" | "5s" | "6s" | "7s" | "8s" | "9s" | "10s"
  >;
}

export type SpinnerProps = SpinnerPropsInner;

/**
 * Use spinner loading states as placeholder for your content while waiting for data to load.
 */
export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
  ({ size = "medium", title = "", delay = "0s", className, style: _style, ...rest }, ref) => {
    const style: React.CSSProperties = {
      ..._style,
      ...getResponsiveProps("--hds-spinner-delay", delay),
    };
    return (
      <div
        title={title}
        style={style}
        className={clsx("hds-spinner", `hds-spinner--${size}`, className as undefined)}
        ref={ref}
        {...rest}
      />
    );
  },
);
Spinner.displayName = "Spinner";
