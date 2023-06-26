import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta, StoryObj } from "@storybook/react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { toast } from "@/lib/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default {
  title: "Shadcn-ui/Input",
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

const schema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const InputInForm: React.FC = (_args) => {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  function onSubmit(data: z.infer<typeof schema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="mogeko" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export const Demo1: Story = {
  render: () => <InputInForm />,
  parameters: {
    controls: {
      hideNoControlsWarning: true,
      exclude: /type|disabled/g,
    },
  },
};
