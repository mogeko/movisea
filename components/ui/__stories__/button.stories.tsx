import type { Meta, StoryObj } from "@storybook/react";
import { LuMail, LuLoader2, LuArrowUpRight } from "react-icons/lu";
import { Button } from "@/components/ui/button";

export default {
  title: "Components/Button",
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

export const OutsideSite: Story = {
  render: (args) => (
    <Button {...args}>
      RARBG <LuArrowUpRight className="ml-2 h-4 w-4" />
    </Button>
  ),
  args: {
    className: "rounded-full border-4 border-primary",
    variant: "outline",
    size: "sm",
  },
};
