import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useCartStore } from "../store/cartStore";
import type { Product } from "../types/product";
import { FaStar } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const fetchProduct = async (id: string): Promise<Product> => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
};

const ProductDetail = () => {
  const { id } = useParams();
  const { data: product, isLoading } = useQuery<Product>({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id!),
  });

  const addToCart = useCartStore((state) => state.addToCart);

  if (isLoading) return <p className="p-4">Loading...</p>;
  if (!product) return <p className="p-4">Product not found</p>;

  return (
    <div className="max-w-5xl mx-auto p-6 grid md:grid-cols-2 gap-8">
      <img src={product.image} alt={product.title} className="h-80 object-contain" />

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
