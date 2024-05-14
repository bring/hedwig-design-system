import type { ReactNode } from "react";
import React, { forwardRef, useId, useState } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";

export interface WarningBannerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title: ReactNode;
  description?: ReactNode;
}

export const WarningBanner = forwardRef<HTMLDivElement, WarningBannerProps>(
  ({ title, description, className, ...rest }, ref) => {
    const descriptionId = useId();
    const expandable = !!description;
    return (
      <div {...rest} className={clsx("hds-warning-banner", className as undefined)} ref={ref}>
        <WarningBannerTitle
          variant={expandable ? "expandable" : "default"}
          descriptionId={descriptionId}
        >
          {title}
        </WarningBannerTitle>
        {expandable ? (
          <WarningBannerDescription id={descriptionId}>{description}</WarningBannerDescription>
        ) : null}
      </div>
    );
  },
);
WarningBanner.displayName = "WarningBanner";

type WarningBannerTitleProps =
  | ({
      variant: "expandable";
      descriptionId: string;
    } & React.ButtonHTMLAttributes<HTMLButtonElement>)
  | ({ variant: "default"; descriptionId?: string } & React.HTMLAttributes<HTMLParagraphElement>);

const WarningBannerTitle = forwardRef<
  HTMLButtonElement | HTMLParagraphElement,
  WarningBannerTitleProps
>(({ variant, descriptionId, children, className, ...rest }, ref) => {
  const [open, setOpen] = useState<boolean>(false);
  if (variant === "expandable") {
    return (
      <button
        {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
        aria-expanded={open}
        aria-controls={descriptionId}
        data-state={open ? "open" : "closed"}
        className={clsx(
          "hds-warning-banner__title",
          "hds-warning-banner__title-trigger",
          className as undefined,
        )}
        onClick={() => {
          setOpen((prev) => !prev);
        }}
        ref={ref as React.Ref<HTMLButtonElement>}
        type="button"
      >
        <div>{children}</div>
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

type WarningBannerDescriptionProps = { id: string } & React.HTMLAttributes<HTMLParagraphElement>;
const WarningBannerDescription = forwardRef<HTMLParagraphElement, WarningBannerDescriptionProps>(
  ({ className, id, ...rest }, ref) => {
    return (
      <p
        id={id}
        className={clsx("hds-warning-banner__description", className as undefined)}
        ref={ref}
        {...rest}
      />
    );
  },
);
WarningBannerDescription.displayName = "WarningBannerDescription";
