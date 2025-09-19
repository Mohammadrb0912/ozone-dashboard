import { useProducts } from "../hooks/useProducts";
import { FiltersBar, ProductCard } from "../components/index";

import { FaShoppingCart } from "react-icons/fa";
import { MdBarChart } from "react-icons/md";
import { useFilterStore } from "../store/filterStore";
import { useSyncFilters } from "../hooks/useSyncFilters";
import Loading from "./Loading";
import NotFound from "./NotFound";


const Products = () => {

 useSyncFilters();

  const { data: products, isLoading } = useProducts();
  const { search, sort, category } = useFilterStore();

  if (isLoading) return <Loading />;
  if (!products) return <NotFound />;


  let filtered = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  if (category !== "all") {
    filtered = filtered.filter((p) => p.category === category);
  }


  if (sort === "asc") filtered.sort((a, b) => a.price - b.price);
  if (sort === "desc") filtered.sort((a, b) => b.price - a.price);


  const averagePrice =
    filtered.reduce((sum, p) => sum + p.price, 0) / filtered.length || 0;

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-xl font-bold mb-2 flex items-center gap-2">
        <FaShoppingCart className="w-5 h-5 text-gray-700" />
        All Products
      </h1>
      <p className="text-sm text-gray-600 mb-4 flex items-center gap-2">
        <MdBarChart className="w-4 h-4 text-blue-600" />
        <span className="font-semibold">Avg. Price:</span>{" "}
        <span className="text-blue-600">${averagePrice.toFixed(2)}</span>
      </p>

      <FiltersBar />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
