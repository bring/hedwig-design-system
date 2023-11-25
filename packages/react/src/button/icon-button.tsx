import { clsx } from "clsx";
import { t } from "@postenbring/hedwig-css/typed-classname/index.mjs";
import { BaseButton, type ButtonProps } from "./button";

export type IconButtonProps = ButtonProps & { variant: "primary" | "secondary" };

export function IconButton({ className, ...rest }: IconButtonProps) {
  return <BaseButton className={clsx(t("hds-icon-button"), className)} {...rest} />;
}

IconButton.displayName = "IconButton";
