import React, { forwardRef } from "react";
import { clsx } from "clsx";
import { t } from "@postenbring/hedwig-css/typed-classname/index.mjs";
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
        className={clsx(t(`hds-message`), t(`hds-message--${variant}`), className)}
        ref={ref}
        {...rest}
      >
        {variant === "neutral" && (
          <div className={clsx(t("hds-message--neutral__icon"), iconClassName)}>{icon}</div>
        )}
        {children}
      </Box>
    );
  },
);
Message.displayName = "Message";
