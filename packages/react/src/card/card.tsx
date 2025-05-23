import type { ReactNode } from "react";
import { forwardRef } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { Slot } from "@radix-ui/react-slot";

export const CardMedia = forwardRef<HTMLDivElement, CardBaseProps>(
  ({ asChild, className, children, ...rest }, ref) => {
    const Component = asChild ? Slot : "div";
    return (
      <Component {...rest} className={clsx("hds-card__media", className as undefined)} ref={ref}>
        {children}
      </Component>
    );
  },
);
CardMedia.displayName = "Card.Media";

export interface CardImageMediaProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   *
   * @default false
   */
  asChild?: boolean;
  /**
   * Define image scaling behavior when the image are varies in both width and height across different page breaks and  sizes of the card.
   * "crop": Image always fills the available space.
   *         If the aspect ratio doesn't match, then the top/bottom or left/right edges are cropped away.
   * "scale": No cropping, image scales to the maximum size available and centers.
   *          If the aspect ratio doesn't match, then the background will show on the top/bottom or left/right sides of the image.
   *
   * @default "crop"
   */
  variant?: "crop" | "scale";
}
export const CardMediaImg = forwardRef<HTMLImageElement, CardImageMediaProps>(
  ({ asChild, variant, className, ...rest }, ref) => {
    const Component = asChild ? Slot : "img";
    return (
      <Component
        {...rest}
        className={clsx(
          "hds-card__media__img",
          { "hds-card__img__scale": variant === "scale" },
          className as undefined,
        )}
        ref={ref}
      />
    );
  },
);
CardMediaImg.displayName = "Card.MediaImg";

export const CardBody = forwardRef<HTMLDivElement, CardBaseProps>(
  ({ asChild, className, children, ...rest }, ref) => {
    const Component = asChild ? Slot : "div";
    return (
      <Component {...rest} className={clsx("hds-card__body", className as undefined)} ref={ref}>
        <div className={clsx("hds-card__centerbody", className as undefined)}>{children}</div>
      </Component>
    );
  },
);
CardBody.displayName = "Card.Body";

export const CardBodyHeader = forwardRef<
  HTMLHeadingElement,
  CardBaseProps &
    (
      | {
          /**
           * Heading level of the card heading
           */
          as: "h2" | "h3" | "h4" | "h5" | "h6";
          asChild?: never;
        }
      | {
          asChild: true;
          as?: never;
        }
    )
>(({ as: Tag, asChild, className, children, ...rest }, ref) => {
  const Component = asChild ? Slot : Tag;
  return (
    <Component
      {...rest}
      className={clsx("hds-card__body-header", className as undefined)}
      ref={ref}
    >
      {children}
    </Component>
  );
});
CardBodyHeader.displayName = "Card.BodyHeader";

export const CardBodyHeaderOverline = forwardRef<HTMLDivElement, CardBaseProps>(
  ({ asChild, className, children, ...rest }, ref) => {
    const Component = asChild ? Slot : "span";
    return (
      <Component
        {...rest}
        className={clsx("hds-card__body-header-overline", className as undefined)}
        ref={ref}
      >
        {children}
      </Component>
    );
  },
);
CardBodyHeaderOverline.displayName = "Card.BodyHeaderOverline";

