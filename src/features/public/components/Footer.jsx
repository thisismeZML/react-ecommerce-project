import React from 'react'
import { RiCopyrightFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-100 text-sm mt-24">
      {/* TOP */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/">
            <div className="text-2xl tracking-wide text-primary font-bold">RAYY</div>
          </Link>
          <p>
            Building (D), Room (28), Kyaik Waing Pagoda Road, Mayangone, Yangon
          </p>
          <span className="font-semibold">
            thatismetheoneudunknow@gmail.com
          </span>
          <span className="font-semibold">+959 784 063 395</span>
          <div className="flex gap-6">
            <img src="/facebook.png" width={16} height={16} alt="facebook" />
            <img
              src="/instagram.png"
              width={16}
              height={16}
              alt="instagram"
            />
            <img src="/youtube.png" width={16} height={16} alt="youtube" />
            <img src="/pinterest.png" width={16} height={16} alt="linkedin" />
            <img src="/x.png" width={16} height={16} alt="twitter" />
          </div>
        </div>
        {/* CENTER */}
        <div className="hidden lg:flex justify-between w-1/2">
          <div className="flex flex-col gap-6">
            <h1 className=" font-medium text-lg">COMPANY</h1>
            <div className="flex flex-col gap-6">
              <Link to="about">About us</Link>
              <Link to="">Carrers</Link>
              <Link to="">Affliates</Link>
              <Link to="">Blog</Link>
              <Link to="contact">Contact</Link>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className=" font-medium text-lg">SHOP</h1>
            <div className="flex flex-col gap-6">
              <Link href="/">New Arrivals</Link>
              <Link href="/">Accessories</Link>
              <Link href="/">Men</Link>
              <Link href="/">Women</Link>
              <Link href="/">All Products</Link>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className=" font-medium text-lg">HELP</h1>
            <div className="flex flex-col gap-6">
              <Link href="/">Customer Service</Link>
              <Link href="/">My Account</Link>
              <Link href="/">Find a Store</Link>
              <Link href="/">Legal & Privacy</Link>
              <Link href="/">Gift Card</Link>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="font-medium text-lg">SUBSCRIBE</h1>
          <p>
            Be the first go to get the latest news about trends, promotions, and
            much more!
          </p>
          <div className="flex">
            <input type="text" className="p-4 w-3/4" placeholder='Email Address'/>
            <button className="w-1/4 bg-primary text-white">
              JOIN
            </button>
          </div>
          <span className="font-semibold">Secure Payments</span>
          <div className="flex justify-between">
            <img src="/discover.png" width={40} height={20} alt="visa" />
            <img src="/skrill.png" width={40} height={20} alt="visa" />
            <img src="/paypal.png" width={40} height={20} alt="visa" />
            <img src="/mastercard.png" width={40} height={20} alt="visa" />
            <img src="/visa.png" width={40} height={20} alt="visa" />
          </div>
        </div>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div className="flex items-center"> <RiCopyrightFill className="mr-2" /> 2024 RAYY. All Rights Reserved</div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="">
            <span className="text-gray-500 mr-4">Language</span>
            <span className="font-medium">United State | English</span>
          </div>
          <div className="">
            <span className="text-gray-500 mr-4">Currency</span>
            <span className="font-medium">$ USD</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer