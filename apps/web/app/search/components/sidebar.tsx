"use client";

import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { MdLocalMovies, MdTv } from "react-icons/md";
import { RiFireLine } from "react-icons/ri";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type SidebarProps = React.HTMLAttributes<HTMLDivElement>;

export const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
            Filter by
          </h2>
          <div className="space-y-1">
            <SidebarButton mark="multi">
              <RiFireLine className="mr-2 h-4 w-4" />
              Top Results
            </SidebarButton>
            <SidebarButton mark="movie">
              <MdLocalMovies className="mr-2 h-4 w-4" />
              Movies
            </SidebarButton>
            <SidebarButton mark="tv">
              <MdTv className="mr-2 h-4 w-4" />
              TV Shows
            </SidebarButton>
          </div>
        </div>
      </div>
    </div>
  );
};

const SidebarButton: React.FC<{
  mark: "multi" | "movie" | "tv";
  children?: React.ReactNode;
}> = ({ mark, children }) => {
  const searchParams = useSearchParams();
  const { type } = useParams();

  if (type === mark) {
    return (
      <Button
        className="w-full justify-start pointer-events-none"
        variant="secondary"
        size="sm"
      >
        {children}
      </Button>
    );
  }
  return (
    <Button className="w-full justify-start" variant="ghost" size="sm" asChild>
      <Link href={`/search/${mark}?${searchParams.toString()}`} replace>
        {children}
      </Link>
    </Button>
  );
};
