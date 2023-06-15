"use client";

import { useSyncExternalStore } from "react";

const subscribe = (cb: () => void) => {
  window.addEventListener("languagechange", cb);
  return () => window.removeEventListener("languagechange", cb);
};

const snapshot = () => navigator.language;

const serverSnapshot = () => {
  throw Error("usePreferredLanguage is a client-only hook");
};

export function usePreferredLanguage() {
  return useSyncExternalStore(subscribe, snapshot, serverSnapshot);
}
