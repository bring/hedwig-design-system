import { forwardRef, useCallback, useState } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { Slot, Slottable } from "@radix-ui/react-slot";

function CloseIcon() {
  return (
    <svg aria-hidden xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32">
      <path
        d="M17.5469 16.3333L22.375 11.5521L23.3594 10.5677C23.5 10.4271 23.5 10.1927 23.3594 10.0052L22.3281 8.97394C22.1406 8.83331 21.9062 8.83331 21.7656 8.97394L16 14.7864L10.1875 8.97394C10.0469 8.83331 9.8125 8.83331 9.625 8.97394L8.59375 10.0052C8.45312 10.1927 8.45312 10.4271 8.59375 10.5677L14.4062 16.3333L8.59375 22.1458C8.45312 22.2864 8.45312 22.5208 8.59375 22.7083L9.625 23.7396C9.8125 23.8802 10.0469 23.8802 10.1875 23.7396L16 17.9271L20.7812 22.7552L21.7656 23.7396C21.9062 23.8802 22.1406 23.8802 22.3281 23.7396L23.3594 22.7083C23.5 22.5208 23.5 22.2864 23.3594 22.1458L17.5469 16.3333Z"
        fill="currentColor"
      />
    </svg>
  );
}

export type BoxCloseButtonProps = Omit<React.HTMLAttributes<HTMLButtonElement>, "children">;
export const BoxCloseButton = forwardRef<HTMLButtonElement, BoxCloseButtonProps>(
  ({ className, ...rest }, ref) => {
    return (
      <button
        className={clsx("hds-box__close-button", className as undefined)}
        ref={ref}
        type="button"
        {...rest}
      >
        <CloseIcon />
      </button>
    );
  },
);
BoxCloseButton.displayName = "Box.CloseButton";

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;

  /**
   * @deprecated Posten/Bring-spesific variant of the box. NB: warning variant is deprecated, use data-color="warning" instead.
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
