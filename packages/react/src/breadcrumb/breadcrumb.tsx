import type { HTMLAttributes, ReactElement } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname/index.mjs";

export interface BreadcrumbsProps extends HTMLAttributes<HTMLOListElement> {
  children: ReactElement<HTMLLIElement | string> | ReactElement<HTMLLIElement[] | string[]>;
}

export function Breadcrumbs({ className, children, ...rest }: BreadcrumbsProps) {
  return (
    <nav>
      <ol className={clsx("hds-breadcrumbs", className as undefined)} {...rest}>
        {children}
      </ol>
    </nav>
  );
}

Breadcrumbs.displayName = "Breadcrumbs";
