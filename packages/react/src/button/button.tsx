import { forwardRef } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";
import type { OverridableComponent } from "../utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The height, font size and padding of the button
   */
  size?: "small" | "medium" | "large";

  /**
   * The background fill of the button
   */
  fill?: "contained" | "outline";

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
    return (
      <Component
        className={clsx(
          "hds-button",
          `hds-button--${size}`,
          {
            [`hds-button--${variant}`]: fill === "contained",
            [`hds-button--outline-${variant}`]: fill === "outline",
            "hds-button--full": fullWidth === true,
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
