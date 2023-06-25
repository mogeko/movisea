import type { Meta, StoryObj } from "@storybook/react";

import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

export default {
  title: "Components/shadcn-ui/Separator",
  component: Separator,
} as Meta;
type Story = StoryObj<typeof Separator>;

export const Default: Story = {};

export const Demo1: Story = {
  render: ({ className, ...props }) => (
    <div>
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
        <p className="text-sm text-muted-foreground">
          An open-source UI component library.
        </p>
      </div>
      <Separator className={cn("my-4", className)} {...props} />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  ),
};
