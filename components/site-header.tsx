import { MainNav } from "@/components/main-nav";

import { ModeToggle } from "./mode-toggle";

export const SiteHeader: React.FC<{
  searchBar?: React.ReactNode;
}> = ({ searchBar }) => {
  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-14 items-center">
        <MainNav />
        <div className="flex flex-1 items-center justify-between space-x-2 sm:space-x-4 md:justify-end">
          {searchBar ?? <div />}
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};
