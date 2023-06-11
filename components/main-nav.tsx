import Link from "next/link";
import { FaCircle } from "react-icons/fa";

import { siteConfig } from "@/config/site";

export const MainNav: React.FC = () => {
  return (
    <div className="mr-4 flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <FaCircle className="w-4 h-4 text-destructive" />
        <span className="hidden align-middle font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
    </div>
  );
};
