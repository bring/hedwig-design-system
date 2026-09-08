import { Fragment, useEffect, useState } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { Navbar } from "../navbar";
import { Footer } from "../footer";
import { Accordion } from "../accordion";
import { Container } from "../layout";
import { Link } from "../link";
import { LinkList } from "../list/link-list";
import { Skeleton } from "../skeleton";
import { useDecoratorData } from "./use-decorator-data";
import {
  resolveFrontPageUrl,
  type DecoratorLinkItem,
  type DecoratorSiteIdentifier,
} from "./decorator-data";
import { LoginNavItem } from "./login-nav-item";
import { getTranslate } from "./translations";
import { Search } from "./search";
import { CloseIcon, SearchIcon } from "./icons";
import { serviceIconMap } from "./service-icons";

/**
 * Bare `<li>` items — wrap in `LinkList` yourself, or pass straight to
 * `Footer.LinkSection`, which wraps its children in a `LinkList` internally.
 */
function LinkItems({ items }: Readonly<{ items: DecoratorLinkItem[] }>) {
  return (
    <>
      {items.map((item) => (
        <li key={item.absolutePath}>
          <a href={item.absolutePath}>{item.title}</a>
        </li>
      ))}
    </>
  );
}

export interface DecoratorProps extends DecoratorSiteIdentifier {
  children: React.ReactNode;

  /**
   * Rendered in place of the header while data is loading.
   * Defaults to a skeleton bar sized to the navbar's height, to avoid layout
   * shift once the real header appears.
   */
  loadingFallback?: React.ReactNode;

  /**
   * Called when fetching header/footer content from Enonic fails. Content
   * still renders without decorator chrome — this is for reporting the
   * failure to your own error tracking, since the component itself can't.
   */
  onError?: (error: Error) => void;
}

/**
 * 🚨 PROTOTYPE — exploration only, not production-ready 🚨
 *
 * Component-based replacement for kp-decorator's HTML-injection flow. Wraps
 * `children` with a default header and footer built from HDS's `Navbar` and
 * `Footer`, themed for `brand`, with content fetched live from Enonic.
 */
export function Decorator({
  children,
  loadingFallback,
  onError,
  ...identifier
}: Readonly<DecoratorProps>) {
  const result = useDecoratorData(identifier);
  const isBring = identifier.brand === "bring";
  const lang = identifier.lang ?? "no";
  const translate = getTranslate(lang);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    if (result.status === "error") {
      // eslint-disable-next-line no-console -- the component has no other way to surface this
      console.error("Decorator: failed to load header/footer content from Enonic.", result.error);
      onError?.(result.error);
    }
  }, [result, onError]);

  // `data-color` drives brand-scoped design tokens (surface/border colors, etc.) that
  // have no root fallback in HDS — without it those colors resolve to nothing.
  // `hds-theme-bring` remains for the logo, which is themed separately by that class.
  const dataColor = identifier.brand;

  if (result.status === "loading") {
    return (
      <div className={clsx(isBring && "hds-theme-bring")} data-color={dataColor}>
        {loadingFallback ?? <Skeleton variant="rectangle" width="100%" height={112} />}
        {children}
      </div>
    );
  }

  if (result.status === "error") {
    return (
      <div className={clsx(isBring && "hds-theme-bring")} data-color={dataColor}>
        {children}
      </div>
    );
  }

  const { header, footer } = result.data;
  const frontPageUrl = resolveFrontPageUrl(identifier);

  return (
    <div className={clsx("hds-decorator", isBring && "hds-theme-bring")} data-color={dataColor}>
      <Navbar>
        <Navbar.Logo
          asChild
          className="hds-decorator__logo"
          data-state={searchOpen ? "hidden-on-search-open" : "visible"}
        >
          <a href={frontPageUrl} title={translate("to-the-front-page")} />
        </Navbar.Logo>
        <Navbar.Navigation>
          {searchOpen ? (
            <>
              <Search identifier={identifier} header={header} lang={lang} />
              <Navbar.ButtonItem
                title={translate("close")}
                onClick={() => {
                  setSearchOpen(false);
                }}
              >
                <Navbar.ItemIcon>
                  <CloseIcon />
                </Navbar.ItemIcon>
              </Navbar.ButtonItem>
            </>
          ) : (
            <Navbar.ButtonItem
              title={header.searchAriaLabel}
              onClick={() => {
                setSearchOpen(true);
              }}
            >
              <span className="hds-navbar__item-responsive-text">{header.searchAriaLabel}</span>
              <Navbar.ItemIcon>
                <SearchIcon />
              </Navbar.ItemIcon>
            </Navbar.ButtonItem>
          )}

          <LoginNavItem loginLinks={header.loginLinks} lang={lang} />
          <Navbar.ExpandableMenu>
            <Navbar.ExpandableMenuTrigger
              whenClosedText={translate("menu")}
              whenOpenText={translate("close")}
            />
            <Navbar.ExpandableMenuContent>
              <Container>
                {header.iconSection && header.iconSection.length > 0 ? (
                  <ul className="hds-decorator__header-icon-section">
                    {header.iconSection.map((icon) => (
                      <li key={icon.absolutePath}>
                        <Link
                          variant="no-underline"
                          className="hds-decorator__header-icon-section-item"
                          href={icon.absolutePath}
                        >
                          {serviceIconMap[icon.serviceIcon]}
                          {icon.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}

                <Accordion className="hds-decorator__header-sections">
                  {header.mainSections.map((section) => (
                    <Fragment key={section.heading}>
                      {/* Mobile */}
                      <Accordion.Item className="hds-decorator__header-section">
                        <Accordion.Header>{section.heading}</Accordion.Header>
                        <Accordion.Content>
                          <LinkList>
                            <LinkItems items={section.items} />
                          </LinkList>
                        </Accordion.Content>
                      </Accordion.Item>

                      {/* Desktop */}
                      <div className="hds-decorator__header-section">
                        <h2>{section.heading}</h2>
                        <LinkList>
                          <LinkItems items={section.items} />
                        </LinkList>
                      </div>
                    </Fragment>
                  ))}
                </Accordion>
              </Container>
            </Navbar.ExpandableMenuContent>
          </Navbar.ExpandableMenu>
        </Navbar.Navigation>
      </Navbar>

      <main className="hds-decorator__main">{children}</main>

      <Footer>
        <Container>
          <div className="hds-footer__links-and-buttons">
            <div className="hds-footer__button-link-section">
              {footer.buttons.map((button) => (
                <Footer.ButtonLink key={button.absolutePath} href={button.absolutePath}>
                  {button.title}
                </Footer.ButtonLink>
              ))}
            </div>

            <Footer.LinkSections>
              {footer.mainSections.map((section) => (
                <Footer.LinkSection key={section.heading} heading={section.heading}>
                  <LinkItems items={section.items} />
                </Footer.LinkSection>
              ))}
            </Footer.LinkSections>
          </div>

          <div className="hds-footer__logo-row">
            <Footer.Logo asChild>
              <a href={frontPageUrl} title={translate("to-the-front-page")} />
            </Footer.Logo>
          </div>

          <div className="hds-footer__copyright-and-links">
            <span className="hds-footer__copyright">{footer.copyRightText}</span>
            {footer.bottomLinks.map((link) => (
              <Link key={link.absolutePath} href={link.absolutePath}>
                {link.title}
              </Link>
            ))}
          </div>
        </Container>
      </Footer>
    </div>
  );
}
