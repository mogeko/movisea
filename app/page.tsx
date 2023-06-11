import { siteConfig } from "@/config/site";
import { Search } from "@/components/search";

const Home: React.FC = () => {
  return (
    <main className="container absolute top-[20%]">
      <div className="flex flex-col items-center justify-center min-h-full py-2">
        <div className="lg:text-8xl md:text-6xl text-4xl font-bold lg:mb-8 md:mb-4 mb-2">
          {siteConfig.name}
          <span className="text-destructive">.</span>
        </div>
        <Search className="max-w-[590px] w-full" />
      </div>
    </main>
  );
};

export default Home;
