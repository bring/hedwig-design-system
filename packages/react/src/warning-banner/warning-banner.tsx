import type { ReactNode } from "react";
import React, { forwardRef, useState } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { Box } from "../box";

export interface WarningBannerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title: ReactNode;
  description?: ReactNode;
}

export const WarningBanner = forwardRef<HTMLDivElement, WarningBannerProps>(
  ({ title, description, className, ...rest }, ref) => {
    const expandable = !!description;
    return (
      <Box {...rest} className={clsx("hds-warning-banner", className as undefined)} ref={ref}>
        <WarningBannerTitle variant={expandable ? "expandable" : "default"}>
          {title}
        </WarningBannerTitle>
        {expandable ? <WarningBannerDescription>{description}</WarningBannerDescription> : null}
      </Box>
    );
  },
);
WarningBanner.displayName = "WarningBanner";

type WarningBannerTitleProps =
  | ({ variant: "expandable" } & React.ButtonHTMLAttributes<HTMLButtonElement>)
  | ({ variant: "default" } & React.HTMLAttributes<HTMLParagraphElement>);

const WarningBannerTitle = forwardRef<
  HTMLButtonElement | HTMLParagraphElement,
  WarningBannerTitleProps
>(({ variant, children, className, ...rest }, ref) => {
  const [open, setOpen] = useState<boolean>(false);
  if (variant === "expandable") {
    return (
      <button
        {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
        className={clsx(
          "hds-warning-banner__title",
          "hds-warning-banner__title-trigger",
          { "hds-warning-banner--closed": !open },
          className as undefined,
        )}
        onClick={() => {
          setOpen((prev) => !prev);
        }}
        ref={ref as React.Ref<HTMLButtonElement>}
        type="button"
      >
        <span>{children}</span>
      </button>
    );
  }
  return (
    <p
      {...(rest as React.HTMLAttributes<HTMLParagraphElement>)}
      className={clsx("hds-warning-banner__title", className as undefined)}
      ref={ref as React.Ref<HTMLParagraphElement>}
    >
      {children}
    </p>
  );
});
WarningBannerTitle.displayName = "WarningBannerTitle";

type WarningBannerDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;
const WarningBannerDescription = forwardRef<HTMLParagraphElement, WarningBannerDescriptionProps>(
  ({ className, ...rest }, ref) => {
    return (
      <p
        className={clsx("hds-warning-banner__description", className as undefined)}
        ref={ref}
        {...rest}
      />
    );
  },
);
WarningBannerDescription.displayName = "WarningBannerDescription";
