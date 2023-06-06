import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default {
  title: "Components/shadcn-ui/Input",
  component: Input,
  argTypes: {
    type: {
      options: ["text", "search", "email", "password", "number", "file"],
      control: { type: "select" },
    },
    disabled: { control: { type: "boolean" } },
  },
} as Meta;
type Story = StoryObj<typeof Input>;

export const Search: Story = {
  args: {
    placeholder: "Search...",
    type: "search",
  },
};

export const Disable: Story = {
  args: {
    disabled: true,
    ...Search.args,
  },
};

export const WithButton: Story = {
  render: (args) => (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input {...args} />
      <Button type="submit">Subscribe</Button>
    </div>
  ),
  args: {
    placeholder: "Email address",
    type: "email",
  },
};

export const WithLabel: Story = {
  render: ({ id, ...props }) => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={id}>Email</Label>
      <Input id={id} {...props} />
      <p className="text-sm text-muted-foreground">Enter your email address.</p>
    </div>
  ),
  args: {
    placeholder: "Email address",
    type: "email",
  },
};

export const File: Story = {
  render: ({ id, ...props }) => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={id}>Picture</Label>
      <Input id={id} {...props} />
    </div>
  ),
  args: {
    id: "picture",
    type: "file",
  },
};
