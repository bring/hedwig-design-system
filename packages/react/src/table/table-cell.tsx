import type { TableHTMLAttributes } from "react";

export function TableCell(props: TableHTMLAttributes<HTMLTableCellElement>) {
  return <td {...props} />;
}
