"use client";

import { useCallback, useEffect, useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import {
  LuCornerDownRight,
  LuLaptop,
  LuMoon,
  LuSearch,
  LuSunMedium,
  LuTrash2,
} from "react-icons/lu";
import useSWR from "swr";

import { useDebounce } from "@/lib/use-debounce";
import { useLocalStorage } from "@/lib/use-localstorage";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import type { SearchResults } from "@/app/api/search/route";

export const SearchInHeader: React.FC = () => {
  const pathname = usePathname();

  if (pathname === "/") return <div />;
  return <Search />;
};

export const Search: React.FC<{ className?: string }> = ({ className }) => {
  const [open, setOpen] = useState(false);
  const [searchHistory, setSearchHistory] = useSearchHistory();
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSubmit = useCallback(
    (value: string) => {
      if (value !== "") {
        setSearchHistory((history) => {
          return !history.includes(value) ? [value, ...history] : history;
        });
        setSearch(""), setOpen(false);

        router.push(`/search/multi?q=${value}`);
      }
    },
    [setSearchHistory, setSearch, setOpen, router]
  );

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && e.metaKey) {
        setOpen((open) => !open);
      }
    };

    window.addEventListener("keydown", down);
    return () => window.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <Button
        variant="outline"
        className={cn("justify-between gap-4 w-full", className)}
        onClick={() => setOpen((open) => !open)}
      >
        <div className="inline-flex items-center justify-between flex-row">
          <LuSearch className="mr-2 h-4 w-4" />
          <span>Search...</span>
        </div>
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">&#x2318;</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Type a command or search..."
          onValueChange={setSearch}
        />
        <CommandList>
          {search !== "" && (
            <CommandItem value={search} onSelect={handleSubmit}>
              <LuCornerDownRight className="mr-2 h-4 w-4" />
              <span>Search &rdquo;{search}&rdquo; on TMDb...</span>
            </CommandItem>
          )}
          <CommandGroup heading="Search History">
            {searchHistory.map((keyword, i) => (
              <CommandItem
                key={`${keyword}-${i}}`}
                value={keyword}
                onSelect={handleSubmit}
              >
                <span>{keyword}</span>
              </CommandItem>
            ))}
            <CommandItem onSelect={() => setSearchHistory([])}>
              <LuTrash2 className="mr-2 h-4 w-4" />
              <span>Clear search history</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <ThemeCommandGroup />
        </CommandList>
      </CommandDialog>
    </>
  );
};

const ThemeCommandGroup: React.FC = () => {
  const { setTheme } = useTheme();

  return (
    <CommandGroup heading="Theme">
      <CommandItem onSelect={() => setTheme("light")}>
        <LuSunMedium className="mr-2 h-4 w-4" />
        <span>Light</span>
      </CommandItem>
      <CommandItem onSelect={() => setTheme("dark")}>
        <LuMoon className="mr-2 h-4 w-4" />
        <span>Dark</span>
      </CommandItem>
      <CommandItem onSelect={() => setTheme("system")}>
        <LuLaptop className="mr-2 h-4 w-4" />
        <span>System</span>
      </CommandItem>
    </CommandGroup>
  );
};

function useSearchHistory(sKey = "searchHistory", init: string[] = []) {
  const [item, setItem] = useLocalStorage(sKey, JSON.stringify(init));
  const setSearchHistory: Dispatch<SetStateAction<string[]>> = (history) => {
    if (typeof history === "function") {
      setItem(JSON.stringify(history(searchHistory)));
    } else {
      setItem(JSON.stringify(history));
    }
  };
  const searchHistory = JSON.parse(item) as string[];

  return [searchHistory, setSearchHistory] as const;
}

function useSearch(search: string, lang = "en-US") {
  const debounce = useDebounce(search, 500);

  return useSWR<SearchResults>(
    debounce ? `/api/search?query=${debounce}&language=${lang}` : null,
    (url) => fetch(url).then((res) => res.json())
  );
}
