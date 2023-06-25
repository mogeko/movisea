import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../**/*.stories.@(js|jsx|ts|tsx|mdx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-styling",
  ],
  staticDirs: ["../../web/public"],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: true,
  },
};

export default config;
