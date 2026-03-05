import { forwardRef, type HTMLAttributes, type ReactElement } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { Slot } from "@radix-ui/react-slot";
import { Accordion } from "../accordion";
import { LinkList } from "../list/link-list";
import { Button } from "../button";

interface FooterLogoProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   *
   * @default false
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

export interface FooterButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   *
   * @default false
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
      <Button asChild variant="secondary" className={clsx(className as undefined)}>
        <Component ref={ref} {...rest}>
          {children}
        </Component>
      </Button>
    );
  },
);
FooterButtonLink.displayName = "FooterButton";

interface FooterLinkSectionsProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement<FooterLinkSectionProps> | ReactElement<FooterLinkSectionProps>[];
}

/**
 * Responsive sections of links. Will become an accordion on mobile.
 *
 * Use with {@link FooterLinkSection} for each section.
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

export interface FooterProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Footer variant
   *
   * @default "default"
   */
  variant?: "default" | "slim";

  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   *
   * @default false
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
        data-color-scheme="dark"
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
) as FooterType;
Footer.displayName = "Footer";

type FooterType = ReturnType<typeof forwardRef<HTMLDivElement, FooterProps>> & {
  Logo: typeof FooterLogo;
  ButtonLink: typeof FooterButtonLink;
  LinkSections: typeof FooterLinkSections;
  LinkSection: typeof FooterLinkSection;
};

Footer.Logo = FooterLogo;
Footer.ButtonLink = FooterButtonLink;
Footer.LinkSections = FooterLinkSections;
Footer.LinkSection = FooterLinkSection;
