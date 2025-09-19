import { Link, useLocation } from "react-router-dom";
import { useCartStore } from "../store/cartStore";
import { FaStore, FaUser } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";

const Navbar = () => {
  const cartItemCount = useCartStore((state) => state.totalQuantity);
  const location = useLocation();

  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

        <Link
          to="/"
          className="text-2xl font-extrabold tracking-tight text-white flex items-center gap-2 hover:scale-105 transition-transform"
        >
          <FaStore className="w-7 h-7 text-yellow-300 drop-shadow" />
          Ozone
        </Link>

       
        <nav className="hidden md:flex gap-8 text-white font-medium">
          <Link
            to="/products"
            className={`relative pb-1 transition ${
              location.pathname === "/products"
                ? "after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full after:bg-yellow-300"
                : "hover:text-yellow-300"
            }`}
          >
            Products
          </Link>
        </nav>


        <div className="flex items-center gap-6">
          <button className="text-white hover:text-yellow-300 transition">
            <FaUser className="w-5 h-5" />
          </button>
          <Link
            to="/cart"
            className="relative text-white hover:text-yellow-300 transition transform hover:scale-110"
          >
            <HiOutlineShoppingBag className="w-6 h-6" />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-2 shadow-lg animate-bounce">
                {cartItemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
