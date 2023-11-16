/* eslint-disable react/button-has-type -- Less magic, don't override the button behaviour */
import * as React from "react";
import { clsx } from "clsx";
import { t } from "@postenbring/hedwig-css/typed-classname.mjs";
import { warnForStyleOverrides } from "../utils";

export interface ButtonProps
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
      className={clsx(t("hds-button"), t(`hds-button--${size}`), {
        [t(`hds-button--${variant}`)]: fill === "contained",
        [t(`hds-button--outline-${variant}`)]: fill === "outlined",
        [t("hds-button--full")]: fullWidth === true,
        [t("hds-button--mobile-full")]: fullWidth === "mobile",
      })}
      ref={buttonRef}
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
