import React from "react";
import { NavLink } from "react-router-dom";

const CartModal = () => {
  const cartItems = true;
  return (
    <div className="absolute p-4 rounded-md shadow-[0px_3px_10px_rgba(0,0,0,0.2)] bg-white right-0 flex flex-col gap-6 z-20 top-12 w-max">
      {!cartItems ? (
        <div>Your cart is empty</div>
      ) : (
        <>
          <h2 className="font-semibold text-xl">Shopping Cart</h2>
          {/* TOP */}
          <div className="flex flex-col gap-8">
            {/* ITEM 1 */}
            <div className="flex gap-4">
              <img
                src="https://cdn.pixabay.com/photo/2016/08/26/20/45/elan-1623092_1280.jpghttps://cdn.pixabay.com/photo/2016/08/26/20/45/elan-1623092_1280.jpg"
                alt="image"
                width={72}
                height={96}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                {/* TOP */}
                <div>
                  {/* TITLE */}
                  <div className="flex items-center justify-between gap-8">
                    <div className="font-semibold">Product name</div>
                    <div className="p-1 bg-gray-50 rounded-sm">$45</div>
                  </div>
                  {/* DESCRIPTION */}
                  <div className="text-sm text-gray-500">avaliable</div>
                </div>
                {/* BOTTOM */}
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Qty: 2</span>
                  <span className="text-blue-500 cursor-pointer">Remove</span>
                </div>
              </div>
            </div>
            {/* ITEM 2 */}
            <div className="flex gap-4">
              <img
                src="https://cdn.pixabay.com/photo/2016/08/26/20/44/elan-1623085_1280.jpg"
                alt="image"
                width={72}
                height={96}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                {/* TOP */}
                <div>
                  {/* TITLE */}
                  <div className="flex items-center justify-between gap-8">
                    <div className="font-semibold">Product name</div>
                    <div className="p-1 bg-gray-50 rounded-sm">$45</div>
                  </div>
                  {/* DESCRIPTION */}
                  <div className="text-sm text-gray-500">avaliable</div>
                </div>
                {/* BOTTOM */}
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Qty: 2</span>
                  <span className="text-blue-500 cursor-pointer">Remove</span>
                </div>
              </div>
            </div>
          </div>
          {/* BOTTOM */}
          <div>
            <div className="flex items-center justify-between font-semibold">
              <span>Subtotal</span>
              <span>$90</span>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="flex justify-between text-sm">
              <NavLink to="/cart">
                <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">
                  View Cart
                </button>
              </NavLink>
              <button className="bg-black text-white rounded-md py-3 px-4">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
