"use client";

import { useCallback, useEffect, useState, type Dispatch } from "react";

export function useLocalStorage(storageKey: string, init = "") {
  const [value, setValue] = useState(init);

  // In order to ensure that `window.*` code runs only in the client
  // See: https://github.com/vercel/next.js/discussions/19911
  useEffect(() => {
    setValue(window.localStorage.getItem(storageKey) || init);
  }, [storageKey, init]);

  const setItem: Dispatch<string> = (newValue) => {
    setValue(newValue);

    if (newValue === init) {
      window.localStorage.removeItem(storageKey);
    } else {
      window.localStorage.setItem(storageKey, newValue);
    }
  };

  const handleStorage = useCallback(
    (e: StorageEvent) => {
      if (e.key !== storageKey) return;
      if (e.newValue !== value) {
        setValue(e.newValue || init);
      }
    },
    [value, init, storageKey]
  );

  useEffect(() => {
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, [handleStorage]);

  return [value, setItem] as const;
}
