import { forwardRef, Children } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { Slot } from "@radix-ui/react-slot";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The height, font size and padding of the button
   *
   * @default "large"
   */
  size?: "small" | "large";

  /**
   * The background and fill of the button
   *
   * @default "primary"
   */
  variant?: "primary" | "secondary" | "tertiary" | "inverted";

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

/**
 * Button component
 *
 * @example
 * <Button variant="primary">Primary</Button>
 * <Button variant="secondary" size="large">Secondary</Button>
 * <Button variant="primary-outline">Primary Outline</Button>
 * <Button variant="secondary-outline" fullWidth="mobile">Secondary Outline</Button>
 *
 * @example
 * // If used for navigation use the `asChild` prop with a anchor element as a child.
 * <Button asChild><a href="/home">Home</a></Button>
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      asChild,
      children,
      variant = "primary",
      size = "large",
      fullWidth = false,
      icon,
      className,
      ...rest
    },
    ref,
  ) => {
    const Component = asChild ? Slot : "button";

    /**
     * Check if the button has leading or trailing icons.
     * Class names are added to the button to adjust the padding.
     */
    const childrenArray = Children.toArray(children);
    const hasLeadingIcon = childrenArray.length > 1 && typeof childrenArray[0] !== "string";
    const hasTrailingIcon =
      childrenArray.length > 1 && typeof childrenArray[childrenArray.length - 1] !== "string";

    return (
      <Component
        className={clsx(
          "hds-button",
          `hds-button--${size}`,
          `hds-button--${variant}`,
          {
            "hds-button--full": fullWidth === true,
            "hds-button--mobile-full": fullWidth === "mobile",
            "hds-button--icon-only": icon,
            "hds-button--leading-icon": hasLeadingIcon,
            "hds-button--trailing-icon": hasTrailingIcon,
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
