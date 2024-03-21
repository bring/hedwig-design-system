import { clsx } from "@postenbring/hedwig-css/typed-classname";
import type { HTMLAttributes, ReactNode } from "react";
import { forwardRef } from "react";
import type { OverridableComponent } from "../../utils";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "slim";
  children: ReactNode;
}

/**
 * Container is a layout component that is used to wrap content.
 * It ensures a max-width and minimum spacing on the sides.
 */
export const Container: OverridableComponent<ContainerProps, HTMLDivElement> = forwardRef(
  ({ as: Component = "div", className, children, variant, ...rest }, ref) => {
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
