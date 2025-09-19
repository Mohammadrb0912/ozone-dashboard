import { useQuery } from "@tanstack/react-query";
import type { Product } from "../types/product";

const fetchProduct = async (id: string): Promise<Product> => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);

   if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
};

export const useProductDetail = (id: string) => {
  return useQuery<Product>({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id),
  });
};
