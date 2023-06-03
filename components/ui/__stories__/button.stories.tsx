import type { Meta, StoryObj } from "@storybook/react";
import { LuMail, LuLoader2 } from "react-icons/lu";
import { Button } from "@/components/ui/button";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Button",
    variant: "default",
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button variant="default">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <>
      <div className="flex gap-4">
        <Button size="sm">Small</Button>
        <Button size="default">Medium</Button>
        <Button size="lg">Large</Button>
      </div>
      <Button size={null}>Null</Button>
    </>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Button>
      <LuMail className="mr-2 h-4 w-4" /> Login with Email
    </Button>
  ),
};

export const Loading: Story = {
  render: () => (
    <Button disabled>
      <LuLoader2 className="mr-2 h-4 w-4 animate-spin" />
      Please wait...
    </Button>
  ),
};
