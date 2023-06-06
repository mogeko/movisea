import type { Meta, StoryObj } from "@storybook/react";

import { OutsideButton } from "@/components/outside-btn";

export default {
  title: "Components/OutsideButton",
  component: OutsideButton,
} as Meta;
type Story = StoryObj<typeof OutsideButton>;

export const Default: Story = {
  args: {
    children: "RARBG",
    href: "https://rarbg.to",
  },
};
