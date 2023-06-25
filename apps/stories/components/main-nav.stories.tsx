import type { Meta, StoryObj } from "@storybook/react";

import { MainNav } from "@/components/main-nav";

export default {
  title: "Components/MainNav",
  component: MainNav,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
} as Meta;
type Story = StoryObj<typeof MainNav>;

export const Default: Story = {};
