import type { TableHTMLAttributes } from "react";

export function TableHeader(props: TableHTMLAttributes<HTMLTableCellElement>) {
  return <th {...props} />;
}
