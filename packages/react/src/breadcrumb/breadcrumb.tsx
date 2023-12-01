import type { HTMLAttributes, ReactElement } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname/index.mjs";
import type { LinkProps } from "../link";

export interface BreadcrumbProps extends HTMLAttributes<HTMLAnchorElement> {
  children: ReactElement<LinkProps> | string;
}

export type BreadcrumbPreviousProps = BreadcrumbProps;

export interface BreadcrumbsProps extends HTMLAttributes<HTMLElement> {
  children: ReactElement<BreadcrumbProps> | ReactElement<BreadcrumbProps[]>;
  direction: "right" | "left";
}

export function Breadcrumbs({ direction, className, children }: BreadcrumbsProps) {
  return (
    <nav>
      <ol
        className={clsx("hds-breadcrumbs", `hds-breadcrumbs--${direction}`, className as undefined)}
      >
        {children}
      </ol>
    </nav>
  );
}

export function Breadcrumb(props: BreadcrumbProps) {
  return <li className={clsx("hds-breadcrumb")}>{props.children}</li>;
}

export function BreadcrumbPrevious(props: BreadcrumbPreviousProps) {
  return (
    <Breadcrumbs className="hds-breadcrumbs-previous" direction="left">
      <Breadcrumb>{props.children}</Breadcrumb>
    </Breadcrumbs>
  );
}

Breadcrumb.displayName = "Breadcrumb";
Breadcrumbs.displayName = "Breadcrumbs";
BreadcrumbPrevious.displayName = "BreadcrumbPrevious";
