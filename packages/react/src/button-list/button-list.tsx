import { forwardRef } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";

export interface ButtonListProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The list type
   *
   * @default "default"
   */
  variant?: "default" | "stretched";
}

/**
 * Button list component
 *
 * @example
 * <ButtonList variant="default">
 * <Button variant="primary">Primary</Button>
 * <Button variant="secondary">Secondary</Button>
 * </ButtonList>
 */
export const ButtonList = forwardRef<HTMLDivElement, ButtonListProps>(
  ({ variant = "default", className, children, ...rest }, ref) => {
    const Component = "div";

    return (
      <Component
        className={clsx("hds-button-list", `hds-button-list--${variant}`, className as undefined)}
        ref={ref}
        {...rest}
      >
        {children}
      </Component>
    );
  },
);
ButtonList.displayName = "ButtonList";
