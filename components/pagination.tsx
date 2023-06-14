"use client";

import { useCallback, useMemo } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { cva } from "class-variance-authority";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

import { cn, range } from "@/lib/utils";

const paginationButtonVariants = cva(
  "inline-flex items-center justify-center rounded-full h-8 w-8 text-sm font-medium transition-colors ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default: "hover:bg-accent hover:text-accent-foreground",
        marked:
          "bg-primary text-primary-foreground hover:bg-primary/90 pointer-events-none",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export const Pagination: React.FC<{
  totalPages: number;
}> = ({ totalPages }) => {
  const currentPage = Number(useSearchParams().get("page") ?? 1);
  const randerPagination = useCallback(
    (start: number, end: number) => {
      return range(start, end + 1).map((page) => (
        <Link
          className={paginationButtonVariants({
            variant: page === currentPage ? "marked" : "default",
          })}
          href="#"
          key={`pagination-${page}`}
        >
          {page}
        </Link>
      ));
    },
    [currentPage]
  );
  const pagination = useMemo(() => {
    if (totalPages <= 9) return randerPagination(1, totalPages);
    if (currentPage < 4 || currentPage > totalPages - 4) {
      return (
        <>
          {randerPagination(1, 4)}
          <Ellipsis />
          {randerPagination(totalPages - 3, totalPages)}
        </>
      );
    }
    return (
      <>
        {randerPagination(1, 2)}
        <Ellipsis />
        {randerPagination(currentPage - 1, currentPage + 1)}
        <Ellipsis />
        {randerPagination(totalPages - 1, totalPages)}
      </>
    );
  }, [currentPage, totalPages, randerPagination]);

  return (
    <nav className="flex flex-row justify-center flex-wrap items-center md:gap-1">
      <Link
        className={cn(
          currentPage === 1 ? "opacity-50 pointer-events-none" : "",
          paginationButtonVariants()
        )}
        href="#"
      >
        <LuChevronLeft className="h-4 w-4" />
      </Link>
      {pagination}
      <Link
        className={cn(
          currentPage === totalPages ? "opacity-50 pointer-events-none" : "",
          paginationButtonVariants()
        )}
        href="#"
      >
        <LuChevronRight className="h-4 w-4" />
      </Link>
    </nav>
  );
};

const Ellipsis: React.FC = () => (
  <div className={cn("pointer-events-none", paginationButtonVariants())}>
    ...
  </div>
);
