import { forwardRef } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname/index.mjs";
import type { OverridableComponent } from "../utils";

interface ButtonPropsInternal extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The height, font size and padding of the button
   */
  size?: "small" | "medium" | "large";

  /**
   * Make the button use 100% width available.
   * Using the "mobile" it only stretch to full width on smaller screens
   */
  fullWidth?: boolean | "mobile";

  /**
   * Use an icon inside the button
   */
  icon?: React.ReactNode;

  children?: React.ReactNode;
}

export type ButtonProps = ButtonPropsInternal &
  (
    | {
        /**
         * The background fill of the button
         */
        fill?: "contained" | "outline";
      }
    | {
        /**
         * @deprecated use `fill='outline'` instead
         */
        fill?: "outlined";
      }
  );

export const BaseButton: OverridableComponent<
  ButtonProps & { variant: "primary" | "secondary" },
  HTMLButtonElement
> = forwardRef(
  (
    {
      as: Component = "button",
      children,
      variant,
      size = "medium",
      fullWidth = false,
      fill = "contained",
      icon,
      className,
      ...rest
    },
    ref,
  ) => {
    // TODO: Remove deprecated fill value name at some point
    // Deprecated at 10. march 2024
    if (fill === "outlined") {
      // eslint-disable-next-line no-console -- Deprecation warning
      console.warn("The `fill` value `outlined` is deprecated, use `fill='outline'` instead");
    }
    return (
      <Component
        className={clsx(
          "hds-button",
          `hds-button--${size}`,
          {
            [`hds-button--${variant}`]: fill === "contained",
            [`hds-button--outline-${variant}`]: fill === "outline" || fill === "outlined",
            "hds-button--full": fullWidth,
            "hds-button--mobile-full": fullWidth === "mobile",
            "hds-button--icon-only": icon && !children,
          },
          className as undefined,
        )}
        ref={ref}
        {...rest}
      >
        {icon && !children ? icon : null}
        {children}
      </Component>
    );
  },
);
BaseButton.displayName = "BaseButton";

/**
 * ## TODO
 *
 * - [x] Handle links that looks like buttons
 * - [ ] Revisit how to handle outline
 * - [ ] Figure out outline-white
 */

export const PrimaryButton: OverridableComponent<ButtonProps, HTMLButtonElement> = forwardRef(
  (props, ref) => {
    return <BaseButton {...props} ref={ref} variant="primary" />;
  },
);

PrimaryButton.displayName = "PrimaryButton";

export const SecondaryButton: OverridableComponent<ButtonProps, HTMLButtonElement> = forwardRef(
  (props, ref) => {
    return <BaseButton {...props} ref={ref} variant="secondary" />;
  },
);

SecondaryButton.displayName = "SecondaryButton";
