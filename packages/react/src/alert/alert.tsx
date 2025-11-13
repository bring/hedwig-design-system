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
      variant?: "info" | "success" | "warning" | "error";
      icon?: never;
      iconClassName?: never;
    }
  | {
      variant: "neutral";
      icon?: React.ReactNode;
      iconClassName?: string;
    }
) &
  Omit<BoxProps, "variant" | "asChild">;

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ children, className, variant = "success", icon, iconClassName, ...rest }, ref) => {
    return (
      <Box
        data-color={variant}
        className={clsx(`hds-alert`, `hds-alert--${variant}`, className as undefined)}
        ref={ref}
        {...rest}
      >
        {variant === "neutral" && (
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
