import type { Meta, StoryObj } from "@storybook/react";

import { Search } from "@/components/search";
import RootLayout from "@/app/layout";

export default {
  title: "App/Layout",
  component: RootLayout,
  args: {
    children: (
      <div className="flex min-h-screen flex-col items-center justify-between p-24 bg-blue-200 dark:bg-blue-600">
        page area
      </div>
    ),
  },
} as Meta;
type Story = StoryObj<typeof RootLayout>;

export const Default: Story = {};
