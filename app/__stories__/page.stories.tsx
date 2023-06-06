import type { Meta, StoryObj } from "@storybook/react";

import Home from "../page";

export default {
  title: "App/Home",
  component: Home,
} as Meta;
type Story = StoryObj<typeof Home>;

export const Default: Story = {
  render: () => <Home />,
};
