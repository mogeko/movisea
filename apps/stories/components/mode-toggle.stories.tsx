import type { Meta, StoryObj } from "@storybook/react";

import { ModeToggle } from "@/components/mode-toggle";

export default {
  title: "Components/ModeToggle",
  component: ModeToggle,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
} as Meta;
type Story = StoryObj<typeof ModeToggle>;

export const Default: Story = {};
