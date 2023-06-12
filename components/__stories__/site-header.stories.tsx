import type { Meta, StoryObj } from "@storybook/react";

import { Search } from "@/components/search";
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

export const WithSearchBar: Story = {
  args: {
    searchBar: <Search className="w-full md:max-w-[250px]" />,
  },
};
