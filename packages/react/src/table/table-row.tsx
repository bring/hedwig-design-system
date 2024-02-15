import type { TableHTMLAttributes } from "react";

export function TableRow(props: TableHTMLAttributes<HTMLTableRowElement>) {
  return <tr {...props} />;
}
