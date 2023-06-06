"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { object, string, type infer as zInfer } from "zod";

import { Input } from "@/components/ui/input";

const schema = object({
  keyword: string().min(3),
});

export const Search: React.FC<React.ComponentProps<typeof Input>> = ({
  placeholder = "Search...",
  ...props
}) => {
  const form = useForm<zInfer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      keyword: "",
    },
  });
  const onSubmit = (values: zInfer<typeof schema>) => {
    console.log(values); // TODO: Implement search
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <Input
        placeholder={placeholder}
        {...form.register("keyword")}
        {...props}
      />
    </form>
  );
};
