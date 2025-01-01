import React from "react";
import { Link } from "react-router-dom";

const newProducts = [
  {
    id: 1,
    image: ["/image/trending1.webp", "/image/trending2.webp"],
    title: "Men's Formal Shirt",
    description: "A sleek and elegant formal shirt for office wear.",
    price: 29,
    rating: 4.5,
    color: "Blue",
    type: "Shirt",
    brand: "Buckle Black",
    quantity: 1,
  },
  {
    id: 2,
    image: ["/image/trending3.webp", "/image/trending4.webp"],
    title: "Men's Oversize T-Shirt",
    description:
      "A comfortable and stylish oversize T-shirt for everyday wear.",
    price: 24,
    rating: 4.5,
    color: "Blue",
    type: "Top",
    brand: "Buckle Black",
    quantity: 1,
  },
  {
    id: 3,
    image: ["/image/trending5.webp", "/image/trending6.webp"],
    title: "Men's T-Shirt",
    description: "A comfortable and stylish T-shirt for everyday wear.",
    price: 39,
    rating: 4.7,
    color: "Gray",
    type: "Sweatshirt",
    brand: "Roar",
    quantity: 1,
  },
  {
    id: 4,
    image: ["/image/trending7.webp", "/image/trending8.webp"],
    title: "Men's Casual Shirt",
    description: "A comfortable and stylish casual shirt for everyday wear.",
    price: 39,
    rating: 4.7,
    color: "White",
    type: "Shirt",
    brand: "BKE",
    quantity: 1,
  },
];
const NewProducts = () => {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      {newProducts.map((product) => (
        <div key={product.id} className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
          <Link
            to={`/shop/${product.id}`}
            className="w-full h-80 relative flex items-center justify-center"
          >
            <img
              src={product.image[0]}
              alt="featured product"
              className="w-full h-full object-cover absolute rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500 object-top cursor-pointer"
            />
            <img
              src={product.image[1]}
              alt="featured product"
              className="w-full h-full object-cover absolute rounded-md object-top cursor-pointer"
            />
          </Link>
          <div className="flex justify-between">
            <span className="font-medium">{product.title}</span>
            <span className="font-semibold">${product.price}</span>
          </div>
          <div className="text-sm text-gray-500 line-clamp-2">
            {product.description}
          </div>
          <Link to={`/shop/${product.id}`}>
            <button className="rounded-2xl ring-1 ring-primary py-2 text-primary px-4 text-xs hover:bg-primary hover:text-white">
              See Detail
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NewProducts;
