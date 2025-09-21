const ProductCardSkeleton = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 animate-pulse">
      {/* Title */}
      <div className="h-6 bg-gray-200 rounded w-40 mb-4"></div>

      {/* Avg Price */}
      <div className="h-4 bg-gray-200 rounded w-32 mb-6"></div>

      {/* Filters*/}
      <div className="flex flex-wrap gap-4 mb-6">
        <div className="h-9 bg-gray-200 rounded w-40"></div>
        <div className="h-9 bg-gray-200 rounded w-32"></div>
        <div className="h-9 bg-gray-200 rounded w-28"></div>
        <div className="h-9 bg-gray-200 rounded w-20"></div>
      </div>

      {/* Product*/}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="border rounded-xl shadow-sm p-4 animate-pulse"
          >
            <div className="h-40 w-full bg-gray-200 rounded-md mb-3"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-1/4"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
