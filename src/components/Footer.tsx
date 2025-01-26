// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

// export function Footer() {
//   return (
//     <footer className="bg-gray-900 text-white py-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
//         {/* Logo Section */}
//         <div className="flex items-center mb-4 md:mb-0">
//           <a href="">
//             <img
//               src="/cafeLogo.png"
//               width={180}
//               height={60}
//               alt="Logo"
//             />
//           </a>
//         </div>

//         {/* Copyright Section */}
//         <div className="text-center md:text-right">
//           <p className="text-zinc-500 text-sm">
//             &copy; 2024 <span className="text-zinc-200">Maria Inés</span>. All rights reserved.
//           </p>
//         </div>
//         {/* Social Media Icons */}
//         <div className="flex space-x-4 mb-4 mr-6 md:mb-0">
//           <a href="https://facebook.com" aria-label="Facebook" className="text-zinc-400 hover:text-zinc-200">
//             <FontAwesomeIcon icon={faFacebookF} />
//           </a>
//           <a href="https://twitter.com" aria-label="Twitter" className="text-zinc-400 hover:text-zinc-200">
//             <FontAwesomeIcon icon={faTwitter} />
//           </a>
//           <a href="https://instagram.com" aria-label="Instagram" className="text-zinc-400 hover:text-zinc-200">
//             <FontAwesomeIcon icon={faInstagram} />
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// }
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-amber-900/90 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Flex container for Logo and Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <a href="/">
              <img
                src="/cafeLogo.png"
                width={180}
                height={80}
                alt="Coffee Shop Logo"
              />
            </a>
            <p className="text-[#D7CCC8] mt-2 italic text-sm text-center md:text-left">
              "Coffee, the soul of our moments."
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://facebook.com"
              className="text-white hover:text-[#A1887F] transition-colors"
              aria-label="Facebook"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="https://instagram.com"
              className="text-white hover:text-[#A1887F] transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://twitter.com"
              className="text-white hover:text-[#A1887F] transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter size={18} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-4 text-center text-xs text-[#D7CCC8]">
          &copy; 2024 <span className="text-white">Maria Inés</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
