import { useState, useEffect } from "react";
import { Menu as MenuIcon, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-sm shadow-lg py-2"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center">
            <img
              src={isScrolled ? "/CafeLogo-white.png" : "/cafeLogo.png"} // Change le logo en fonction de l'état
              alt="Café Artisan Logo"
              width={150}
              height={40}
              className="ml-2  transition-transform duration-300 hover:scale-105 cursor-pointer"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10">
            {["Home", "About Us", "Menu", "Feedback", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className={`text-lg font-medium transition-colors duration-500 hover:text-amber-800 ${
                  isScrolled ? "text-gray-800" : "text-white"
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`transition-colors duration-500 ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white/95 backdrop-blur-sm transition-all duration-500 ease-in-out overflow-hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-2 pb-3 space-y-2">
          {["Home", "About Us", "Menu", "Feedback", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "")}`}
              className="block px-4 py-3 text-gray-800 hover:text-amber-800 transition-colors rounded-lg hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
