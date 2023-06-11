import type { Meta, StoryObj } from "@storybook/react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default {
  title: "Components/shadcn-ui/Avatar",
  component: Avatar,
} as Meta;
type Story = StoryObj<typeof Avatar>;

export const Mogeko: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="https://github.com/mogeko.png" />
      <AvatarFallback>Mo</AvatarFallback>
    </Avatar>
  ),
};
