import { Coffee, Leaf, Heart, Star } from "lucide-react";

export function About() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-r from-gray-100 via-white to-gray-50 relative overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1920&q=80"
          alt="Background texture"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        {/* Title */}
        <h2 className="text-5xl font-bold text-center mb-16 text-amber-600 font-playwrite">
          About Us
        </h2>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-y-12 gap-x-16 items-center">
          {/* Image Section */}
          <div className="relative group">
            <img
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Cozy café ambiance"
              className="rounded-3xl shadow-xl transform group-hover:scale-105 group-hover:rotate-1 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-3xl"></div>
          </div>

          {/* Text Section */}
          <div>
            <h3 className="text-4xl font-semibold mb-6 text-amber-700">
              The Café Artisan Experience
            </h3>
            <p className="text-gray-700 mb-8 leading-relaxed">
              At Café Artisan, we believe that coffee is more than just a drink—it’s an art. Since
              2015, our mission has been to provide an unforgettable experience through exceptional
              coffee, handcrafted pastries, and a welcoming atmosphere. Whether you’re here to work,
              relax, or connect, every detail is designed to make you feel at home.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center">
                <Coffee className="h-8 w-8 text-amber-700 mr-3" />
                <span className="text-lg text-gray-700">Artisan Coffee</span>
              </div>
              <div className="flex items-center">
                <Leaf className="h-8 w-8 text-amber-700 mr-3" />
                <span className="text-lg text-gray-700">Eco-Friendly Practices</span>
              </div>
              <div className="flex items-center">
                <Heart className="h-8 w-8 text-amber-700 mr-3" />
                <span className="text-lg text-gray-700">Community-Focused</span>
              </div>
              <div className="flex items-center">
                <Star className="h-8 w-8 text-amber-700 mr-3" />
                <span className="text-lg text-gray-700">Award-Winning Flavors</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
