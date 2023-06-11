"use client";

import Image, { type ImageLoader } from "next/image";

export const PosterImage: React.FC<
  Omit<React.ComponentProps<typeof Image>, "loader">
> = ({ width = 300, height = 450, loading = "lazy", alt, ...props }) => {
  return (
    <div className="overflow-hidden rounded-md">
      <Image
        className="h-auto w-auto object-cover aspect-[3/4]"
        loader={posterLoader}
        width={width}
        height={height}
        loading={loading}
        alt={alt} // Eliminate the warning of jsx-a11y/alt-text
        {...props}
      />
    </div>
  );
};

const posterLoader: ImageLoader = ({ src, width }) => {
  const heght = width * 1.5;

  return `https://image.tmdb.org/t/p/w${width}_and_h${heght}_bestv2${src}`;
};
