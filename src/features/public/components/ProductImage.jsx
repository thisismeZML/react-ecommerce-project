import React, { useState } from "react";

// const images = [
//   {
//     id: 1,
//     url: "/image/img1.jpg",
//   },
//   {
//     id: 2,
//     url: "/image/img2.jpg",
//   },
//   {
//     id: 3,
//     url: "/image/img3.jpg",
//   },
// ];

const ProductImage = ({ images }) => {
  const [index, setIndex] = useState(0);
  return (
    <div>
      {/* Main Image */}
      <div className="h-[500px]">
        <img
          src={images && images[index]}
          alt="product image"
          className="object-cover rounded-md w-full h-full object-top"
        />
      </div>
      {/* Sub Images */}
      <div className="flex justify-between gap-4">
        {images?.map((img, index) => (
          <div key={index} className="w-1/4 h-32 gap-4 mt-8">
            <img
              onClick={() => setIndex(index)}
              src={img}
              alt=""
              className="w-full h-full object-cover cursor-pointer object-top"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImage;
