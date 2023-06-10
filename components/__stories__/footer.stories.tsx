import type { Meta, StoryObj } from "@storybook/react";

import { SiteFooter } from "@/components/site-footer";

export default {
  title: "Components/Footer",
  component: SiteFooter,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
} as Meta;
type Story = StoryObj<typeof SiteFooter>;

export const Default: Story = {};
