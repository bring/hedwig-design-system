import { forwardRef, type HTMLAttributes, type ReactElement, type ReactNode } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";

export interface BreadcrumbsProps extends HTMLAttributes<HTMLOListElement> {
  children: ReactNode | ReactElement<HTMLLIElement> | ReactElement<HTMLLIElement>[];

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
 * <Breadcrumbs data-testid="breadcrumbs">
 *   <li><Link href="../">Previous page</Link></li>
 *   <li aria-current="page">Current page</li>
 * </Breadcrumbs>
 * ```
 *
 * Outputs this html structure
 *
 * ```html
 * <nav data-testid="breadcrumbs">
 *   <ol>
 *     <li><a href="../">Previous page</a></li>
 *     <li aria-current="page">Current page</li>
 *   </ol>
 * </nav>
 * ```
 */
export const Breadcrumbs = forwardRef<HTMLDivElement, BreadcrumbsProps>(
  ({ olProps, children, ...rest }, ref) => {
    return (
      <nav ref={ref} {...rest}>
        <ol {...olProps} className={clsx("hds-breadcrumbs", olProps?.className as undefined)}>
          {children}
        </ol>
      </nav>
    );
  },
);
Breadcrumbs.displayName = "Breadcrumbs";
