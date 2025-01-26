import { useState, useRef } from "react";

export function Menu() {
  const itemsPerPage = 6; // Nombre d'items par page
  const menuItems = [
    {
      name: "Espresso",
      price: "3.50 €",
      description: "Rich and bold single shot espresso",
      image:
        "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    },
    {
      name: "Cappuccino",
      price: "4.50 €",
      description: "Espresso with steamed milk and foam",
      image:
        "https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    },
    {
      name: "Latte",
      price: "4.00 €",
      description: "Espresso with steamed milk",
      image:
        "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    },
    {
      name: "Brownie",
      price: "3.00 €",
      description:
        "Delicious chocolate brownie, rich in flavor and perfectly moist.",
      image: "/menu/brownie.jpg",
    },
    {
      name: "Cookies",
      price: "2.80 €",
      description: "Crispy and chewy cookies with rich chocolate chunks.",
      image: "/menu/cookies.PNG",
    },
    {
      name: "Cheesecake",
      price: "3.20 €",
      description: "Creamy cheesecake with a buttery biscuit base.",
      image: "/menu/cheesecake.jpg",
    },
    {
      name: "Éclair",
      price: "2.65 €",
      description:
        "Classic French éclair filled with rich vanilla cream and topped with chocolate glaze.",
      image: "/menu/eclair.jpg",
    },
    {
      name: "Tart",
      price: "3.50 €",
      description: "Delicate French tart with a buttery crust and a tangy lemon filling.",
      image: "/menu/tart.jpg",
    },
    {
      name: "Cupcake",
      price: "3.50 €",
      description:
        "Moist vanilla cupcake topped with a swirl of creamy buttercream frosting.",
      image: "/menu/cupcake.jpg",
    },
    {
      name: "Cake",
      price: "5.50 €",
      description: 
        "Decadent chocolate cake with layers of rich, smooth chocolate ganache and a dusting of cocoa powder.",
      image: "/menu/cake.jpg",
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(menuItems.length / itemsPerPage);

  const currentItems = menuItems.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const menuRef = useRef<HTMLDivElement>(null); // Référence typée


  const handlePageChange = (pageIndex: number) => {
    setCurrentPage(pageIndex);
    // Faites défiler le menu vers le haut
    if (menuRef.current) {
      menuRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="menu" className="py-24 from-gray-100 to-white" ref={menuRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-extrabold text-center mb-20 text-amber-700 font-playwrite">
          Our Menu
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {currentItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-amber-700 text-white px-4 py-2 rounded-full shadow-lg">
                  {item.price}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-semibold mb-3 text-amber-700 font-playwriteVN">
                  {item.name}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination */}
        <div className="flex justify-center items-center mt-10 space-x-4">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i)}
              className={`w-4 h-4 rounded-full ${
                i === currentPage
                  ? "bg-amber-700"
                  : "bg-gray-300 hover:bg-amber-500"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
