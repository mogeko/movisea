"use client";

import { useCallback, useEffect, useState, type Dispatch } from "react";

export function useLocalStorage(storageKey: string, init = "") {
  const [value, setValue] = useState(
    () => window.localStorage.getItem(storageKey) || init
  );

  const setItem: Dispatch<string> = (newValue) => {
    setValue(newValue);

    if (newValue === init) {
      window.localStorage.removeItem(storageKey);
      console.log("removeItem");
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
