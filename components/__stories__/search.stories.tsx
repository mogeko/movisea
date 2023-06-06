import type { Meta, StoryObj } from "@storybook/react";
import { useForm } from "react-hook-form";
import { Search } from "@/components/search";
import { Form } from "@/components/ui/form";

export default {
  title: "Components/Search",
  component: Search,
  decorators: [
    (Story) => (
      <Form {...useForm()}>
        <Story />
      </Form>
    ),
  ],
} as Meta;
type Story = StoryObj<typeof Search>;

export const Default: Story = {};
