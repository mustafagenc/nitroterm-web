import { Hero } from "./hero";
import { Navbar } from "./navbar";

export const Header = () => {
  return (
    <header className="relative overflow-hidden min-h-screen" id="home">
      <Navbar />
      <Hero />
    </header>
  );
};
