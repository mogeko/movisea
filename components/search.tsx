"use client";

import { useCallback, useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { set, useForm } from "react-hook-form";
import { object, string, type infer as zInfer } from "zod";

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

const useSearchHistory = (key = "searchHistory", init: string[] = []) => {
  const initialValue = JSON.stringify(init);
  const [value, setValue] = useState(
    () => localStorage.getItem(key) || initialValue
  );
  const setHistory = (newValue: string[]) => {
    const strNewValue = JSON.stringify(newValue);
    setValue(strNewValue);
    localStorage.setItem(key, strNewValue);
  };
  const handleStorage = useCallback(
    (e: StorageEvent) => {
      if (e.key !== key) return;
      if (e.newValue !== value) {
        setValue(e.newValue || initialValue);
      }
    },
    [value]
  );

  useEffect(() => {
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, [handleStorage]);

  return [JSON.parse(value) as string[], setHistory] as const;
};
