import { Star } from "lucide-react";
import { useState } from "react";

export function Feedback() {
  const feedbacks = [
    {
      name: "Sarah Johnson",
      rating: 5,
      comment:
        "Best coffee in town! The atmosphere is perfect for both work and relaxation.",
    },
    {
      name: "Mike Thompson",
      rating: 5,
      comment:
        "Amazing service and the pastries are to die for. Highly recommended!",
    },
    {
      name: "Emily Davis",
      rating: 5,
      comment:
        "My go-to spot for morning coffee. The staff is always friendly and welcoming.",
    },
    {
      name: "John Smith",
      rating: 4,
      comment: "Great coffee, but the seating could be more comfortable.",
    },
    {
      name: "Anna Brown",
      rating: 5,
      comment: "The latte art is stunning, and the desserts are irresistible!",
    },
    {
      name: "James Lee",
      rating: 4,
      comment: "A cozy place to meet friends and enjoy delicious treats.",
    },
  ];

  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(feedbacks.length / itemsPerPage);

  const currentFeedbacks = feedbacks.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handlePageChange = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  return (
    <section
      id="feedback"
      className="py-24 bg-gray-50 relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1920&q=80"
          alt="Background texture"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        {/* Title */}
        <h2 className="text-5xl font-extrabold text-center mb-16 text-amber-700 font-playwrite">
          Customer Feedback
        </h2>

        {/* Feedback Cards */}
        <div className="grid md:grid-cols-3 gap-12">
          {currentFeedbacks.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500"
            >
              {/* Stars */}
              <div className="flex items-center mb-4 justify-center">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-6 w-6 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Comment */}
              <p className="text-lg text-gray-700 mb-6 italic leading-relaxed px-6">
                "{review.comment}"
              </p>

              {/* Customer Name */}
              <p className="text-sm font-semibold text-center text-amber-700 uppercase tracking-wider pb-6">
                {review.name}
              </p>
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

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-block bg-amber-700/90 backdrop-blur-sm text-white px-10 py-4 rounded-full hover:bg-amber-700 transition-all duration-300 text-base md:text-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
          >
            <span className="flex items-center justify-center">
              Share Your Feedback
            </span>
          </a>
        </div>
      </div>
      
    </section>
  );
}
