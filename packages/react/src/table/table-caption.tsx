import type { TableHTMLAttributes } from "react";

export function TableCaption(props: TableHTMLAttributes<HTMLTableCaptionElement>) {
  return <caption {...props} />;
}
