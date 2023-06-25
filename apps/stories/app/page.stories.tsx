import type { Meta, StoryObj } from "@storybook/react";

import Home from "@/app/page";

export default {
  title: "App/Home",
  component: Home,
  decorators: [
    (Story: React.FC) => (
      <div className="relative flex min-h-screen flex-col">
        <div className="flex-1">
          <Story />
        </div>
      </div>
    ),
  ],
} as Meta;
type Story = StoryObj<typeof Home>;

export const Default: Story = {
  render: () => <Home />,
};
