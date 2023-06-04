import type { Preview, Parameters } from "@storybook/react";
import { withThemeByClassName } from "@storybook/addon-styling";
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

export const decorators = [
  withThemeByClassName({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "light",
  }),
];

export default preview;
