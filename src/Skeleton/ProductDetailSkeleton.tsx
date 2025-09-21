const ProductDetailSkeleton = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 grid md:grid-cols-2 gap-8 animate-pulse">
      <div className="h-80 bg-gray-200 rounded-md"></div>
      <div className="space-y-4">
        <div className="h-6 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        <div className="h-5 bg-gray-200 rounded w-1/3"></div>
        <div className="h-10 bg-gray-300 rounded w-40"></div>
      </div>
    </div>
  );
};

export default ProductDetailSkeleton;
