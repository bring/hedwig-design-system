import { forwardRef } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { Slot } from "@radix-ui/react-slot";
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
  Omit<BoxProps, "variant" | "asChild">;

export const Message = forwardRef<HTMLDivElement, MessageProps>(
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

interface MessageTitleProps extends React.HTMLAttributes<HTMLParagraphElement> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   *
   * @default false
   */
  asChild?: boolean;
}
export const MessageTitle = forwardRef<HTMLParagraphElement, MessageTitleProps>(
  ({ asChild, className, ...rest }, ref) => {
    const Component = asChild ? Slot : "div";
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

interface MessageDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   *
   * @default false
   */
  asChild?: boolean;
}
export const MessageDescription = forwardRef<HTMLParagraphElement, MessageDescriptionProps>(
  ({ asChild, className, ...rest }, ref) => {
    const Component = asChild ? Slot : "div";
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
