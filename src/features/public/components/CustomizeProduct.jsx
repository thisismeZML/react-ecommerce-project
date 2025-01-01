import React, { useState } from "react";

const CustomizeProduct = ({ colors, sizes }) => {
  const [sizeKind, setSizeKind] = useState(0);
  return (
    <div className="flex flex-col gap-6">
      {/* Choose Color */}
      <h1 className="font-medium">Choose a Color</h1>
      <ul className="flex items-center gap-3">
        <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-red-500">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full ring-2" />
        </li>
        <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-blue-500"></li>
        <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-white">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-[2px] rotate-45 rounded-full bg-red-500" />
        </li>
      </ul>
      {/* Choose Size */}
      <h1 className="font-medium">Choose a Size</h1>
      <ul className="flex items-center gap-3">
        {sizes?.map((size, index) => (
          <li
            onClick={() => setSizeKind(index)}
            key={index}
            className={`bg-gray-100 text-center px-4 py-1 rounded-2xl text-sm cursor-pointer ${
              index === sizeKind ? "bg-primary text-white" : ""
            }`}
          >
            {size}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomizeProduct;
