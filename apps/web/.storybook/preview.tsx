import "@/styles/globals.css";
import "@/.storybook/stubs/next-image";

import * as React from "react";
import { withThemeByClassName } from "@storybook/addon-styling";
import type { Decorator, Parameters } from "@storybook/react";

import { Toaster } from "@/components/toaster";

export const parameters: Parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: { disable: true },
  nextjs: { appDirectory: true },
};

export const decorators: Array<Decorator> = [
  (Story) => (
    <div className="bg-background">
      <Story />
      <Toaster />
    </div>
  ),
  withThemeByClassName({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "light",
  }),
];
