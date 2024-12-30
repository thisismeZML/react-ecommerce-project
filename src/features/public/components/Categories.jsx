import React from "react";

const Categories = () => {
  return (
    <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-2">
      {/* Men Clothing */}
      <div className="h-[800px] relative">
        <img
          src="/image/fe6.jpg"
          alt="category image"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-5xl font-semibold">Men's Clothing</h1>
            <button className="bg-black text-white py-4 px-4 mt-5 rounded-md hover:bg-primary hover:text-white transition-all duration-150">Explore The Collection</button>
        </div>
      </div>
      {/* Women Clothing */}
      <div className="h-[800px] relative">
        <img
          src="/image/fe8.jpg"
          alt="category image"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-5xl font-semibold text-primary">Women's Clothing</h1>
            <button className="bg-white text-black py-4 px-4 mt-5 rounded-md hover:bg-primary hover:text-white transition-all duration-150">Explore The Collection</button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
