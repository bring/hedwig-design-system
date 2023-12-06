import type { HTMLAttributes, ReactElement } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname/index.mjs";

export interface BreadcrumbsProps extends HTMLAttributes<HTMLOListElement> {
  children: ReactElement<HTMLLIElement> | ReactElement<HTMLLIElement>[];

  /**
   * Props passed to the root `nav` html element
   */
  navProps?: HTMLAttributes<HTMLElement>;

  /**
   * Props passed to the `ol` html element
   */
  olProps?: HTMLAttributes<HTMLElement>;
}

/**
 * A breadcrumbs navigation menu
 *
 * **Usage**
 *
 * ```tsx
 * <Breadcrumbs>
 *   <li><Link href="../">Previous page</Link></li>
 *   <li>Current page</li>
 * </Breadcrumbs>
 * ```
 *
 * Outputs this html structure
 *
 * ```html
 * <nav>
 *   <ol>
 *     <li><a href="../">Previous page</a></li>
 *     <li>Current page</li>
 *   </ol>
 * </nav>
 * ```
 */
export function Breadcrumbs({ navProps, olProps, children }: BreadcrumbsProps) {
  return (
    <nav {...navProps}>
      <ol {...olProps} className={clsx("hds-breadcrumbs", olProps?.className as undefined)}>
        {children}
      </ol>
    </nav>
  );
}

Breadcrumbs.displayName = "Breadcrumbs";
