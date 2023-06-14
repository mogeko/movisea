import type { Meta, StoryObj } from "@storybook/react";

import { Pagination } from "@/components/pagination";

export default {
  title: "Components/Pagination",
  component: Pagination,
} as Meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    totalPages: 5,
  },
};

export const InPage3: Story = {
  args: {
    totalPages: 9,
  },
  parameters: {
    nextjs: {
      navigation: { query: { page: "3" } },
    },
  },
};

export const MoreThan9Pages: Story = {
  args: {
    totalPages: 10,
  },
};

export const InPage10With20Pages: Story = {
  args: {
    totalPages: 20,
  },
  parameters: {
    nextjs: {
      navigation: { query: { page: "10" } },
    },
  },
};

export const InPage20With20Pages: Story = {
  args: {
    totalPages: 20,
  },
  parameters: {
    nextjs: {
      navigation: { query: { page: "20" } },
    },
  },
};
