import { forwardRef } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { Slot } from "@radix-ui/react-slot";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The height, font size and padding of the button
   *
   * Note: `medium` is deprecated, use `large` or `small` instead of `medium`
   *
   * @default "large"
   */
  size?: "small" | "medium" | "large";

  /**
   * The background and fill of the button
   *
   * Note: `primary-outline` and `secondary-outline` are deprecated
   * Use `secondary` instead, or check the other variants
   * https://bring.github.io/hedwig-design-system/examples/button
   *
   * @default "primary"
   */
  variant?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "inverted"
    | "primary-outline" // deprecated
    | "secondary-outline"; // deprecated

  /**
   * Make the button use 100% width available.
   * Using the "mobile" it only stretch to full width on smaller screens
   */
  fullWidth?: boolean | "mobile";

  /**
   * Specify that there is an icon in the button.
   * `icon`: There is only an icon in the button.
   * `icon="leading"`: There is an icon before the text.
   * `icon="trailing"`: There is an icon after the text.
   *
   * @default false
   */
  icon?: boolean | "leading" | "trailing";

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
 * <Button variant="inverted">Inverted</Button>
 * <Button variant="tertiary" fullWidth="mobile">Secondary Outline</Button>
 * <Button icon="leading"><LeadingIcon />Leading icon</Button>
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

    let resolvedVariant = variant;
    if (resolvedVariant === "primary-outline" || resolvedVariant === "secondary-outline") {
      resolvedVariant = "secondary";
    }

    let resolvedSize = size;
    if (resolvedSize === "medium") {
      resolvedSize = "large";
    }

    return (
      <Component
        className={clsx(
          "hds-button",
          `hds-button--${resolvedSize}`,
          `hds-button--${resolvedVariant}`,
          {
            "hds-button--full": fullWidth === true,
            "hds-button--mobile-full": fullWidth === "mobile",
            "hds-button--only-icon": icon === true,
            "hds-button--leading-icon": icon === "leading",
            "hds-button--trailing-icon": icon === "trailing",
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
