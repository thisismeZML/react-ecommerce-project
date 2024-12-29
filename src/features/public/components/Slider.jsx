import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    title: "Summer Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/shop",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 2,
    title: "Winter Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/shop",
    bg: "bg-gradient-to-r from-pink-50 to-blue-50",
  },
  {
    id: 3,
    title: "Spring Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/shop",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));   
    },3000)
    return () => clearInterval(interval)
  },[])

  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
      <div
        className="w-max h-full flex transition-all duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${current * 100}vw)`,
        }}
      >
        {slides.map((slide) => (
          <div
            className={`w-screen h-full flex flex-col gap-16 xl:flex-row ${slide.bg}`}
            key={slide.id}
          >
            {/* TEXT CONTAINER */}
            <div className="h-1/2 flex flex-col justify-center items-center text-center gap-8 2xl:gap-12 xl:w-1/2 xl:h-full">
              <h2 className="text-xl lg:text-3xl 2xl:text-5xl">
                {slide.description}
              </h2>
              <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">
                {slide.title}
              </h1>
              <Link to={slide.url}>
                <button className="bg-black text-white rounded-md py-3 px-4">
                  Shop Now
                </button>
              </Link>
            </div>
            {/* IMAGE CONTAINER */}
            <div className="h-1/2 xl:w-1/2 xl:h-full">
              <img
                src={slide.img}
                alt="slide"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute margin-auto bottom-8 left-1/2  flex gap-4">
        {slides.map((slide, index) => (
          <div
            onClick={() => setCurrent(index)}
            key={slide.id}
            className={`w-3 h-3 ring-1 ring-gray-600 flex items-center justify-center rounded-full cursor-pointer ${
              current === index ? "scale-150" : ""
            }`}
          >
            {current === index && (
              <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
