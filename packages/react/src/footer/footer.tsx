import { forwardRef, type HTMLAttributes, type ReactElement } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { Slot } from "@radix-ui/react-slot";
import { Accordion } from "../accordion";
import { LinkList } from "../list/link-list";
import { PrimaryButton } from "../button";

export interface FooterProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "slim";

  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   */
  asChild?: boolean;
}

/**
 * 🚨 WORK IN PROGRESS 🚨
 */
export const Footer = forwardRef<HTMLDivElement, FooterProps>(
  ({ children, className, variant, asChild, ...rest }, ref) => {
    const Component = asChild ? Slot : "footer";
    return (
      <Component
        className={clsx(
          `hds-footer`,
          variant === "slim" && "hds-footer--slim",
          className as undefined,
        )}
        ref={ref}
        {...rest}
      >
        {children}
      </Component>
    );
  },
);
Footer.displayName = "Footer";

export interface FooterButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   */
  asChild?: boolean;
}

/**
 * 🚨 WORK IN PROGRESS 🚨
 */
export const FooterButtonLink = forwardRef<HTMLAnchorElement, FooterButtonLinkProps>(
  ({ children, className, asChild, ...rest }, ref) => {
    const Component = asChild ? Slot : "a";
    return (
      // @ts-expect-error -- It's ok, types are a bit off
      <PrimaryButton
        as={Component}
        fill="outline"
        className={clsx(className as undefined)}
        ref={ref}
        {...rest}
      >
        {children}
      </PrimaryButton>
    );
  },
);
FooterButtonLink.displayName = "FooterButton";

interface FooterLogoProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   */
  asChild?: boolean;
}

/**
 * A fixed Posten or Bring logo.
 *
 * The logo follows the brand theme, so if the class `hds-theme-bring` is set the Bring logo will be shown instead of the Posten logo
 */
export const FooterLogo = forwardRef<HTMLDivElement, FooterLogoProps>(
  ({ children, className, asChild, ...rest }, ref) => {
    const Component = asChild ? Slot : "div";
    return (
      <Component className={clsx(`hds-footer__logo`, className as undefined)} ref={ref} {...rest}>
        {children}
      </Component>
    );
  },
);
FooterLogo.displayName = "Footer.Logo";

interface FooterLinkSectionsProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement<FooterLinkSectionProps> | ReactElement<FooterLinkSectionProps>[];
}

/**
 * Responsive sections of links. Will become an accordion on mobile.
 *
 * Use with `Footer.LinkSection` for each section.
 */
export const FooterLinkSections = forwardRef<HTMLDivElement, FooterLinkSectionsProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <>
        {/* Mobile and Desktop. The accordion styling gets removed on desktop */}
        <Accordion
          className={clsx("hds-footer__link-sections", className as undefined)}
          ref={ref}
          {...rest}
        >
          {/* @ts-expect-error -- It's ok */}
          {children}
        </Accordion>
      </>
    );
  },
);
FooterLinkSections.displayName = "Footer.LinkSections";

interface FooterLinkSectionProps extends HTMLAttributes<HTMLDivElement> {
  heading: React.ReactNode;
  children: React.ReactNode;
}

export const FooterLinkSection = forwardRef<HTMLDivElement, FooterLinkSectionProps>(
  ({ heading, children, className, ...rest }, ref) => {
    // @ts-expect-error -- It's ok
    const linkListChildren = <LinkList>{children}</LinkList>;
    return (
      <>
        {/* Mobile */}
        <Accordion.Item
          className={clsx(`hds-footer__link-section`, className as undefined)}
          ref={ref}
          {...rest}
        >
          <Accordion.Header>{heading}</Accordion.Header>
          <Accordion.Content>{linkListChildren}</Accordion.Content>
        </Accordion.Item>

        {/* Desktop */}
        <div className={clsx(`hds-footer__link-section`, className as undefined)}>
          <h2>{heading}</h2>
          {linkListChildren}
        </div>
      </>
    );
  },
);
FooterLinkSection.displayName = "Footer.LinkSection";
