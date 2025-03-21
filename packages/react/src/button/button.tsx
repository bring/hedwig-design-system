import { forwardRef, Children, isValidElement, type ReactNode } from "react";
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
    /**
     * Check if the button has leading or trailing icons.
     * Class names are added to the button to adjust the padding.
     */
    let childrenArray: ReactNode[] = [];
    /**
     * If asChild is used, check the grandchildren
     */
    if (asChild && isValidElement(children) && children.props && "children" in children.props) {
      const childProps = children.props as { children?: ReactNode | ReactNode[] };
      childrenArray = Children.toArray(childProps.children);
    } else {
      childrenArray = Children.toArray(children);
    }
    const hasLeadingIcon = childrenArray.length > 1 && typeof childrenArray[0] !== "string";
    const hasTrailingIcon =
      childrenArray.length > 1 && typeof childrenArray[childrenArray.length - 1] !== "string";
    const hasOnlyIcon = childrenArray.length === 1 && typeof childrenArray[0] !== "string";

    return (
      <Component
        className={clsx(
          "hds-button",
          `hds-button--${resolvedSize}`,
          `hds-button--${resolvedVariant}`,
          {
            "hds-button--full": fullWidth === true,
            "hds-button--mobile-full": fullWidth === "mobile",
            "hds-button--only-icon": hasOnlyIcon,
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
