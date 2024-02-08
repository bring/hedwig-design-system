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
      <Component
        {...rest}
        className={clsx("hds-card__body-description", className as undefined)}
        ref={ref}
      >
        {children}
      </Component>
    );
  },
);
CardBodyDescription.displayName = "Card.Body.Description";

export const CardBodyAction: OverridableComponent<CardBaseProps, HTMLDivElement> = forwardRef(
  ({ as: Component = "div", className, children, ...rest }, ref) => {
    return (
      <Component
        {...rest}
        className={clsx("hds-card__body-action", className as undefined)}
        ref={ref}
      >
        {children}
      </Component>
    );
  },
);
CardBodyAction.displayName = "Card.Body.Action";

export const CardBodyActionArrow: OverridableComponent<
  HTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> = forwardRef(({ as: Component = "span", className, ...rest }, ref) => {
  return (
    <Component
      {...rest}
      className={clsx("hds-card__body-action-arrow", className as undefined)}
      ref={ref}
    />
  );
});
CardBodyActionArrow.displayName = "Card.Body.Action.Arrow";
