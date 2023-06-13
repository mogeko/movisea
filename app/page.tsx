import { siteConfig } from "@/config/site";
import { Search } from "@/components/search";

const Home: React.FC = () => {
  return (
    <main className="container absolute top-[25%] sm:top-[30%]">
      <div className="flex flex-col items-center justify-center min-h-full py-2">
        <div className="lg:text-8xl md:text-6xl text-5xl font-bold lg:mb-8 md:mb-6 mb-4">
          {siteConfig.name}
          <span className="text-destructive">.</span>
        </div>
        <div className="w-full flex-1 max-w-[590px]">
          <Search />
        </div>
      </div>
    </main>
  );
};

export default Home;
