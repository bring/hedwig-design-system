import { useSyncExternalStore } from "react";

function subscribe() {
  return () => {};
}

function useHydrated() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
}

export function useClientOnly<T>(clientFunc: () => T, serverFunc: () => T) {
  return useHydrated() ? clientFunc() : serverFunc();
}
