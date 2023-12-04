import type { HTMLAttributes, ReactElement } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname/index.mjs";
import type { LinkProps } from "../link";

export interface BreadcrumbProps extends HTMLAttributes<HTMLAnchorElement> {
  children: ReactElement<LinkProps> | string;
}

export interface BreadcrumbsProps extends HTMLAttributes<HTMLElement> {
  children: ReactElement<BreadcrumbProps> | ReactElement<BreadcrumbProps[]>;
}

export function Breadcrumbs({ className, children }: BreadcrumbsProps) {
  return (
    <nav>
      <ol className={clsx("hds-breadcrumbs", className as undefined)}>{children}</ol>
    </nav>
  );
}

export function Breadcrumb(props: BreadcrumbProps) {
  return <div className={clsx("hds-breadcrumb")}>{props.children}</div>;
}

Breadcrumb.displayName = "Breadcrumb";
Breadcrumbs.displayName = "Breadcrumbs";
