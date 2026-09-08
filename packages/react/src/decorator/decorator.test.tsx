import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Decorator } from "./decorator";
import {
  bringHeaderFooterData,
  postenHeaderFooterData,
  searchSuggestionsFixture,
} from "./test-fixtures";

function jsonResponse(body: unknown, init?: ResponseInit) {
  return Promise.resolve(new Response(JSON.stringify(body), init));
}

function mockFetchFor(
  headerFooterData: unknown,
  searchSuggestions: unknown = searchSuggestionsFixture,
) {
  return vi.fn((input: string | URL) => {
    const url = input.toString();
    if (url.includes("/search?")) {
      return jsonResponse(searchSuggestions);
    }
    return jsonResponse(headerFooterData);
  });
}

describe("Decorator", () => {
  beforeEach(() => {
    vi.stubGlobal("fetch", mockFetchFor(postenHeaderFooterData));
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("renders a loading placeholder before data arrives, then the real header/footer", async () => {
    render(
      <Decorator brand="posten">
        <div>Page content</div>
      </Decorator>,
    );

    expect(screen.getByText("Page content")).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: "Min side" })).not.toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByRole("link", { name: "Min side" })).toBeInTheDocument();
    });

    expect(screen.getByText("En del av Posten Bring-konsernet")).toBeInTheDocument();
  });

  it('applies the bring theme class for brand="bring"', async () => {
    vi.stubGlobal("fetch", mockFetchFor(bringHeaderFooterData));

    const { container } = render(
      <Decorator brand="bring">
        <div>Page content</div>
      </Decorator>,
    );

    await waitFor(() => {
      expect(screen.getByText("Page content")).toBeInTheDocument();
    });

    expect(container.firstChild).toHaveClass("hds-theme-bring");
  });

  it("sets data-color so brand-scoped tokens (surface/border colors) resolve", async () => {
    const { container } = render(
      <Decorator brand="posten">
        <div>Page content</div>
      </Decorator>,
    );

    // Present even before data arrives — brand-scoped colors have no root
    // fallback in HDS, so this must be set from the very first render.
    expect(container.firstChild).toHaveAttribute("data-color", "posten");

    await waitFor(() => {
      expect(screen.getByText("Page content")).toBeInTheDocument();
    });

    expect(container.firstChild).toHaveAttribute("data-color", "posten");
  });

  it("renders children without decorator chrome and reports the error when the fetch fails", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(() => jsonResponse({}, { status: 500 })),
    );
    const consoleError = vi.spyOn(console, "error").mockImplementation(() => undefined);
    const onError = vi.fn();

    render(
      <Decorator brand="posten" onError={onError}>
        <div>Page content</div>
      </Decorator>,
    );

    await waitFor(() => {
      expect(onError).toHaveBeenCalledTimes(1);
    });

    expect(onError.mock.calls[0][0]).toBeInstanceOf(Error);
    expect(consoleError).toHaveBeenCalled();
    expect(screen.getByText("Page content")).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: "Min side" })).not.toBeInTheDocument();
    expect(screen.queryByText("En del av Posten Bring-konsernet")).not.toBeInTheDocument();

    consoleError.mockRestore();
  });

  it("toggles into search mode and shows suggestions for a typed query", async () => {
    const user = userEvent.setup();
    render(
      <Decorator brand="posten">
        <div>Page content</div>
      </Decorator>,
    );

    await waitFor(() => {
      expect(screen.getByRole("link", { name: "Min side" })).toBeInTheDocument();
    });

    await user.click(screen.getByRole("button", { name: "Søk" }));

    const searchInput = screen.getByRole("searchbox");
    await user.type(searchInput, "sporing");

    await waitFor(() => {
      expect(screen.getByRole("link", { name: "Hjelp til Posten sporing" })).toBeInTheDocument();
    });
  });

  it("keeps login and menu visible while search is open", async () => {
    const user = userEvent.setup();
    render(
      <Decorator brand="posten">
        <div>Page content</div>
      </Decorator>,
    );

    await waitFor(() => {
      expect(screen.getByRole("link", { name: "Min side" })).toBeInTheDocument();
    });

    await user.click(screen.getByRole("button", { name: "Søk" }));

    expect(screen.getByRole("link", { name: "Min side" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Meny" })).toBeInTheDocument();
  });

  it("renders the quick-access icon section links inside the expandable menu", async () => {
    render(
      <Decorator brand="posten">
        <div>Page content</div>
      </Decorator>,
    );

    await waitFor(() => {
      expect(screen.getByRole("link", { name: "Kundeservice" })).toBeInTheDocument();
    });

    expect(screen.getByRole("link", { name: "Kundeservice" })).toHaveAttribute(
      "href",
      "https://www.posten.no/kundeservice",
    );
    expect(screen.getByRole("link", { name: "English" })).toBeInTheDocument();
  });

  it("shows the main header sections inside the expandable menu", async () => {
    render(
      <Decorator brand="posten">
        <div>Page content</div>
      </Decorator>,
    );

    await waitFor(() => {
      expect(screen.getByRole("link", { name: "Min side" })).toBeInTheDocument();
    });

    const links = screen.getAllByRole("link", { name: "Sende i Norge" });
    expect(links.length).toBeGreaterThan(0);
  });
});
