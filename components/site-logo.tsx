import Link from "next/link";

import { Button } from "@/components/ui/button";

export const SiteLogo: React.FC = () => {
  return (
    <Button variant="ghost" asChild>
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <span className="hidden font-bold sm:inline-block">Movisea</span>
      </Link>
    </Button>
  );
};
