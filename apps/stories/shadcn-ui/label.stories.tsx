import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default {
  title: "Shadcn-ui/Label",
  component: Label,
} as Meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  render: ({ htmlFor, ...props }) => (
    <div className="w-[500px]">
      <Label htmlFor={htmlFor} {...props} />
      <Input type="email" name={htmlFor} className="mt-1" />
    </div>
  ),
  args: {
    children: "Your email address:",
    htmlFor: "email",
  },
};
