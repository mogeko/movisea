import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    type: {
      options: [
        "text",
        "email",
        "password",
        "button",
        "checkbox",
        "radio",
        "color",
        "date",
        "datetime-local",
        "month",
        "week",
        "time",
        "file",
        "image",
        "number",
        "range",
        "hidden",
      ],
      control: { type: "select" },
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
} as Meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Email",
    type: "email",
  },
};

export const WithButton: Story = {
  render: (args) => (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input {...args} />
      <Button type="submit">Subscribe</Button>
    </div>
  ),
  args: Default.args,
};
