import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default {
  title: "Components/Card",
  component: Card,
} as Meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: (_args) => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  ),
};
