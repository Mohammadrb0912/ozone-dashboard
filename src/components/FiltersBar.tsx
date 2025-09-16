import { useFilterStore } from "../store/filterStore";

const FiltersBar = () => {
  const { search, setSearch, sort, setSort, category, setCategory, resetFilters } =
    useFilterStore();

  return (
    <div className="flex flex-wrap gap-4 items-center">
      <input
        type="text"
        placeholder="Search products..."
        className="border px-2 py-1 rounded"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border px-2 py-1 rounded"
      >
        <option value="all">All Categories</option>
        <option value="men's clothing">Men</option>
        <option value="women's clothing">Women</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelry</option>
      </select>

      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="border px-2 py-1 rounded"
      >
        <option value="default">Default</option>
        <option value="asc">Price Low → High</option>
        <option value="desc">Price High → Low</option>
      </select>

      <button
        onClick={resetFilters}
        className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300 transition"
      >
        Reset
      </button>
    </div>
  );
};

export default FiltersBar;
