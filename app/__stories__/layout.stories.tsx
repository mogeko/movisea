import type { Meta, StoryObj } from "@storybook/react";

import { RootLayout } from "@/app/layout";

export default {
  title: "App/Layout",
  component: RootLayout,
} as Meta;
type Story = StoryObj<typeof RootLayout>;

export const Default: Story = {
  args: {
    children: (
      <div className="flex min-h-screen flex-col items-center justify-between p-24 bg-blue-400 dark:bg-blue-600">
        page area
      </div>
    ),
  },
};
