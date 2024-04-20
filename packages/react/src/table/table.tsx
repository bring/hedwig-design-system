import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { forwardRef, useId } from "react";

interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  className?: string;

  /**
   * Size of the table
   *
   * Use `compressed` for a more compact table, or `mobile-compressed` for a compact table on mobile screens only.
   */
  size?: "default" | "compressed" | "mobile-compressed";

  /**
   * The table caption
   *
   * You can also set this by passing `<caption>` as a first child of the table
   */
  caption?: React.ReactNode;

  /**
   * Optional description of the table displayed underneath the table
   *
   * Ensures the `aria-describedby` attribute is set on the table, making it accessible for screen readers.
   */
  description?: React.ReactNode;
}

export const Table = forwardRef<HTMLTableElement, TableProps>(
  ({ children, className, size, caption, description, ...rest }, ref) => {
    const descriptionId = useId();
    return (
      <>
        <table
          aria-describedby={description ? descriptionId : undefined}
          ref={ref}
          className={clsx(
            "hds-table",
            {
              "hds-table--compressed": size === "compressed",
              "hds-table--mobile-compressed": size === "mobile-compressed",
            },
            className as undefined,
          )}
          {...rest}
        >
          {caption ? <caption>{caption}</caption> : null}
          {children}
        </table>
        {description ? (
          <p className={clsx("hds-table-description")} id={descriptionId}>
            {description}
          </p>
        ) : null}
      </>
    );
  },
);
Table.displayName = "Table";
