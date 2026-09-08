import { useEffect, useRef, useState } from "react";
import { Navbar } from "../navbar";
import { Link } from "../link";
import { UpRightArrowIcon } from "./icons";
import { getTranslate } from "./translations";
import type { DecoratorHeaderData, DecoratorLang } from "./decorator-data";

interface LoginNavItemProps {
  loginLinks: DecoratorHeaderData["loginLinks"];
  lang: DecoratorLang;
}

/**
 * Renders nothing, a direct link, or a dropdown listing every destination,
 * depending on how many login links the site has.
 */
export function LoginNavItem({ loginLinks, lang }: LoginNavItemProps) {
  const translate = getTranslate(lang);
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(event: PointerEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  if (loginLinks.length === 0) {
    return null;
  }

  if (loginLinks.length === 1) {
    return (
      <Navbar.LinkItem href={loginLinks[0].absolutePath}>{loginLinks[0].title}</Navbar.LinkItem>
    );
  }

  return (
    <div ref={containerRef} className="hds-decorator__login-nav-item">
      <Navbar.ButtonItem
        aria-expanded={open}
        onClick={() => {
          setOpen((value) => !value);
        }}
      >
        {translate("login")}
      </Navbar.ButtonItem>
      {open ? (
        <aside className="hds-decorator__login-dropdown">
          <h3 className="hds-decorator__login-dropdown-heading">{translate("login.where")}</h3>
          {loginLinks.map((link) => (
            <Link
              key={link.absolutePath}
              variant="no-underline"
              className="hds-decorator__login-dropdown-item"
              href={link.absolutePath}
            >
              <UpRightArrowIcon />
              {link.title}
            </Link>
          ))}
        </aside>
      ) : null}
    </div>
  );
}
