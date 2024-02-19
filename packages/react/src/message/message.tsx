import React, { forwardRef } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname/index.mjs";
import type { OverridableComponent } from "../utils";
import { Box, type BoxProps } from "../box/box";

export type MessageProps = (
  | {
      variant?: "success" | "attention" | "warning";
      icon?: never;
      iconClassName?: never;
    }
  | {
      variant: "neutral";
      icon?: React.ReactNode;
      iconClassName?: string;
    }
) &
  Omit<BoxProps, "variant">;

export const Message: OverridableComponent<MessageProps, HTMLDivElement> = forwardRef(
  ({ children, className, variant = "success", icon, iconClassName, ...rest }, ref) => {
    return (
      <Box
        className={clsx(`hds-message`, `hds-message--${variant}`, className as undefined)}
        ref={ref}
        {...rest}
      >
        {variant === "neutral" && (
          <div className={clsx("hds-message--neutral__icon", iconClassName as undefined)}>
            {icon}
          </div>
        )}
        {children}
      </Box>
    );
  },
);
Message.displayName = "Message";

export const MessageTitle: OverridableComponent<object, HTMLParagraphElement> = forwardRef(
  ({ as: Component = "p", className, ...rest }, ref) => {
    return (
      <Component
        className={clsx("hds-message__title", className as undefined)}
        ref={ref}
        {...rest}
      />
    );
  },
);
MessageTitle.displayName = "Message.Title";

export const MessageDescription: OverridableComponent<object, HTMLParagraphElement> = forwardRef(
  ({ as: Component = "p", className, ...rest }, ref) => {
    return (
      <Component
        className={clsx("hds-message__description", className as undefined)}
        ref={ref}
        {...rest}
      />
    );
  },
);
MessageDescription.displayName = "Message.Description";
