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

export function DD({ children, ...rest }: DDProps) {
  return warnForStyleOverridesAndRender(rest, <dd {...rest}>{children}</dd>);
}

export function DT({ children, ...rest }: DTProps) {
  return warnForStyleOverridesAndRender(rest, <dt {...rest}>{children}</dt>);
}

export function DL({ variant = "vertical", ...rest }: DLProps) {
  return warnForStyleOverridesAndRender(
    rest,
    <dl
      className={clsx(t("hds-dl"), variant === "horizontal" && t("hds-dl--horizontal"))}
      {...rest}
    />,
  );
}

DL.displayName = "DL";
DD.displayName = "DD";
DT.displayName = "DT";

export default DL;
