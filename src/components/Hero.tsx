import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Send } from "lucide-react"; // Import de votre icône `Send`

export function Hero() {
  return (
    <section
      id="home"
      className="h-screen relative flex items-center overflow-hidden"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/100 via-black/80 to-transparent"></div>

      {/* Conteneur principal */}
      <div className="relative w-full max-w-7xl mx-auto px-4 h-full">
        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col items-center justify-center text-center space-y-6 h-full">
          <h1 className="flex items-center text-3xl font-bold text-white font-playwrite animate-slide-title">
            <span className="inline-block w-2 h-2 bg-amber-900/90 rounded-full mr-2"></span>
            Café Artisan
          </h1>
          <p className="flex items-center text-base text-white opacity-90 font-playwriteVN animate-slide-tagline">
            <span className="inline-block w-2 h-2 bg-amber-900/90 rounded-full mr-2"></span>
            Where every cup tells a story of passion and perfection
          </p>
          {/* Bouton pour petits écrans */}
          <button
            type="button"
            className="inline-block w-full bg-amber-700/90 backdrop-blur-sm text-white px-10 py-4 rounded-full hover:bg-amber-800 transition-all duration-300 text-base hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
          >
            <span className="flex items-center justify-center">
              <Send className="h-5 w-5 mr-2" />
              Explore Our Menu
            </span>
          </button>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex flex-col items-start justify-center space-y-6 h-full">
          <div className="items-center mt-14">
            <h1 className="flex items-center mt-8 text-4xl mb-6 md:text-6xl font-bold text-white font-playwrite animate-slide-title ml-24">
              <span className="inline-block w-3 h-3 bg-amber-900/90 rounded-full mr-3"></span>
              Café Artisan
            </h1>
            <p className="flex items-center text-lg mb-2 md:text-2xl text-white opacity-90 font-playwriteVN animate-slide-tagline ml-72 lg:whitespace-nowrap xl:whitespace-normal">
              <span className="inline-block w-3 h-3 bg-amber-900/90 rounded-full mr-3"></span>
              Where every cup tells a story of passion and perfection
            </p>
          </div>
        </div>

        {/* Bouton pour les écrans moyens et grands */}
        <div className="absolute bottom-6 right-6 md:right-6 md:left-auto md:transform-none left-1/2 transform -translate-x-1/2 md:translate-x-0">
          <a
            href="#menu"
            className="inline-block bg-amber-900/90 backdrop-blur-sm text-white px-10 py-4 rounded-full hover:bg-amber-700 transition-all duration-300 text-base md:text-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
            aria-label="Explore Our Menu"
          >
            <span className="flex items-center justify-center">
              <FontAwesomeIcon icon={faBars} className="w-6 h-6 mr-2" />
              Explore Our Menu
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
