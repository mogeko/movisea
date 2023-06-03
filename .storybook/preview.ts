import type { Preview, Parameters } from "@storybook/react";
import * as NextImage from "next/image";
import "../styles/globals.css";

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => OriginalNextImage({ ...props, unoptimized: true }),
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      hideNoControlsWarning: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const parameters: Parameters = {
  nextjs: {
    appDirectory: true,
  },
};

export default preview;
