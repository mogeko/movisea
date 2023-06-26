"use client";

import Image, { type ImageLoader } from "next/image";

import { cn } from "@/lib/utils";

export const PosterImage: React.FC<
  Omit<React.ComponentProps<typeof Image>, "loader">
> = ({ width = 300, loading = "lazy", alt, className, ...props }) => {
  return (
    <Image
      className={cn(
        "h-auto w-auto object-cover aspect-[2/3] rounded-md",
        className
      )}
      loader={posterLoader}
      width={width}
      height={Number(width) * 1.5}
      loading={loading}
      alt={alt} // Eliminate the warning of jsx-a11y/alt-text
      {...props}
    />
  );
};

const posterLoader: ImageLoader = ({ src, width }) => {
  if (width > 1000) {
    return `https://image.tmdb.org/t/p/w1280${src}`;
  } else {
    const height = width * 1.5;
    return `https://image.tmdb.org/t/p/w${width}_and_h${height}_bestv2${src}`;
  }
};