export const CardBodyHeaderTitle = forwardRef<HTMLDivElement, CardBaseProps>(
  ({ asChild, className, children, ...rest }, ref) => {
    const Component = asChild ? Slot : "div";
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
CardBodyHeaderTitle.displayName = "Card.BodyHeaderTitle";

export const CardBodyDescription = forwardRef<HTMLParagraphElement, CardBaseProps>(
  ({ asChild, className, children, ...rest }, ref) => {
    const Component = asChild ? Slot : "p";
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
CardBodyDescription.displayName = "Card.BodyDescription";

export const CardBodyAction = forwardRef<HTMLDivElement, CardBaseProps>(
  ({ asChild, className, children, ...rest }, ref) => {
    const Component = asChild ? Slot : "div";
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
CardBodyAction.displayName = "Card.BodyAction";

export const CardBodyActionRow = forwardRef<HTMLDivElement, CardBaseProps>(
  ({ asChild, className, children, ...rest }, ref) => {
    const Component = asChild ? Slot : "div";
    return (
      <Component
        {...rest}
        className={clsx("hds-card__body-action-row", className as undefined)}
        ref={ref}
      >
        {children}
      </Component>
    );
  },
);
CardBodyActionRow.displayName = "Card.BodyActionRow";

interface CardBodyActionArrowProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   *
   * @default false
   */
  asChild?: boolean;

  /**
   * Set direction of the arrow
   *
   * @default "right"
   */
  direction?: "right" | "up-right";
}
export const CardBodyActionArrow = forwardRef<HTMLSpanElement, CardBodyActionArrowProps>(
  ({ asChild, className, direction, ...rest }, ref) => {
    const Component = asChild ? Slot : "span";
    return (
      <Component
        {...rest}
        className={clsx(
          "hds-card__body-action-arrow",
          { "hds-card__body-action-arrow-up-right": direction === "up-right" },
          className as undefined,
        )}
        ref={ref}
      />
    );
  },
);
CardBodyActionArrow.displayName = "Card.BodyActionArrow";

export interface CardBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;

  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   *
   * @default false
   */
  asChild?: boolean;
}

export interface CardSlimAndMiniatureProps extends CardBaseProps {
  /**
   * Change the default rendered element for Card.
   */
  as?: "section" | "div" | "article" | "aside";
  /**
   * Allows for a horizontal variant for sizes above small.
   *
   * @default "slim"
   */
  variant?: "slim" | "miniature";
  /**
   * The color of the card.
   *
   * @default "lighter-brand"
   * */
  color?: "white" | "lighter-brand" | "light-grey-fill";

  /* Only fullwidth or focus cards can have images to the left or right of the text: */
  imagePosition?: never;
}

export interface CardFocusProps extends CardBaseProps {
  as?: "section" | "div" | "article" | "aside";
  variant: "focus";
  color?: "darker";
  /**
   * fullwidth or focus cards can have images to the left or right of the text.
   *
   * @default "left"
   * */
  imagePosition?: "left" | "right";
}

export interface CardFullwidthProps extends CardBaseProps {
  as?: "section" | "div" | "article" | "aside";
  variant: "full-width";
  color: "white" | "lighter-brand" | "light-grey-fill";
  /**
   * fullwidth or focus cards can have images to the left or right of the text.
   *
   * @default "left"
   * */
  imagePosition?: "left" | "right";
}

export type CardProps = CardSlimAndMiniatureProps | CardFocusProps | CardFullwidthProps;

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      as: Tag = "section",
      asChild,
      className,
      children,
      variant = "slim",
      color,
      imagePosition,
      ...rest
    },
    ref,
  ) => {
    const Component = asChild ? Slot : Tag;
    const effectiveColor = variant === "focus" && !color ? "darker" : color;
    return (
      <Component
        {...rest}
        className={clsx(
          "hds-card",
          { "hds-card--full-width": variant === "full-width" },
          { "hds-card--miniature": variant === "miniature" },
          { "hds-card--focus": variant === "focus" },
          { "hds-card--slim": variant === "slim" },
          { "hds-card--color-white": effectiveColor === "white" },
          { "hds-card--color-light-grey-fill": effectiveColor === "light-grey-fill" },
          { "hds-card--color-darker": effectiveColor === "darker" },
          { "hds-card--image-position-right": imagePosition === "right" },
          className as undefined,
        )}
        ref={ref}
      >
        {variant === "full-width" ? (
          <div className={clsx("hds-card__layoutwrapper", className as undefined)}>{children}</div>
        ) : (
          children
        )}
      </Component>
    );
  },
) as CardType;
Card.displayName = "Card";

Card.Media = CardMedia;
Card.MediaImg = CardMediaImg;
Card.Body = CardBody;
Card.BodyHeader = CardBodyHeader;
Card.BodyHeaderOverline = CardBodyHeaderOverline;
Card.BodyHeaderTitle = CardBodyHeaderTitle;
Card.BodyDescription = CardBodyDescription;
Card.BodyAction = CardBodyAction;
Card.BodyActionRow = CardBodyActionRow;
Card.BodyActionArrow = CardBodyActionArrow;

type CardType = ReturnType<typeof forwardRef<HTMLDivElement, CardProps>> & {
  Media: typeof CardMedia;
  MediaImg: typeof CardMediaImg;
  Body: typeof CardBody;
  BodyHeader: typeof CardBodyHeader;
  BodyHeaderOverline: typeof CardBodyHeaderOverline;
  BodyHeaderTitle: typeof CardBodyHeaderTitle;
  BodyDescription: typeof CardBodyDescription;
  BodyAction: typeof CardBodyAction;
  BodyActionRow: typeof CardBodyActionRow;
  BodyActionArrow: typeof CardBodyActionArrow;
};
