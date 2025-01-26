import { Send, Clock, MapPin, Phone } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-r from-gray-50 via-white to-gray-100 relative overflow-hidden"
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
          Contact Us
        </h2>

        {/* Combined Container */}
        <div className="bg-white p-10 rounded-3xl shadow-2xl grid md:grid-cols-2 gap-12 transform hover:scale-105 transition-transform duration-500">
          {/* Information Section */}
          <div>
            <h3 className="text-3xl font-semibold mb-6 text-amber-700">Visit Us</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-8 w-8 text-amber-700 mr-4" />
                <span className="text-lg text-gray-700 leading-relaxed">
                  123 Coffee Street, City, Country
                </span>
              </div>
              <div className="flex items-start">
                <Phone className="h-8 w-8 text-amber-700 mr-4" />
                <span className="text-lg text-gray-700 leading-relaxed">
                  +1 234 567 890
                </span>
              </div>
              <div className="flex items-start">
                <Clock className="h-8 w-8 text-amber-700 mr-4" />
                <span className="text-lg text-gray-700 leading-relaxed">
                  Mon-Sun: 7:00 AM - 8:00 PM
                </span>
              </div>
            </div>
            {/* Google Map */}
            <div className="mt-8 rounded-3xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093744!2d144.9559235153188!3d-37.81720997975192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5778f0b427e33e4!2sCoffee%20Shop!5e0!3m2!1sen!2sus!4v1619140449626!5m2!1sen!2sus"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="Coffee Shop Location"
              ></iframe>
            </div>
          </div>

          {/* Form Section */}
          <div>
            <h3 className="text-3xl font-semibold mb-6 text-amber-700">Send Us a Message</h3>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-700"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-700"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-700"
                ></textarea>
              </div>
              <button
                type="submit"
                className="inline-block w-full bg-amber-700/90 backdrop-blur-sm text-white px-10 py-4 rounded-full hover:bg-amber-800 transition-all duration-300 text-base md:text-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              >
                <span className="flex items-center justify-center">
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
