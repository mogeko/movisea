import type { Meta, StoryObj } from "@storybook/react";

import { SiteHeader } from "@/components/site-header";

export default {
  title: "Components/SiteHeader",
  component: SiteHeader,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
} as Meta;
type Story = StoryObj<typeof SiteHeader>;

export const Default: Story = {};

export const WithSearchButton: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/movie/569094",
      },
    },
  },
};
