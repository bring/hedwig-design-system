import { Fragment, useState } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { Navbar } from "../navbar";
import { Footer } from "../footer";
import { Accordion } from "../accordion";
import { Container } from "../layout";
import { Link } from "../link";
import { LinkList } from "../list/link-list";
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

/**
 * Bare `<li>` items — wrap in `LinkList` yourself, or pass straight to
 * `Footer.LinkSection`, which wraps its children in a `LinkList` internally.
 */
function LinkItems({ items }: { items: DecoratorLinkItem[] }) {
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
   * Rendered in place of the default header/footer while data is loading.
   * Defaults to rendering `children` alone (no header/footer flash of empty chrome).
   */
  fallback?: React.ReactNode;
}

/**
 * 🚨 PROTOTYPE — exploration only, not production-ready 🚨
 *
 * Component-based replacement for kp-decorator's HTML-injection flow. Wraps
 * `children` with a default header and footer built from HDS's `Navbar` and
 * `Footer`, themed for `brand`, with content fetched live from Enonic.
 */
export function Decorator({ children, fallback, ...identifier }: DecoratorProps) {
  const result = useDecoratorData(identifier);
  const isBring = identifier.brand === "bring";
  const [searchOpen, setSearchOpen] = useState(false);

  if (result.status !== "success") {
    return <div className={clsx(isBring && "hds-theme-bring")}>{fallback ?? children}</div>;
  }

  const { header, footer } = result.data;
  const frontPageUrl = resolveFrontPageUrl(identifier);
  const lang = identifier.lang ?? "no";
  const translate = getTranslate(lang);

  return (
    <div className={clsx(isBring && "hds-theme-bring")}>
      <Navbar>
        <Navbar.Logo asChild>
          <a href={frontPageUrl} title={translate("to-the-front-page")} />
        </Navbar.Logo>
        <Navbar.Navigation>
          {searchOpen ? (
            <>
              <Search identifier={identifier} header={header} />
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
            <>
              <Navbar.ButtonItem
                title={header.searchAriaLabel}
                onClick={() => {
                  setSearchOpen(true);
                }}
              >
                <Navbar.ItemIcon>
                  <SearchIcon />
                </Navbar.ItemIcon>
              </Navbar.ButtonItem>
              <LoginNavItem loginLinks={header.loginLinks} lang={lang} />
              <Navbar.ExpandableMenu>
                <Navbar.ExpandableMenuTrigger
                  whenClosedText={translate("menu")}
                  whenOpenText={translate("close")}
                />
                <Navbar.ExpandableMenuContent>
                  <Container>
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
            </>
          )}
        </Navbar.Navigation>
      </Navbar>

      {children}

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
