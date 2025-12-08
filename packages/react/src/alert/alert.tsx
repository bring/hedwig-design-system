import React, { forwardRef, type HTMLAttributes } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { Slot } from "@radix-ui/react-slot";
import { Box, type BoxProps } from "../box/box";

export interface AlertTitleProps extends HTMLAttributes<HTMLParagraphElement> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   *
   * @default false
   */
  asChild?: boolean;
}
export const AlertTitle = forwardRef<HTMLParagraphElement, AlertTitleProps>(
  ({ asChild, className, ...rest }, ref) => {
    const Component = asChild ? Slot : "div";
    return (
      <Component className={clsx("hds-alert__title", className as undefined)} ref={ref} {...rest} />
    );
  },
);
AlertTitle.displayName = "Alert.Title";

export interface AlertDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   *
   * @default false
   */
  asChild?: boolean;
}
export const AlertDescription = forwardRef<HTMLParagraphElement, AlertDescriptionProps>(
  ({ asChild, className, ...rest }, ref) => {
    const Component = asChild ? Slot : "div";
    return (
      <Component
        className={clsx("hds-alert__description", className as undefined)}
        ref={ref}
        {...rest}
      />
    );
  },
);
AlertDescription.displayName = "Alert.Description";

export type AlertProps = (
  | {
      /**
       * @deprecated use data-color instead
       */
      variant?: "info" | "success" | "warning" | "error";
      icon?: never;
      iconClassName?: never;
    }
  | {
      /**
       * @deprecated use data-color instead
       */
      variant: "neutral";
      icon?: React.ReactNode;
      iconClassName?: string;
    }
  | {
      "data-color"?: "info" | "success" | "warning" | "error";
      icon?: never;
      iconClassName?: never;
    }
  | {
      "data-color": "neutral";
      icon?: React.ReactNode;
      iconClassName?: string;
    }
) &
  Omit<BoxProps, "variant" | "asChild">;

const allowedColors = ["neutral", "info", "success", "warning", "error", undefined] as const;
type DataColor = (typeof allowedColors)[number];

function isValidDataColor(value: string | undefined): value is DataColor {
  return allowedColors.includes(value as DataColor);
}

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ children, className, "data-color": color = undefined, icon, iconClassName, ...rest }, ref) => {
    const { variant, ...boxProps } = rest as { variant?: string };

    // Support deprecated 'variant' prop for backward compatibility
    const resolvedColor = color ?? variant;
    const validColor: DataColor | undefined = isValidDataColor(resolvedColor)
      ? resolvedColor
      : undefined;

    return (
      <Box
        data-color={validColor}
        className={clsx(`hds-alert`, className as undefined)}
        ref={ref}
        {...boxProps}
      >
        {validColor === "neutral" && (
          <div className={clsx("hds-alert--neutral__icon", iconClassName as undefined)}>{icon}</div>
        )}
        {children}
      </Box>
    );
  },
) as AlertType;
Alert.displayName = "Alert";

type AlertType = ReturnType<typeof forwardRef<HTMLDivElement, AlertProps>> & {
  Title: typeof AlertTitle;
  Description: typeof AlertDescription;
};
Alert.Title = AlertTitle;
Alert.Description = AlertDescription;
