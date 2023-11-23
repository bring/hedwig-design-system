import type { HTMLAttributes, ReactNode } from "react";
import React from "react";
import { clsx } from "clsx";
import { t } from "@postenbring/hedwig-css/typed-classname/index.mjs";

export type DescriptionDetailsProps = DLDTProps;
export type DescriptionTermProps = DLDTProps;

interface DLDTProps extends Omit<React.HTMLAttributes<HTMLBaseElement>, "className" | "style"> {
  children: ReactNode;
}

export interface DescriptionListProps
  extends Omit<HTMLAttributes<HTMLDListElement>, "className" | "style"> {
  /**
   * Either `DescriptionDetails` or `DescriptionTerm` elements
   */
  children: ReactNode;
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

export function DescriptionList({ variant = "vertical", ...rest }: DescriptionListProps) {
  return (
    <dl
      className={clsx(t("hds-description-list"), {
        [t("hds-description-list--horizontal")]: variant === "horizontal",
      })}
      {...rest}
    />
  );
}

DescriptionList.displayName = "DescriptionList";
DescriptionTerm.displayName = "DescriptionTerm";
DescriptionDetails.displayName = "DescriptionDetails";

export default DescriptionList;
