import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default {
  title: "Components/Switch",
  component: Switch,
} as Meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {};

export const Demo1: Story = {
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Switch {...args} id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  ),
};
