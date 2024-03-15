import type { ReactNode } from "react";
import { forwardRef, useState } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname/index.mjs";
import type { OverridableComponent } from "../utils";
import { Box } from "../box";

export interface WarningBannerProps {
  title: ReactNode;
  description?: ReactNode;
}

export const WarningBanner: OverridableComponent<WarningBannerProps, HTMLDivElement> = forwardRef(
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

interface WarningBannerTitleProps {
  variant: "expandable" | "default";
  children: ReactNode;
}

const WarningBannerTitle: OverridableComponent<WarningBannerTitleProps, HTMLDivElement> =
  forwardRef(
    (
      {
        variant,
        as: Component = variant === "expandable" ? "button" : "p",
        children,
        className,
        ...rest
      },
      ref,
    ) => {
      const [open, setOpen] = useState<boolean>(false);
      if (variant === "expandable") {
        return (
          <Component
            className={clsx(
              "hds-warning-banner__title",
              "hds-warning-banner__title-trigger",
              { "hds-warning-banner--closed": !open },
              className as undefined,
            )}
            onClick={() => {
              setOpen(!open);
            }}
            ref={ref}
            type="button"
            {...rest}
          >
            <span>{children}</span>
          </Component>
        );
      }
      return (
        <Component
          className={clsx("hds-warning-banner__title", className as undefined)}
          ref={ref}
          {...rest}
        >
          {children}
        </Component>
      );
    },
  );
WarningBannerTitle.displayName = "WarningBannerTitle";

const WarningBannerDescription: OverridableComponent<object, HTMLParagraphElement> = forwardRef(
  ({ as: Component = "p", className, ...rest }, ref) => {
    return (
      <Component
        className={clsx("hds-warning-banner__description", className as undefined)}
        ref={ref}
        {...rest}
      />
    );
  },
);
WarningBannerDescription.displayName = "WarningBannerDescription";
