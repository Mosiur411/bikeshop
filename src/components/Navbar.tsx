import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { FiMenu, FiX, FiSearch, FiShoppingCart, FiUser, FiLogOut } from "react-icons/fi";
import { selectCartTotalItems } from "@/feature/cart/cartSlice";

interface UserData {
  email: string;
  id?: string;
}

const LogoutModal = ({ isOpen, onClose, onConfirm }: { isOpen: boolean; onClose: () => void; onConfirm: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full">
        <h3 className="text-lg font-semibold mb-4">Confirm Logout</h3>
        <p className="text-gray-600 mb-6">Are you sure you want to logout?</p>
        <div className="flex justify-end space-x-3">
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
            Cancel
          </button>
          <button onClick={onConfirm} className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const totalItems = useSelector(selectCartTotalItems);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const user = localStorage.getItem("email");

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("token");
    setShowLogoutModal(false);
    navigate("/login");
  };

  return (
    <>
      <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between mx-auto max-w-[1350px]">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-800">
          <span className="text-blue-600">E-</span>Boitoi
        </Link>

        {/* Search Bar */}
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border rounded-full px-4 py-2 w-64"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
            <FiSearch size={20} />
          </button>
        </div>

        {/* Menu Items */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/products" className="text-gray-600 hover:text-blue-600">
            Products
          </Link>
          <Link to="/favorite" className="text-gray-600 hover:text-blue-600">
            Favorite
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-blue-600">
            About
          </Link>
          <Link to="/cart" className="relative text-gray-600 hover:text-blue-600">
            <FiShoppingCart size={24} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
                {totalItems}
              </span>
            )}
          </Link>

          {user ? (
            <div className="flex items-center space-x-4">
              <Link to="/profile" className="text-gray-600 hover:text-blue-600">
                <FiUser size={24} />
              </Link>
              <button onClick={() => setShowLogoutModal(true)} className="text-gray-600 hover:text-red-600">
                <FiLogOut size={24} />
              </button>
            </div>
          ) : (
            <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-600" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md p-4 flex flex-col space-y-4 md:hidden z-50">
            <Link to="/products" className="text-gray-600 hover:text-blue-600" onClick={() => setMenuOpen(false)}>
              Products
            </Link>
            <Link to="/favorite" className="text-gray-600 hover:text-blue-600" onClick={() => setMenuOpen(false)}>
              Favorite
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600" onClick={() => setMenuOpen(false)}>
              About
            </Link>
            <Link to="/cart" className="text-gray-600 hover:text-blue-600" onClick={() => setMenuOpen(false)}>
              Cart ({totalItems})
            </Link>

            {user ? (
              <div className="flex flex-col space-y-3">
                <Link to="/profile" className="text-gray-600 hover:text-blue-600" onClick={() => setMenuOpen(false)}>
                  Profile
                </Link>
                <button
                  onClick={() => {
                    setShowLogoutModal(true);
                    setMenuOpen(false);
                  }}
                  className="text-gray-600 hover:text-red-600 flex items-center space-x-2"
                >
                  <FiLogOut size={20} />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
                Login
              </Link>
            )}
          </div>
        )}
      </nav>

      {/* Logout Modal */}
      <LogoutModal isOpen={showLogoutModal} onClose={() => setShowLogoutModal(false)} onConfirm={handleLogout} />
    </>
  );
};

export default Navbar;
