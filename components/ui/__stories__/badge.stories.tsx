import { default as NextLink } from "next/link";
import type { Meta, StoryObj } from "@storybook/react";

import { Badge, badgeVariants } from "@/components/ui/badge";

export default {
  title: "Components/shadcn-ui/Badge",
  component: Badge,
} as Meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: "Badge",
  },
};

export const Secondary: Story = {
  args: {
    children: "Badge",
    variant: "secondary",
  },
};

export const Destructive: Story = {
  args: {
    children: "Badge",
    variant: "destructive",
  },
};

export const Outline: Story = {
  args: {
    children: "Badge",
    variant: "outline",
  },
};

export const Link: Story = {
  render: (args) => (
    <NextLink className={badgeVariants({ variant: args.variant })} href="/">
      {args.children}
    </NextLink>
  ),
  args: {
    children: "Link",
    variant: "outline",
  },
};
