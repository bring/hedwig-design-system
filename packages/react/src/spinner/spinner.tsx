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

  /**
   * Delay before the spinner fades in
   *
   * If set to `true`, a default delay of `800ms` will be applied.
   *
   * @example
   * 0.8s
   *
   * @default false
   */
  delay?: `${string}ms` | `${string}s` | boolean;
}

export type SpinnerProps = SpinnerPropsInner;

/**
 * Use spinner loading states as placeholder for your content while waiting for data to load.
 */
export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
  ({ size = "medium", title = "", delay = false, className, style: _style, ...rest }, ref) => {
    const style: React.CSSProperties & { "--hds-spinner-delay"?: string } = {
      ..._style,
      ...(typeof delay === "string" && { "--hds-spinner-delay": delay }),
    };
    return (
      <div
        title={title}
        style={style}
        className={clsx(
          "hds-spinner",
          `hds-spinner--${size}`,
          delay && "hds-spinner--delay",
          className as undefined,
        )}
        ref={ref}
        {...rest}
      />
    );
  },
);
Spinner.displayName = "Spinner";
