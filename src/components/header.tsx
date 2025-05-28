import { Hero } from "./hero";
import { Navbar } from "./navbar";

export const Header = () => {
  return (
    <header className="relative overflow-hidden min-h-screen">
      <Navbar />
      <Hero />
    </header>
  );
};
