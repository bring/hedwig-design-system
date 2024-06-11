import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { Slot } from "@radix-ui/react-slot";
import type { HTMLAttributes, ReactNode } from "react";
import { forwardRef } from "react";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "slim";
  children: ReactNode;

  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   *
   * @default false
   */
  asChild?: boolean;

  /**
   * Convienence prop to change the rendered element.
   *
   * Use {@link ContainerProps.asChild} if you need more control of the rendered element.
   */
  as?: "div" | "section" | "aside" | "main" | "article" | "header" | "footer";
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ as: Tag = "div", asChild, className, children, variant, ...rest }, ref) => {
    const Component = asChild ? Slot : Tag;
    return (
      <Component
        {...rest}
        className={clsx(
          "hds-container",
          { "hds-container--slim": variant === "slim" },
          className as undefined,
        )}
        ref={ref}
      >
        {children}
      </Component>
    );
  },
);
Container.displayName = "Container";
