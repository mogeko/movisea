"use client";

import { useState, type Dispatch } from "react";
import { LuCornerDownRight, LuSearch, LuTrash2 } from "react-icons/lu";

import { useLocalStorage } from "@/lib/use-localstorage";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

export const Search: React.FC<{ className: string }> = ({ className }) => {
  const [open, setOpen] = useState(false);
  const [searchHistory, setSearchHistory] = useSearchHistory();
  const [search, setSearch] = useState("");
  const handleValueChange = (value: string) => setSearch(value);
  const handleSubmit = (value: string) => {
    if (value !== "") {
      setSearchHistory([value, ...searchHistory]);
      setSearch("");
      console.log(value); // TODO: Implement search
    }
  };

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
          onValueChange={handleValueChange}
        />
        <CommandList>
          {search !== "" && (
            <CommandItem value={search} onSelect={handleSubmit}>
              <LuCornerDownRight className="mr-2 h-4 w-4" />
              Search &rdquo;{search}&rdquo; on TMDb...
            </CommandItem>
          )}
          <CommandGroup title="Search History">
            {searchHistory.map((keyword, i) => (
              <CommandItem
                key={`${keyword}-${i}}`}
                value={keyword}
                onSelect={handleSubmit}
              >
                {keyword}
              </CommandItem>
            ))}
            <CommandItem onSelect={() => setSearchHistory([])}>
              <LuTrash2 className="mr-2 h-4 w-4" />
              Clear search history
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
