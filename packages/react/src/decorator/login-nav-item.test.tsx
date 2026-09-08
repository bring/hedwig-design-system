import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LoginNavItem } from "./login-nav-item";
import type { DecoratorLinkItem } from "./decorator-data";

const oneLink: DecoratorLinkItem[] = [
  { title: "Min side", relativePath: "/", absolutePath: "https://id.posten.no/" },
];

const fourLinks: DecoratorLinkItem[] = [
  { title: "Mybring", relativePath: "/", absolutePath: "https://www.mybring.com" },
  { title: "Min Post", relativePath: "/", absolutePath: "https://eordre.posten.no/minpost" },
  {
    title: "Frimerkebutikken",
    relativePath: "/",
    absolutePath: "https://eordre.posten.no/frimerker",
  },
  { title: "Digipost", relativePath: "/", absolutePath: "https://www.digipost.no/innlogging/" },
];

describe("LoginNavItem", () => {
  it("renders nothing when there are no login links", () => {
    const { container } = render(<LoginNavItem loginLinks={[]} lang="no" />);
    expect(container).toBeEmptyDOMElement();
  });

  it("renders a direct link when there is exactly one", () => {
    render(<LoginNavItem loginLinks={oneLink} lang="no" />);
    const link = screen.getByRole("link", { name: "Min side" });
    expect(link).toHaveAttribute("href", "https://id.posten.no/");
  });

  it("renders a dropdown trigger, closed by default, when there are multiple", () => {
    render(<LoginNavItem loginLinks={fourLinks} lang="no" />);
    expect(screen.getByRole("button", { name: "Logg inn" })).toHaveAttribute(
      "aria-expanded",
      "false",
    );
    expect(screen.queryByText("Mybring")).not.toBeInTheDocument();
  });

  it("opens the dropdown and lists every destination on click", async () => {
    const user = userEvent.setup();
    render(<LoginNavItem loginLinks={fourLinks} lang="no" />);

    await user.click(screen.getByRole("button", { name: "Logg inn" }));

    for (const link of fourLinks) {
      expect(screen.getByRole("link", { name: link.title })).toHaveAttribute(
        "href",
        link.absolutePath,
      );
    }
  });

  it("closes the dropdown on Escape", async () => {
    const user = userEvent.setup();
    render(<LoginNavItem loginLinks={fourLinks} lang="no" />);

    await user.click(screen.getByRole("button", { name: "Logg inn" }));
    expect(screen.getByText("Mybring")).toBeInTheDocument();

    await user.keyboard("{Escape}");
    expect(screen.queryByText("Mybring")).not.toBeInTheDocument();
  });

  it("closes the dropdown on an outside click", async () => {
    const user = userEvent.setup();
    render(
      <div>
        <LoginNavItem loginLinks={fourLinks} lang="no" />
        <button type="button">outside</button>
      </div>,
    );

    await user.click(screen.getByRole("button", { name: "Logg inn" }));
    expect(screen.getByText("Mybring")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "outside" }));
    expect(screen.queryByText("Mybring")).not.toBeInTheDocument();
  });
});
