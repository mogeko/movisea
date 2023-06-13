"use client";

import { useCallback, useState, type Dispatch } from "react";
import { useTheme } from "next-themes";
import {
  LuCornerDownRight,
  LuLaptop,
  LuMoon,
  LuSearch,
  LuSunMedium,
  LuTrash2,
} from "react-icons/lu";

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

export const Search: React.FC<{ className: string }> = ({ className }) => {
  const [open, setOpen] = useState(false);
  const [searchHistory, setSearchHistory] = useSearchHistory();
  const [search, setSearch] = useState("");
  const handleSubmit = useCallback(
    (value: string) => {
      if (value !== "") {
        if (!searchHistory.includes(value)) {
          setSearchHistory([value, ...searchHistory]);
        }
        setSearch("");
        console.log(value); // TODO: Implement search
      }
    },
    [searchHistory, setSearchHistory, setSearch]
  );
  const { setTheme } = useTheme();

  return (
    <>
      <Button
        variant="outline"
        className={cn("justify-start", className)}
        onClick={() => setOpen(!open)}
      >
        <LuSearch className="mr-2 h-4 w-4" />
        Search...
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
        </CommandList>
      </CommandDialog>
    </>
  );
};

const useSearchHistory = (sKey = "searchHistory", init: string[] = []) => {
  const [item, setItem] = useLocalStorage(sKey, JSON.stringify(init));
  const setSearchHistory: Dispatch<string[]> = (history) => {
    setItem(JSON.stringify(history));
  };
  const searchHistory = JSON.parse(item) as string[];

  return [searchHistory, setSearchHistory] as const;
};
