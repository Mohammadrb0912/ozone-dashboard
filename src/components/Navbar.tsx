
import { Link } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';

import { FaStore } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";


const Navbar = () => {
  const cartItemCount = useCartStore(state => state.totalQuantity);

  return (
    <header className="bg-white shadow-md">
      <div className=" mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <FaStore className="w-6 h-6 text-gray-800" />
          Ozone
        </Link>

        <div className="flex gap-6 text-gray-600 font-medium">
          <Link to="/">Home</Link>
          <Link to="/products" className="hover:text-blue-600 transition">Products</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="flex items-center gap-4">
          <FaUser className="w-5 h-5 text-gray-700" />
          <Link to="/cart" className="relative">
            <HiOutlineShoppingBag className="w-6 h-6 text-gray-700" />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-2">
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
