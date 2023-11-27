/* eslint-disable react/button-has-type -- Less magic, don't override the button behaviour */
import * as React from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname/index.mjs";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
   * The background of the button.
   */
  fill?: "contained" | "outlined";

  /**
   * Use an icon inside the button
   */
  icon?: React.ReactNode;

  children: React.ReactNode;
  buttonRef?: React.ForwardedRef<HTMLButtonElement>;
}

function BaseButton({
  children,
  variant,
  size = "medium",
  fullWidth = false,
  fill = "contained",
  buttonRef,
  icon,
  className,
  ...rest
}: ButtonProps & { variant: "primary" | "secondary" }) {
  return (
    <button
      className={clsx(
        "hds-button",
        `hds-button--${size}`,
        {
          [`hds-button--${variant}`]: fill === "contained",
          [`hds-button--outline-${variant}`]: fill === "outlined",
          "hds-button--full": fullWidth === true,
          "hds-button--mobile-full": fullWidth === "mobile",
          "hds-button--icon-only": icon && !children,
        },
        className as undefined,
      )}
      ref={buttonRef}
      {...rest}
    >
      {icon && !children ? icon : null}
      {children}
    </button>
  );
}

BaseButton.displayName = "BaseButton";

/**
 * ## TODO
 *
 * - [ ] Handle links that looks like buttons
 * - [ ] Revisit how to handle outline
 * - [ ] Figure out outline-white
 */

export function PrimaryButton(props: ButtonProps) {
  return <BaseButton {...props} variant="primary" />;
}

PrimaryButton.displayName = "PrimaryButton";

export function SecondaryButton(props: ButtonProps) {
  return <BaseButton {...props} variant="secondary" />;
}

SecondaryButton.displayName = "SecondaryButton";
