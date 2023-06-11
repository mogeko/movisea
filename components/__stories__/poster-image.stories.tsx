import type { Meta, StoryObj } from "@storybook/react";

import { PosterImage } from "@/components/poster-image";

export default {
  title: "Components/PosterImage",
  component: PosterImage,
} as Meta;
type Story = StoryObj<typeof PosterImage>;

export const Default: Story = {
  args: {
    src: "/fWNIrfvDXORrbfSVy3OX7ndgCLw.jpg",
  },
};
