import Link from "next/link";

export const MainNav: React.FC = () => {
  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <span className="hidden font-bold sm:inline-block">Movisea</span>
      </Link>
    </div>
  );
};
