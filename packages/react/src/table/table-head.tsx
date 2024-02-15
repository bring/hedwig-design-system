import type { TableHTMLAttributes } from "react";

export function TableHead(props: TableHTMLAttributes<HTMLTableSectionElement>) {
  return <thead {...props} />;
}
