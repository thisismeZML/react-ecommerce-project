import React from "react";
import Filter from "../components/Filter";
import ProductList from "../components/ProductList";

const ShopPage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      {/* Campaign */}
      <div className="bg-pink-50 px-4 flex justify-between h-[25rem] sm:h-64">
        {/* TITLE */}
        <div className="w-2/3 flex flex-col items-center justify-center gap-8">
          <h1 className="font-semibold text-4xl leading-[48px] text-gray-700">Grab up to 50% off on <br/> Selected Products</h1>
          <button className="rounded-3xl bg-primary text-white w-max py-3 px-5 text-sm">Buy Now</button>
        </div>
        {/* IMAGE */}
        <div className="w-1/3">
          <img
            src="/woman.png"
            alt="women"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Filters */}
      <Filter/>

      {/* Product List */}
      <ProductList/>
    </div>
  );
};

export default ShopPage;
