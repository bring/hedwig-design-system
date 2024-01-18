import type { HTMLAttributes, ReactNode } from "react";
import { forwardRef } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname/index.mjs";
import type { OverridableComponent } from "../utils";

export interface CardBaseProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const Card: OverridableComponent<CardBaseProps, HTMLDivElement> = forwardRef(
  ({ as: Component = "div", className, children, ...rest }, ref) => {
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

export const CardBodyOverline: OverridableComponent<CardBaseProps, HTMLDivElement> = forwardRef(
  ({ as: Component = "p", className, children, ...rest }, ref) => {
    return (
      <Component {...rest} className={clsx("hds-card__overline", className as undefined)} ref={ref}>
        {children}
      </Component>
    );
  },
);
CardBodyOverline.displayName = "Card.Body.Overline";

export const CardBodyTitle: OverridableComponent<CardBaseProps, HTMLDivElement> = forwardRef(
  ({ as: Component = "h3", className, children, ...rest }, ref) => {
    return (
      <Component {...rest} className={clsx("hds-card__title", className as undefined)} ref={ref}>
        {children}
      </Component>
    );
  },
);
CardBodyTitle.displayName = "Card.Body.Title";

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