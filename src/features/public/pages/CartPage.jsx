import React, { useState, useEffect } from "react";
import useSWR, { mutate } from "swr";

const CartPage = () => {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data: cart, error } = useSWR(
    `${import.meta.env.VITE_API_URL}/carts`,
    fetcher
  );

  const [cartItems, setCartItems] = useState([]);
  const taxRate = 0.1; // 10% tax
  const shippingCost = 10; // Flat shipping cost

  useEffect(() => {
    if (cart) {
      setCartItems(cart);
    }
  }, [cart]);

  const updateQuantity = async (id, quantity) => {
    if (quantity < 1) return;

    const updatedItem = cartItems.find((item) => item.id === id);
    if (!updatedItem) return;

    const res = await fetch(`${import.meta.env.VITE_API_URL}/carts/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        quantity,
        actualPrice:
          (updatedItem.actualPrice / updatedItem.quantity) * quantity,
      }),
    });

    if (res.ok) {
      const updatedCart = cartItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity,
              actualPrice:
                (updatedItem.actualPrice / updatedItem.quantity) * quantity,
            }
          : item
      );
      setCartItems(updatedCart);
      mutate(`${import.meta.env.VITE_API_URL}/carts`);
    }
  };

  const removeItem = async (id) => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/carts/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      const updatedCart = cartItems.filter((item) => item.id !== id);
      setCartItems(updatedCart);
      mutate(`${import.meta.env.VITE_API_URL}/carts`);
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.actualPrice, 0);
  const tax = subtotal * taxRate;
  const total = subtotal + tax + shippingCost;

  if (error) return <div>Error loading cart</div>;
  if (!cartItems) return <div>Loading...</div>;

  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-32">
      <h1 className="text-3xl font-semibold mb-8 text-center">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div className="text-center">Your cart is empty</div>
      ) : (
        <div className="flex flex-col gap-6">
          {/* Cart Items */}
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row gap-6 items-center md:items-start"
            >
              <img
                src={item.images[0]}
                alt={item.title}
                width={120}
                height={150}
                className="rounded-md md:w-32 md:h-40"
              />
              <div className="flex flex-col w-full md:w-3/4">
                <div className="flex justify-between">
                  <span className="font-semibold text-lg">{item.title}</span>
                  <span className="text-lg">
                    ${item.actualPrice.toFixed(2)}
                  </span>
                </div>
                <div className="text-sm text-gray-500">{item.description}</div>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-2">
                    <button
                      className="px-2 py-1 bg-gray-200 rounded-sm"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="px-2 py-1 bg-gray-200 rounded-sm"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="text-red-500 text-sm"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Summary */}
          <div className="mt-8 border-t pt-6">
            <div className="flex flex-col sm:flex-row justify-between sm:gap-4">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between sm:gap-4 mt-2">
              <span>Tax (10%):</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between sm:gap-4 mt-2">
              <span>Shipping:</span>
              <span>${shippingCost.toFixed(2)}</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between sm:gap-4 font-semibold text-lg mt-4">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-end">
              <button
                className=" bg-primary text-white py-2 px-4 mt-6 rounded-md hover:bg-pink-600 transition"
                onClick={() => alert("Proceed to Checkout")}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
