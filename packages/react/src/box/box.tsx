import { forwardRef, useCallback, useState } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { Button } from "../button/button";

function CloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
      <path d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z" />
    </svg>
  );
}
export type BoxCloseButtonProps = Omit<React.HTMLAttributes<HTMLButtonElement>, "children">;
export const BoxCloseButton = forwardRef<HTMLButtonElement, BoxCloseButtonProps>(
  ({ className, ...rest }, ref) => {
    return (
      <Button
        className={clsx("hds-box__close-button", className as undefined)}
        variant="tertiary"
        size="small"
        icon
        ref={ref}
        type="button"
        {...rest}
      >
        <CloseIcon />
      </Button>
    );
  },
);
BoxCloseButton.displayName = "Box.CloseButton";

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;

  /**
   * Posten/Bring-spesific variant of the box. NB: warning variant is deprecated, use data-color="warning" instead.
   *
   * @default "light-grey"
   */
  variant?:
    | "light-grey"
    | "lighter"
    | "white"
    /** @deprecated use data-color="warning" instead */
    | "warning";

  /**
   * Color variant of the box
   *
   */

  "data-color"?: "neutral" | "info" | "success" | "warning" | "error";

  /**
   * If `true`, a close button will be shown.
   * Use when you want to control the close button using the BoxCloseButton component.
   *
   * @default false
   */
  closeable?: boolean;

  /**
   * Callback fired when the component requests to be closed.
   * If not set, the component will be closed without any user interaction.
   *
   * If set, and the handler returns non-true value, the component will not be closed.
   * Use this if you want to control the closing of the component, using the `closed` prop
   *
   * If set, and the handler returns the true, the component will be closed.
   * Use this with `window.confirm()` to ask the user to confirm closing the component.
   */
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents -- It's fine, I want to have the boolean in the type
  onClose?: () => boolean | unknown;

  /**
   * If `true`, the box will be closed and hidden from view
   */
  closed?: boolean;

  /**
   * Props applied to the close button element.
   */
  closeButtonProps?: BoxCloseButtonProps;

  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   *
   * @default false
   */
  asChild?: boolean;
}

const convertVariantToColor = (variant: BoxProps["variant"] | "") => {
  switch (variant) {
    case "lighter":
      return "";
    case "white":
      return "";
    case "warning":
      return "warning";
    default:
      return "neutral";
  }
};

export const Box = forwardRef<HTMLDivElement, BoxProps>(
  (
    {
      "data-color": color = "",
      asChild,
      variant,
      closeable = false,
      onClose: onCloseProp,
      closed: closedProp,
      closeButtonProps,
      children,
      className,
      ...rest
    },
    ref,
  ) => {
    const [closedState, setClosedState] = useState(false);
    const onClose = useCallback(() => {
      if (onCloseProp) {
        const result = onCloseProp();
        if (result === true) {
          setClosedState(true);
        }
      } else {
        setClosedState(true);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps -- I know better
    }, []);
    const closed = closedProp ?? closedState;
    const Component = asChild ? Slot : "div";

    const resolvedColor = color && color !== "" ? color : convertVariantToColor(variant);

    return (
      <Component
        data-color={resolvedColor}
        className={clsx(
          "hds-box",
          { "hds-box--lighter": variant === "lighter" },
          { "hds-box--white": variant === "white" },
          { "hds-box--closed": closed },
          className as undefined,
        )}
        ref={ref}
        {...rest}
      >
        {closeable ? <BoxCloseButton onClick={onClose} {...closeButtonProps} /> : null}
        <Slottable>{children}</Slottable>
      </Component>
    );
  },
) as BoxType;
Box.displayName = "Box";

Box.CloseButton = BoxCloseButton;

type BoxType = ReturnType<typeof forwardRef<HTMLDivElement, BoxProps>> & {
  CloseButton: typeof BoxCloseButton;
};
