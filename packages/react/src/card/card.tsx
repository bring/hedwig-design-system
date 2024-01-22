import type { HTMLAttributes, ReactNode } from "react";
import { forwardRef } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname/index.mjs";
import type { OverridableComponent } from "../utils";

export interface CardBaseProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const Card: OverridableComponent<CardBaseProps, HTMLDivElement> = forwardRef(
  ({ as: Component = "section", className, children, ...rest }, ref) => {
    return (
      <Component {...rest} className={clsx("hds-card", className as undefined)} ref={ref}>
        {children}
      </Component>
    );
  },
);
Card.displayName = "Card";

export const CardMedia: OverridableComponent<CardBaseProps, HTMLDivElement> = forwardRef(
  ({ as: Component = "div", className, children, ...rest }, ref) => {
    return (
      <Component {...rest} className={clsx("hds-card__media", className as undefined)} ref={ref}>
        {children}
      </Component>
    );
  },
);
CardMedia.displayName = "Card.Media";

export interface CardImageMediaProps extends HTMLAttributes<HTMLDivElement> {
  aspectRatio?: string;
}
export const CardMediaImg: OverridableComponent<CardImageMediaProps, HTMLImageElement> = forwardRef(
  ({ as: Component = "img", className, ...rest }, ref) => {
    return (
      <Component
        {...rest}
        className={clsx("hds-card__media__img", className as undefined)}
        ref={ref}
      />
    );
  },
);
CardMediaImg.displayName = "Card.Media.Img";

export const CardBody: OverridableComponent<CardBaseProps, HTMLDivElement> = forwardRef(
  ({ as: Component = "div", className, children, ...rest }, ref) => {
    return (
      <Component {...rest} className={clsx("hds-card__body", className as undefined)} ref={ref}>
        {children}
      </Component>
    );
  },
);
CardBody.displayName = "Card.Body";

export const CardBodyHeader: OverridableComponent<CardBaseProps, HTMLDivElement> = forwardRef(
  ({ as: Component = "h3", className, children, ...rest }, ref) => {
    return (
      <Component
        {...rest}
        className={clsx("hds-card__body-header", className as undefined)}
        ref={ref}
      >
        {children}
      </Component>
    );
  },
);
CardBodyHeader.displayName = "Card.Body.Header";

export const CardBodyHeaderOverline: OverridableComponent<CardBaseProps, HTMLDivElement> =
  forwardRef(({ as: Component = "span", className, children, ...rest }, ref) => {
    return (
      <Component
        {...rest}
        className={clsx("hds-card__body-header-overline", className as undefined)}
        ref={ref}
      >
        {children}
      </Component>
    );
  });
CardBodyHeaderOverline.displayName = "Card.Body.Header.Overline";

export const CardBodyHeaderTitle: OverridableComponent<CardBaseProps, HTMLDivElement> = forwardRef(
  ({ as: Component = "span", className, children, ...rest }, ref) => {
    return (
      <Component
        {...rest}
        className={clsx("hds-card__body-header-title", className as undefined)}
        ref={ref}
      >
        {children}
      </Component>
    );
  },
);
CardBodyHeaderTitle.displayName = "Card.Body.Header.Title";

export const CardBodyDescription: OverridableComponent<CardBaseProps, HTMLDivElement> = forwardRef(
  ({ as: Component = "p", className, children, ...rest }, ref) => {
    return (
      <Component {...rest} className={clsx(className as undefined)} ref={ref}>
        {children}
      </Component>
    );
  },
);
CardBodyDescription.displayName = "Card.Body.Description";

export const CardBodyAction: OverridableComponent<CardBaseProps, HTMLDivElement> = forwardRef(
  ({ as: Component = "div", className, children, ...rest }, ref) => {
    return (
      <Component {...rest} className={className as undefined} ref={ref}>
        {children}
      </Component>
    );
  },
);
CardBodyAction.displayName = "Card.Body.Action";

export const CardBodyActionArrow: OverridableComponent<
  HTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> = forwardRef(({ as: Component = "a", className, ...rest }, ref) => {
  return (
    <Component
      {...rest}
      className={className}
      ref={ref}
      style={{
        backgroundImage: `url('data:image/svg+xml,<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.7891 5.25229L11.0859 5.92026C10.9102 6.09604 10.9102 6.37729 11.0859 6.51791L16.5352 11.9671H4.54688C4.30078 11.9671 4.125 12.1781 4.125 12.389V13.3734C4.125 13.6195 4.30078 13.7953 4.54688 13.7953H16.5352L11.0859 19.2796C10.9102 19.4203 10.9102 19.7015 11.0859 19.8773L11.7891 20.5453C11.9297 20.721 12.2109 20.721 12.3867 20.5453L19.7344 13.1976C19.9102 13.0218 19.9102 12.7757 19.7344 12.5999L12.3867 5.25229C12.2109 5.07651 11.9297 5.07651 11.7891 5.25229Z" fill="black"/></svg>')`,
        width: "20px",
        height: "20px",
        display: "block",
        borderBottom: "none",
      }}
    />
  );
});
CardBodyActionArrow.displayName = "Card.Body.Action.Arrow";
