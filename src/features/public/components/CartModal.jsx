import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useSWR, { useSWRConfig } from "swr";

const CartModal = () => {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data: carts } = useSWR(
    `${import.meta.env.VITE_API_URL}/carts`,
    fetcher
  );

  const { mutate } = useSWRConfig();
  const [loadingItem, setLoadingItem] = useState(null);

  const total = carts?.reduce((pv, cv) => pv + cv.actualPrice, 0);

  const RemoveItem = async (id) => {
    setLoadingItem(id); // Set the loading state for this item
    await fetch(`${import.meta.env.VITE_API_URL}/carts/${id}`, {
      method: "DELETE",
    });
    setLoadingItem(null); // Reset the loading state
    mutate(`${import.meta.env.VITE_API_URL}/carts`);
  };

  return (
    <div className="absolute p-4 rounded-md shadow-[0px_3px_10px_rgba(0,0,0,0.2)] bg-white right-0 flex flex-col gap-6 z-20 top-12 w-max">
      {!carts?.length ? (
        <div>Your cart is empty</div>
      ) : (
        <>
          <h2 className="font-semibold text-xl">Shopping Cart</h2>
          <div className="flex flex-col gap-8">
            {carts.map((cart) => (
              <div key={cart.id} className="flex gap-4">
                <img
                  src={cart.images[0]}
                  alt="image"
                  width={72}
                  height={96}
                  className="object-cover rounded-md"
                />
                <div className="flex flex-col justify-between w-full">
                  <div>
                    <div className="flex items-center justify-between gap-8">
                      <div className="font-semibold">{cart.title}</div>
                      <div className="p-1 bg-gray-50 rounded-sm">
                        ${cart.actualPrice}
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">Available</div>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Qty: {cart.quantity}</span>
                    <span
                      onClick={() => RemoveItem(cart.id)}
                      className={`text-blue-500 cursor-pointer ${
                        loadingItem === cart.id ? "opacity-50 pointer-events-none" : ""
                      }`}
                    >
                      {loadingItem === cart.id ? "Removing..." : "Remove"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <div className="flex items-center justify-between font-semibold">
              <span>Subtotal</span>
              <span>${total}</span>
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
