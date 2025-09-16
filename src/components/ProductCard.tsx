
import { Link } from "react-router-dom";
import type { Product } from "../types/product";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link to={`/product/${product.id}`} className="border rounded-xl shadow-sm p-4  hover:scale-105 transition-all">
      <img src={product.image} alt={product.title} className="h-40  w-full mx-auto object-contain" />
      <h2 className="mt-2 text-sm font-semibold">{product.title}</h2>
      <p className="text-sm text-gray-600">${product.price}</p>
      <p className="text-xs text-yellow-500 flex items-center gap-1">
        <FaStar className="w-3 h-3" />{product.rating.rate}
      </p>
    </Link>
  );
};

export default ProductCard;
