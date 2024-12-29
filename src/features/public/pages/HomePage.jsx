import React from "react";
import Slider from "../components/Slider";
import FeaturedProducts from "../components/FeaturedProducts";

const HomePage = () => {
  return (
    <div>
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl flex items-center justify-center text-center">
          Featured Products
        </h1>
        <FeaturedProducts />
      </div>
    </div>
  );
};

export default HomePage;
