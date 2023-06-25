import type { Meta, StoryObj } from "@storybook/react";
import { LuLoader2, LuMail } from "react-icons/lu";

import { Button } from "@/components/ui/button";

export default {
  title: "Components/shadcn-ui/Button",
  component: Button,
} as Meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: "secondary",
  },
};

export const Destructive: Story = {
  args: {
    children: "Destructive",
    variant: "destructive",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline",
    variant: "outline",
  },
};

export const Ghost: Story = {
  args: {
    children: "Ghost",
    variant: "ghost",
  },
};

export const Link: Story = {
  args: {
    children: "Link",
    variant: "link",
  },
};

export const WithIcon: Story = {
  render: (args) => (
    <Button {...args}>
      <LuMail className="mr-2 h-4 w-4" /> Login with Email
    </Button>
  ),
};

export const Loading: Story = {
  render: (args) => (
    <Button {...args}>
      <LuLoader2 className="mr-2 h-4 w-4 animate-spin" />
      Please wait...
    </Button>
  ),
  args: {
    disabled: true,
  },
};
