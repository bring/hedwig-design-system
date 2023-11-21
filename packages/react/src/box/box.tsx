import { forwardRef, useCallback, useState } from "react";
import { clsx } from "clsx";
import { t } from "@postenbring/hedwig-css/typed-classname/index.mjs";
import type { OverridableComponent } from "../utils";

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "light-grey" | "lighter" | "white" | "warning";
  children: React.ReactNode;

  /**
   * If `true`, the close button will be hidden.
   * Use when you want to control the close button using the BoxCloseButton component.
   */
  hideCloseButton?: boolean;

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
}

export const Box: OverridableComponent<BoxProps, HTMLDivElement> = forwardRef(
  (
    {
      as: Component = "div",
      variant = "light-grey",
      hideCloseButton,
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

    return (
      <Component
        className={clsx(
          t("hds-box"),
          t(`hds-box--${variant}`),
          { [t("hds-box--closed")]: closed },
          className,
        )}
        ref={ref}
        {...rest}
      >
        {!hideCloseButton && <BoxCloseButton onClick={onClose} {...closeButtonProps} />}
        {children}
      </Component>
    );
  },
);
Box.displayName = "Box";

export type BoxCloseButtonProps = Omit<React.HTMLAttributes<HTMLButtonElement>, "children">;
export const BoxCloseButton = forwardRef<HTMLButtonElement, BoxCloseButtonProps>(
  ({ className, ...rest }, ref) => {
    return (
      <button
        className={clsx(t("hds-box__close-button"), className)}
        ref={ref}
        type="button"
        {...rest}
      />
    );
  },
);
BoxCloseButton.displayName = "BoxCloseButton";
