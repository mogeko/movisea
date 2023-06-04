import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default {
  title: "Components/Label",
  component: Label,
} as Meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  render: (args) => (
    <div className="w-[500px]">
      <Label {...args} />
      <Input type="email" name={args.htmlFor} className="mt-1" />
    </div>
  ),
  args: {
    children: "Your email address:",
    htmlFor: "email",
  },
};
