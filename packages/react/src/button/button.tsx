import { forwardRef } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { Slot } from "@radix-ui/react-slot";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The height, font size and padding of the button
   */
  size?: "small" | "medium" | "large";

  /**
   * The background fill of the button
   *
   * @default "contained"
   */
  fill?: "contained" | "outline";

  /**
   * Make the button use 100% width available.
   * Using the "mobile" it only stretch to full width on smaller screens
   */
  fullWidth?: boolean | "mobile";

  /**
   * Use the button as an icon button
   *
   * Render the icon in `children`
   */
  icon?: boolean;

  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   *
   * @default false
   */
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps & { variant: "primary" | "secondary" }>(
  (
    {
      asChild,
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
    const Component = asChild ? Slot : "button";
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
            "hds-button--icon-only": icon,
          },
          className as undefined,
        )}
        ref={ref}
        {...rest}
      >
        {children}
      </Component>
    );
  },
);
Button.displayName = "Button";

export const PrimaryButton = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  return <Button {...props} ref={ref} variant="primary" />;
});
PrimaryButton.displayName = "PrimaryButton";

export const SecondaryButton = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  return <Button {...props} ref={ref} variant="secondary" />;
});
SecondaryButton.displayName = "SecondaryButton";
