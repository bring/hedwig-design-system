import type { HTMLAttributes, ReactNode } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname/index.mjs";

export type DescriptionDetailsProps = DLDTProps;
export type DescriptionTermProps = DLDTProps;

interface DLDTProps extends HTMLAttributes<HTMLBaseElement> {
  children?: ReactNode;
}

export interface DescriptionListProps extends HTMLAttributes<HTMLDListElement> {
  /**
   * Either `DescriptionDetails` or `DescriptionTerm` elements
   */
  children?: ReactNode;
  /**
   * Direction of the description list
   */
  variant?: "vertical" | "horizontal";
}

export function DescriptionDetails({ children, ...rest }: DescriptionDetailsProps) {
  return <dd {...rest}>{children}</dd>;
}

export function DescriptionTerm({ children, ...rest }: DescriptionTermProps) {
  return <dt {...rest}>{children}</dt>;
}

export function DescriptionList({
  variant = "vertical",
  className,
  ...rest
}: DescriptionListProps) {
  return (
    <dl
      className={clsx(
        "hds-description-list",
        {
          "hds-description-list--horizontal": variant === "horizontal",
        },
        className as undefined,
      )}
      {...rest}
    />
  );
}

DescriptionList.displayName = "DescriptionList";
DescriptionTerm.displayName = "DescriptionTerm";
DescriptionDetails.displayName = "DescriptionDetails";

export default DescriptionList;
