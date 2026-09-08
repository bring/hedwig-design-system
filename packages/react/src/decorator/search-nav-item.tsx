import { Navbar } from "../navbar";
import { Search } from "./search";
import { CloseIcon, SearchIcon } from "./icons";
import { getTranslate } from "./translations";
import type { DecoratorHeaderData, DecoratorLang, DecoratorSiteIdentifier } from "./decorator-data";

interface SearchNavItemProps {
  identifier: DecoratorSiteIdentifier;
  header: DecoratorHeaderData;
  lang: DecoratorLang;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

/**
 * Renders nothing when the site's Enonic service doesn't return search fields
 * at all (confirmed: bring doesn't, posten does) — otherwise toggles between
 * the search icon button and the open search field + close button.
 */
export function SearchNavItem({
  identifier,
  header,
  lang,
  open,
  onOpenChange,
}: SearchNavItemProps) {
  const { searchUrl, searchButtonLabel, searchAriaLabel } = header;
  const translate = getTranslate(lang);

  if (!searchUrl || !searchButtonLabel || !searchAriaLabel) {
    return null;
  }

  if (open) {
    return (
      <>
        <Search
          identifier={identifier}
          searchUrl={searchUrl}
          searchButtonLabel={searchButtonLabel}
          searchAriaLabel={searchAriaLabel}
          lang={lang}
        />
        <Navbar.ButtonItem
          title={translate("close")}
          onClick={() => {
            onOpenChange(false);
          }}
        >
          <Navbar.ItemIcon>
            <CloseIcon />
          </Navbar.ItemIcon>
        </Navbar.ButtonItem>
      </>
    );
  }

  return (
    <Navbar.ButtonItem
      title={searchAriaLabel}
      onClick={() => {
        onOpenChange(true);
      }}
    >
      <span className="hds-navbar__item-responsive-text">{searchAriaLabel}</span>
      <Navbar.ItemIcon>
        <SearchIcon />
      </Navbar.ItemIcon>
    </Navbar.ButtonItem>
  );
}
