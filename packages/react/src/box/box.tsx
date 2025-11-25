import { forwardRef, useCallback, useState } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { Slot, Slottable } from "@radix-ui/react-slot";

export type BoxCloseButtonProps = Omit<React.HTMLAttributes<HTMLButtonElement>, "children">;
export const BoxCloseButton = forwardRef<HTMLButtonElement, BoxCloseButtonProps>(
  ({ className, ...rest }, ref) => {
    return (
      <button
        className={clsx("hds-box__close-button", className as undefined)}
        ref={ref}
        type="button"
        {...rest}
      />
    );
  },
);
BoxCloseButton.displayName = "Box.CloseButton";

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;

  /**
   * Color variant of the box
   *
   * @default "light-grey"
   */
  variant?: "light-grey" | "lighter" | "white" | "warning";

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

export const Box = forwardRef<HTMLDivElement, BoxProps>(
  (
    {
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

    return (
      <Component
        {...(variant === "warning" ? { "data-color-scheme": "light" } : {})}
        className={clsx(
          "hds-box",
          variant && `hds-box--${variant}`,
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
