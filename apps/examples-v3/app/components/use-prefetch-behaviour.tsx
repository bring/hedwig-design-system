import { composeEventHandlers } from "@remix-run/react/dist/components";
import {
  FocusEventHandler,
  MouseEventHandler,
  TouchEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";

export type PrefetchBehavior = "intent" | "render" | "none" | "viewport";

interface PrefetchHandlers {
  onFocus?: FocusEventHandler;
  onBlur?: FocusEventHandler;
  onMouseEnter?: MouseEventHandler;
  onMouseLeave?: MouseEventHandler;
  onTouchStart?: TouchEventHandler;
}

/**
 * Taken from Remix
 * https://github.com/remix-run/remix/blob/525c00889a614ffaf34a7af6e357a39bca89d36e/packages/remix-react/components.tsx#L120
 */
export function usePrefetchBehavior<T extends HTMLElement>(
  prefetch: PrefetchBehavior,
  theirElementProps: PrefetchHandlers,
): [boolean, React.RefObject<T>, Required<PrefetchHandlers>] {
  const [maybePrefetch, setMaybePrefetch] = useState(false);
  const [shouldPrefetch, setShouldPrefetch] = useState(false);
  const { onFocus, onBlur, onMouseEnter, onMouseLeave, onTouchStart } = theirElementProps;

  const ref = useRef<T>(null);

  useEffect(() => {
    if (prefetch === "render") {
      setShouldPrefetch(true);
    }

    if (prefetch === "viewport") {
      const callback: IntersectionObserverCallback = (entries) => {
        entries.forEach((entry) => {
          setShouldPrefetch(entry.isIntersecting);
        });
      };
      const observer = new IntersectionObserver(callback, { threshold: 0.5 });
      if (ref.current) observer.observe(ref.current);

      return () => {
        observer.disconnect();
      };
    }
  }, [prefetch]);

  const setIntent = () => {
    if (prefetch === "intent") {
      setMaybePrefetch(true);
    }
  };

  const cancelIntent = () => {
    if (prefetch === "intent") {
      setMaybePrefetch(false);
      setShouldPrefetch(false);
    }
  };

  useEffect(() => {
    if (maybePrefetch) {
      const id = setTimeout(() => {
        setShouldPrefetch(true);
      }, 100);
      return () => {
        clearTimeout(id);
      };
    }
  }, [maybePrefetch]);

  return [
    shouldPrefetch,
    ref,
    {
      onFocus: composeEventHandlers(onFocus, setIntent),
      onBlur: composeEventHandlers(onBlur, cancelIntent),
      onMouseEnter: composeEventHandlers(onMouseEnter, setIntent),
      onMouseLeave: composeEventHandlers(onMouseLeave, cancelIntent),
      onTouchStart: composeEventHandlers(onTouchStart, setIntent),
    },
  ];
}
