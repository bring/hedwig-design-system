import { clsx } from "@postenbring/hedwig-css/typed-classname/index.mjs";
import type { HTMLAttributes, ReactNode } from "react";
import { forwardRef } from "react";
import type { OverridableComponent } from "../../utils";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "slim";
  children: ReactNode;
}

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
