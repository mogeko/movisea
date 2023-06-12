"use client";

import type { Dispatch } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { object, string, type infer as zInfer } from "zod";

import { useLocalStorage } from "@/lib/use-localstorage";
import { Input } from "@/components/ui/input";

const schema = object({
  keyword: string().min(3),
});

export const Search: React.FC<React.ComponentProps<typeof Input>> = ({
  placeholder = "Search...",
  className,
  ...props
}) => {
  const [searchHistory, setSearchHistory] = useSearchHistory();
  const form = useForm<zInfer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      keyword: "",
    },
  });
  const onSubmit = (values: zInfer<typeof schema>) => {
    searchHistory.push(values.keyword);
    setSearchHistory(searchHistory);
    console.log(values); // TODO: Implement search
  };

  return (
    <form className={className} onSubmit={form.handleSubmit(onSubmit)}>
      <Input
        placeholder={placeholder}
        {...form.register("keyword")}
        {...props}
      />
    </form>
  );
};

const useSearchHistory = (sKey = "searchHistory", init: string[] = []) => {
  const [item, setItem] = useLocalStorage(sKey, JSON.stringify(init));
  const setSearchHistory: Dispatch<string[]> = (history) => {
    setItem(JSON.stringify(history));
  };
  const searchHistory = JSON.parse(item) as string[];

  return [searchHistory, setSearchHistory] as const;
};
