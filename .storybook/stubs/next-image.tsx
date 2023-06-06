import * as NextImage from "next/image";

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props: Props) => OriginalNextImage({ ...props, unoptimized: true }),
});

type Props = React.ComponentProps<typeof NextImage.default>;
