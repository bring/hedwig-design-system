import * as React from "react";
import { useCallback, useEffect, useState } from "react";

/**
 * Merges an array of refs into a single memoized callback ref or `null`.
 * @see https://floating-ui.com/docs/useMergeRefs
 */
export function useMergeRefs<Instance>(
  refs: (React.Ref<Instance> | undefined)[],
): React.RefCallback<Instance> | null {
  return React.useMemo(() => {
    if (refs.every((ref) => ref === null)) {
      return null;
    }

    return (value) => {
      refs.forEach((ref) => {
        if (typeof ref === "function") {
          ref(value);
        } else if (ref !== null) {
          (ref as React.MutableRefObject<Instance | null>).current = value;
        }
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- It's ok
  }, refs);
}

export function useResize<Instance extends HTMLElement>(
  ref: React.RefObject<Instance> | undefined | null,
): { width: number; height: number } {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const handleResize = useCallback(() => {
    if (ref?.current !== null) {
      setWidth(ref?.current?.offsetWidth ?? 0);
      setHeight(ref?.current?.offsetHeight ?? 0);
    }
  }, [ref]);
  useEffect(() => {
    window.addEventListener("load", handleResize);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("load", handleResize);
      window.removeEventListener("resize", handleResize);
    };
  }, [ref, handleResize]);
  useEffect(() => {
    handleResize();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- It's ok
  }, []);
  return { width, height };
}

function subscribe() {
  // eslint-disable-next-line @typescript-eslint/no-empty-function -- It's ok
  return () => {};
}

export function useHydrated() {
  return React.useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
}

/**
 * Trap focus inside an element using the `inert` attribute.
 *
 * Adds `inert` to all siblings of the given element, and all their ancestors up to the body.
 * Returns a cleanup function which removes the `inert` property from the elements, effectively giving focus back to rest of the document.
 *
 * NOTE: Does not support portals, i.e. elements outside the DOM hierarchy of the given element.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/inert
 * @see https://web.dev/articles/inert
 */
export function focusTrap(element: HTMLElement) {
  // eslint-disable-next-line @typescript-eslint/no-empty-function -- NOP on focus trapping the body element
  if (element === document.body) return () => {};

  let inertElements: HTMLElement[] = [];
  for (let el: HTMLElement | null = element; el; el = el.parentElement) {
    if (el === document.body) break;

    for (const sibling of el.parentElement?.children ?? []) {
      if (sibling === el) continue;
      if (!(sibling instanceof HTMLElement)) continue;
      if (sibling.hasAttribute("inert")) continue;

      sibling.setAttribute("inert", "true");
      inertElements.push(sibling);
    }
  }

  return () => {
    releaseFocusTrap(inertElements);
    inertElements = [];
  };
}

/**
 * Unset the `inert` attribute on all elements given
 */
export function releaseFocusTrap(inertElements: Iterable<HTMLElement>) {
  for (const el of inertElements) {
    el.removeAttribute("inert");
  }
}
