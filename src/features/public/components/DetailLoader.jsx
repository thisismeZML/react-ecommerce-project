import React from "react";

const DetailLoader = () => {
  return (
    <div className="animate-pulse px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      {/* Breadcrumb Loader */}
      <div className="h-6 bg-gray-200 rounded w-1/3 mb-8"></div>
      <div className="relative flex flex-col lg:flex-row gap-16">
        {/* Image Loader */}
        <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
          <div className="aspect-square bg-gray-200 rounded-md"></div>
        </div>
        {/* Description Loader */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          {/* Title */}
          <div className="h-8 bg-gray-200 rounded w-3/4"></div>
          {/* Description */}
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3"></div>
          </div>
          {/* Divider */}
          <div className="h-[2px] bg-gray-100"></div>
          {/* Price */}
          <div className="flex items-center gap-4">
            <div className="h-6 bg-gray-200 rounded w-20"></div>
            <div className="h-8 bg-gray-200 rounded w-28"></div>
          </div>
          {/* Divider */}
          <div className="h-[2px] bg-gray-100"></div>
          {/* Customize Product */}
          <div className="space-y-3">
            <div className="h-5 bg-gray-200 rounded w-1/3"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
          {/* Add to Cart */}
          <div className="h-12 bg-gray-200 rounded w-1/2"></div>
          {/* Divider */}
          <div className="h-[2px] bg-gray-100"></div>
          {/* Info Sections */}
          <div className="space-y-4">
            <div className="text-sm">
              <div className="h-5 bg-gray-200 rounded w-1/3 mb-4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-4/5"></div>
              </div>
            </div>
            <div className="text-sm">
              <div className="h-5 bg-gray-200 rounded w-1/3 mb-4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-4/5"></div>
              </div>
            </div>
            <div className="text-sm">
              <div className="h-5 bg-gray-200 rounded w-1/3 mb-4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-4/5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailLoader;