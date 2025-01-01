import React from "react";
import { Link } from "react-router-dom";

const AboutUsPage = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-32">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-semibold text-gray-800 mb-4">About Us</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Welcome to our store! We’re dedicated to offering you the best online
          shopping experience with top-notch products and outstanding customer
          service.
        </p>
      </div>

      {/* Company Mission */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Our Mission
        </h2>
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Customer First
            </h3>
            <p className="text-lg text-gray-600">
              We are committed to putting our customers first. Our mission is to
              offer high-quality products and exceptional service at an
              unbeatable value, all while making your shopping experience
              seamless and enjoyable.
            </p>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Innovation & Quality
            </h3>
            <p className="text-lg text-gray-600">
              We believe in constantly evolving to provide the best of what’s
              available. Our carefully curated product selection is always
              fresh, unique, and high-quality, designed to meet the needs of
              modern consumers.
            </p>
          </div>
        </div>
      </div>

      {/* Company History or Milestones */}
      <div className="bg-white py-12 mb-16 shadow-md rounded-md">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Our Journey
        </h2>
        <div className="relative">
          <div className="absolute left-0 top-0 w-1 bg-primary h-full"></div>
          <div className="space-y-8">
            <div className="flex items-center pl-16 space-x-8">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-white flex items-center justify-center rounded-full">
                2015
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Founded</h3>
                <p className="text-lg text-gray-600">
                  Our company was founded with a vision to offer the best in
                  class products to online shoppers.
                </p>
              </div>
            </div>
            <div className="flex items-center pl-16 space-x-8">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-white flex items-center justify-center rounded-full">
                2018
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Expanded Product Line
                </h3>
                <p className="text-lg text-gray-600">
                  We expanded our product line to include home essentials,
                  fashion, and electronics.
                </p>
              </div>
            </div>
            <div className="flex items-center pl-16 space-x-8">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-white flex items-center justify-center rounded-full">
                2021
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Global Expansion
                </h3>
                <p className="text-lg text-gray-600">
                  Our brand became internationally recognized, allowing us to
                  serve customers worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="mb-16">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-3xl font-semibold text-center mb-8">
            About The Developer
          </h1>
          <div className="flex justify-center mb-8">
            <img
              src="/dev.jpeg"
              alt="Developer"
              className="rounded-full w-40 h-40 object-cover"
            />
          </div>
          <div className="text-center">
            <p className="text-lg mb-6">
              Hi, I'm Zin Min Latt, the developer and creator behind this
              eCommerce site. I built this platform with a focus on providing an
              intuitive, user-friendly experience for all customers. My goal is
              to deliver high-quality products and exceptional customer service.
            </p>
            <p className="text-lg mb-6">
              With experience in front-end and back-end development, I
              specialize in creating seamless, responsive websites using the
              latest technologies. I’m constantly learning and evolving,
              ensuring my platform meets the needs of my users.
            </p>
            <p className="text-lg mb-6">
              I hope you enjoy browsing through the products and have a smooth
              shopping experience. Feel free to contact me if you have any
              questions or feedback.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Join Us Today
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Experience the best online shopping experience. Shop with us today and
          discover the finest products at great prices.
        </p>
        <Link to="/shop" className="bg-primary text-white text-lg px-8 py-3 rounded-full">
          Start Shopping
        </Link>
      </div>
    </div>
  );
};

export default AboutUsPage;
