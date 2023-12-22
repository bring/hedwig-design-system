import type { HTMLAttributes, ReactElement, ReactNode } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname/index.mjs";

interface WarningTitleProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode | string;
  variant: "default" | "expandable";
}

interface WarningDescriptionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode | string;
  variant: "expanded" | "collapsed";
}

interface WarningProps extends HTMLAttributes<HTMLDivElement> {
  children:
    | ReactElement<WarningTitleProps>
    | (ReactElement<WarningTitleProps> | ReactElement<WarningDescriptionProps>)[];
}

export function Warning({ children, className, ...rest }: WarningProps) {
  return (
    <div className={clsx("hds-warning", className as undefined)} {...rest}>
      {children}
    </div>
  );
}

/*export const WarningTitle: OverridableComponent<WarningTitleProps, HTMLParagraphElement> = forwardRef(
  ({as: Component = "p", children, className, variant = "default", ...rest}, ref) => {
    return (
      <Component
      ref={ref}
      className={clsx(
        "hds-warning-title",
        `hds-warning-title--${variant}`,
        className as undefined
      )}
      {...rest}
    >
      {children}
    </Component>
    )
  }
)*/

/*
<Warning>
  <Warning.Title variant='expandable'></Warning.Title>
  <Warning.Description variant='expanded'></Warning.Description>
</Warning>

<Warning>
  <WarningTitle></WarningTitle>
  <WarningContent variant='expanded'></WarningContent>
</Warning>
*/
