"use client";
import { useState } from "react";
import useSWR, { useSWRConfig } from "swr";
import { tailChase } from "ldrs";
import toast from "react-hot-toast";

tailChase.register();

const Add = ({ stock, productId }) => {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { mutate } = useSWRConfig();
  const { data: products } = useSWR(`${import.meta.env.VITE_API_URL}/products`, fetcher);

  const [addingStates, setAddingStates] = useState({});
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (action) => {
    if (action === "d" && quantity > 1) {
      setQuantity(quantity - 1);
    } else if (action === "i" && quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const addToCart = async (id) => {
  try {
    setAddingStates((prev) => ({ ...prev, [id]: true }));

    const currentProduct = products?.find((product) => product.id === id);
    if (!currentProduct) {
      toast.error("Product not found");
      setAddingStates((prev) => ({ ...prev, [id]: false }));
      return;
    }

    const cartRes = await fetch(`${import.meta.env.VITE_API_URL}/carts`);
    const cart = await cartRes.json();

    const existingProduct = cart?.find((product) => product.id === id);

    if (existingProduct) {
      const updatedQuantity = existingProduct.quantity + quantity;

      const res = await fetch(`${import.meta.env.VITE_API_URL}/carts/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          quantity: updatedQuantity,
          actualPrice: currentProduct.actualPrice * updatedQuantity,
        }),
      });

      if (!res.ok) throw new Error("Failed to update product quantity");

      toast.success("Product quantity updated in the cart");
    } else {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/carts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...currentProduct,
          quantity,
          actualPrice: currentProduct.actualPrice * quantity,
        }),
      });

      if (!res.ok) throw new Error("Failed to add product to the cart");

      toast.success("Product added to the cart");
    }

    mutate(`${import.meta.env.VITE_API_URL}/carts`);
  } catch (error) {
    console.error("Error in addToCart:", error);
    toast.error(error.message || "Something went wrong");
  } finally {
    setAddingStates((prev) => ({ ...prev, [id]: false }));
  }
};

  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium">Choose Quantity</h4>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 p-2 px-4 rounded-3xl flex items-center justify-between w-32">
            <button
              onClick={() => handleQuantity("d")}
              className=" cursor-pointer text-xl"
            >
              -
            </button>
            {quantity}
            <button
              onClick={() => handleQuantity("i")}
              className=" cursor-pointer text-xl"
            >
              +
            </button>
          </div>
          <div className="text-xs">
            Only <span className="text-orange-500">{stock} items</span> left{" "}
            <br /> {"Don't"} miss it
          </div>
        </div>
        <button
          onClick={() => addToCart(productId)} // Pass the correct `id`
          className="w-36 text-sm rounded-3xl ring-1 ring-primary py-2 px-4 hover:bg-primary hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:text-white disabled:ring-none"
        >
          {addingStates[productId] ? (
            <div className="flex items-center justify-center">
              <l-tail-chase size="20" speed="1.75" color="black"></l-tail-chase>
              <span className="ml-2">Adding...</span>
            </div>
          ) : (
            <span>Add to Cart</span>
          )}
        </button>
      </div>
    </div>
  );
};

export default Add;
