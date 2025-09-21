import { useParams } from "react-router-dom";
import { useCartStore } from "../store/cartStore";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import { useProductDetail } from "../hooks/useProductDetail";

import NotFound from "./NotFound";
import ProductDetailSkeleton from "../Skeleton/ProductDetailSkeleton";

const ProductDetail = () => {
  const { id } = useParams();
  const { data: product, isLoading, isError, error } = useProductDetail(id!);

  const addToCart = useCartStore((state) => state.addToCart);

  if (isLoading) return <ProductDetailSkeleton />;
  if (isError) return <p className="p-4 text-red-600">{(error as Error).message}</p>;
  if (!product) return <NotFound />;

  return (
    <div className="max-w-5xl mx-auto p-6 grid md:grid-cols-2 gap-8">
      <img
        src={product.image}
        alt={product.title}
        className="h-80 object-contain"
      />

      <div>
        <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
        <p className="text-gray-700 mb-2">{product.description}</p>
        <p className="text-xl text-green-700 font-semibold mb-2">${product.price}</p>
        <p className="text-yellow-500 mb-4 flex items-center gap-1 text-sm">
          <FaStar className="w-4 h-4" />
          {product.rating.rate} ({product.rating.count} reviews)
        </p>

        <button
          onClick={() =>
            addToCart({
              id: product.id,
              title: product.title,
              price: product.price,
              image: product.image,
              quantity: 1,
            })
          }
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 flex items-center gap-2"
        >
          <FaShoppingCart className="w-4 h-4 text-white" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
