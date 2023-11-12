import * as React from "react";
import { clsx } from "clsx";
import { warnForStyleOverrides } from "../utils";

interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "style"> {
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
  ...rest
}: ButtonProps & { variant: "primary" | "secondary" }) {
  warnForStyleOverrides(rest);
  return (
    <button
      className={clsx("hds-button", `hds-button--${size}`, {
        [`hds-button--${variant}`]: fill === "contained",
        [`hds-button--outline-${variant}`]: fill === "outlined",
        "hds-button--full": fullWidth === true,
        "hds-button--mobile-full": fullWidth === "mobile",
      })}
      ref={buttonRef}
      type="button"
      {...rest}
    >
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
