import React from "react";

const ProductSkeleton = () => {
  return (
    <div className="flex flex-col gap-4 animate-pulse">
      {/* Image Skeleton */}
      <div className="h-[300px] bg-gray-300 rounded-md"></div>

      {/* Title and Price Skeleton */}
      <div className="flex justify-between items-center">
        <div className="h-4 bg-gray-300 rounded w-2/3"></div>
        <div className="h-4 bg-gray-300 rounded w-1/4"></div>
      </div>

      {/* Description Skeleton */}
      <div className="space-y-2">
        <div className="h-3 bg-gray-300 rounded w-full"></div>
        <div className="h-3 bg-gray-300 rounded w-5/6"></div>
      </div>

      {/* Button Skeleton */}
      <div className="h-8 bg-gray-300 rounded-2xl w-1/2"></div>
    </div>
  );
};

export default ProductSkeleton;
