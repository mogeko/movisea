import type { Preview, Parameters } from "@storybook/react";
import { withThemeByClassName } from "@storybook/addon-styling";
import { Toaster } from "../components/toaster";
import * as NextImage from "next/image";
import React from "react";

import "@/styles/globals.css";

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
  (Story) => (
    <main className="bg-background">
      <Story />
      <Toaster />
    </main>
  ),
];

export default preview;
