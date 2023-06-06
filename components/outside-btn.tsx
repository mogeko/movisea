import { Button } from "@/components/ui/button";
import { LuArrowUpRight } from "react-icons/lu";
import Link from "next/link";

export const OutsideButton: React.FC<
  Pick<React.ComponentProps<typeof Button>, "size"> &
    React.ComponentProps<typeof Link>
> = ({ children, size, target = "_blank", ...props }) => {
  return (
    <Button asChild size={size} variant="link">
      <Link target={target} {...props}>
        {children} <LuArrowUpRight className="ml-2 h-4 w-4" />
      </Link>
    </Button>
  );
};
