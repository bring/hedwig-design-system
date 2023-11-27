import { clsx } from "@postenbring/hedwig-css/typed-classname/index.mjs";
import { BaseButton, type ButtonProps } from "./button";

export type IconButtonProps = ButtonProps & { variant: "primary" | "secondary" };

export function IconButton({ className, ...rest }: IconButtonProps) {
  return <BaseButton className={clsx("hds-icon-button", className as undefined)} {...rest} />;
}

IconButton.displayName = "IconButton";
