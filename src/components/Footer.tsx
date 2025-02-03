import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white w-full">
      {/* Newsletter Section */}
      <div className="bg-gray-800 py-4 sm:py-6 lg:py-8">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h3 className="text-lg sm:text-xl font-semibold">Subscribe to our Newsletter</h3>
              <p className="text-gray-400 text-sm sm:text-base">Get the latest updates and offers</p>
            </div>
            <div className="flex w-full sm:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-64 px-3 py-2 rounded-l-md focus:outline-none text-gray-900 text-sm"
              />
              <button className="bg-blue-600 px-4 sm:px-6 py-2 rounded-r-md hover:bg-blue-700 whitespace-nowrap text-sm sm:text-base">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-8 sm:py-12 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="text-center sm:text-left">
            <h2 className="text-xl font-bold mb-4">BoiToi</h2>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">
              Your trusted destination for quality books and stationery products.
            </p>
            <div className="flex justify-center sm:justify-start space-x-4">
              <a href="#" className="transform hover:scale-110 transition-transform">
                <FaFacebook className="text-xl sm:text-2xl hover:text-blue-500" />
              </a>
              <a href="#" className="transform hover:scale-110 transition-transform">
                <FaTwitter className="text-xl sm:text-2xl hover:text-blue-400" />
              </a>
              <a href="#" className="transform hover:scale-110 transition-transform">
                <FaInstagram className="text-xl sm:text-2xl hover:text-pink-500" />
              </a>
              <a href="#" className="transform hover:scale-110 transition-transform">
                <FaLinkedin className="text-xl sm:text-2xl hover:text-blue-600" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><Link to="/shipping" className="text-gray-400 hover:text-white transition-colors">Shipping Policy</Link></li>
              <li><Link to="/returns" className="text-gray-400 hover:text-white transition-colors">Returns & Refunds</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li>123 Book Street</li>
              <li>Dhaka, Bangladesh</li>
              <li>Phone: +880 1234-567890</li>
              <li>Email: info@boitoi.com</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4 sm:py-6 max-w-7xl">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              © {new Date().getFullYear()} BoiToi. All rights reserved.
            </p>
            <div className="flex items-center justify-center space-x-2">
              <img src="/visa.png" alt="Visa" className="h-6 sm:h-8" />
              <img src="/mastercard.png" alt="Mastercard" className="h-6 sm:h-8" />
              <img src="/bkash.png" alt="bKash" className="h-6 sm:h-8" />
              <img src="/nagad.png" alt="Nagad" className="h-6 sm:h-8" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
