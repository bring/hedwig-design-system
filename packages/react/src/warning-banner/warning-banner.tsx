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
            <span className={clsx("hds-warning-banner__title-trigger--icon")}>
              <svg
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g className="hds-warning-banner__title-trigger--icon-chevron">
                  <path d="M19.6289 9.15625L18.9609 8.45312C18.7852 8.27734 18.5039 8.27734 18.3633 8.45312L12 14.8164L5.60156 8.45312C5.46094 8.27734 5.17969 8.27734 5.00391 8.45312L4.33594 9.15625C4.16016 9.29688 4.16016 9.57812 4.33594 9.75391L11.6836 17.1016C11.8594 17.2773 12.1055 17.2773 12.2812 17.1016L19.6289 9.75391C19.8047 9.57812 19.8047 9.29688 19.6289 9.15625Z" />
                </g>
              </svg>
            </span>
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
