import type { Meta, StoryObj } from "@storybook/react";

import { SiteLogo } from "@/components/site-logo";

export default {
  title: "Components/SiteLogo",
  component: SiteLogo,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
} as Meta;
type Story = StoryObj<typeof SiteLogo>;

export const Default: Story = {};
