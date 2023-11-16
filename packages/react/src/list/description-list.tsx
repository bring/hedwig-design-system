import type { HTMLAttributes, ReactNode } from "react";
import React from "react";
import { clsx } from "clsx";
import { t } from "@postenbring/hedwig-css/typed-classname.mjs";
import { warnForStyleOverridesAndRender } from "../utils";

type DDProps = DLDTProps;
type DTProps = DLDTProps;

export interface DLDTProps
  extends Omit<React.HTMLAttributes<HTMLBaseElement>, "className" | "style"> {
  children: ReactNode;
}

export interface DLProps extends Omit<HTMLAttributes<HTMLDListElement>, "className" | "style"> {
  /**
   * Direction of the description list
   */
  variant?: "vertical" | "horizontal";
}

export function DescriptionDetails({ children, ...rest }: DDProps) {
  return warnForStyleOverridesAndRender(rest, <dd {...rest}>{children}</dd>);
}

export function DescriptionTerm({ children, ...rest }: DTProps) {
  return warnForStyleOverridesAndRender(rest, <dt {...rest}>{children}</dt>);
}

export function DescriptionList({ variant = "vertical", ...rest }: DLProps) {
  return warnForStyleOverridesAndRender(
    rest,
    <dl
      className={clsx(t("hds-description-list"), {
        [t("hds-description-list--horizontal")]: variant === "horizontal",
      })}
      {...rest}
    />,
  );
}

DescriptionList.displayName = "DescriptionList";
DescriptionTerm.displayName = "DescriptionTerm";
DescriptionDetails.displayName = "DescriptionDetails";

export default DescriptionList;
