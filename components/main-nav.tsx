import Link from "next/link";

import { site } from "@/config/site";

export const MainNav: React.FC = () => {
  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <span className="hidden font-bold sm:inline-block">{site.name}</span>
      </Link>
    </div>
  );
};
