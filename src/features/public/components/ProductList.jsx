import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import useSWR, { useSWRConfig } from "swr";
import ProductSkeleton from "./ProductSkeleton";
import Pagination from "./Pagination";
import { CiHeart } from "react-icons/ci";
import toast from "react-hot-toast";
import { tailChase } from "ldrs";

tailChase.register();

const ProductList = () => {
  const [fetchUrl, setFetchUrl] = useState(
    `${import.meta.env.VITE_API_URL}/products`
  );

  const [addingStates, setAddingStates] = useState({}); // Keep track of individual product states

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data: products, isLoading } = useSWR(fetchUrl, fetcher);
  const { mutate } = useSWRConfig();

  // Handle AddToCart
  const addToCart = async (id) => {
    setAddingStates((prev) => ({ ...prev, [id]: true }));

    const currentProduct = products.find((product) => product.id === id);
    const cartRes = await fetch(`${import.meta.env.VITE_API_URL}/carts`);
    const cart = await cartRes.json();

    const existingProduct = cart.find((product) => product.id === id);

    // If product exists, update its quantity
    if (existingProduct) {
      const updatedQuantity = existingProduct.quantity + 1;

      const res = await fetch(`${import.meta.env.VITE_API_URL}/carts/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          quantity: updatedQuantity,
          actualPrice: currentProduct.actualPrice * updatedQuantity,
        }),
      });

      if (res.ok) {
        toast.success("Product quantity updated in the cart");
        mutate(`${import.meta.env.VITE_API_URL}/carts`);
      } else {
        toast.error("Failed to update product quantity");
      }

      setAddingStates((prev) => ({ ...prev, [id]: false }));
      return;
    }

    // If product does not exist, add it to the cart
    const res = await fetch(`${import.meta.env.VITE_API_URL}/carts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...currentProduct, quantity: 1 }),
    });

    if (res.ok) {
      toast.success("Product added to the cart");
      mutate(`${import.meta.env.VITE_API_URL}/carts`);
    } else {
      toast.error("Failed to add product to the cart");
    }

    setAddingStates((prev) => ({ ...prev, [id]: false }));
  };

  // Pagination setup
  const [currentPage, setCurrentPage] = useState(1);
  const productPerPage = 8;

  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;

  // Filter setup
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");
  const category = searchParams.get("category");
  const sort = searchParams.get("sort");
  const name = searchParams.get("name");

  // Apply filters first
  const filterProduct = products
    ?.filter((product) => {
      return (
        (type ? product.type === type : true) &&
        (category ? product.category === category : true)
      );
    })
    ?.sort((a, b) => {
      if (sort === "asc") return a.actualPrice - b.actualPrice;
      if (sort === "desc") return b.actualPrice - a.actualPrice;
      return 0;
    });

  // Pagination after filtering
  const currentProducts = filterProduct?.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const total = filterProduct?.length; // Update total to be the length of filtered products

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const skeletons = Array.from({ length: 8 }, (_, index) => index + 1);

  // Reset currentPage if the filter changes
  useEffect(() => {
    setCurrentPage(1); // Reset to page 1 when filters change
  }, [type, category, sort]);

  useEffect(() => {
    if (name) {
      setFetchUrl(`${import.meta.env.VITE_API_URL}/products?title_like=${name}`);
    } else {
      setFetchUrl(`${import.meta.env.VITE_API_URL}/products`);
    }
  }, [name]);

  return (
    <>
      <h1 className="mt-12 text-xl font-semibold">
        {category
          ? category === "Men's Clothing"
            ? "Men's Clothing"
            : "Women's Clothing"
          : "All Products"}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12">
        {isLoading
          ? skeletons.map((_, index) => <ProductSkeleton key={index} />)
          : currentProducts?.map((product) => (
              <div key={product.id} className="flex flex-col gap-4">
                <Link
                  to={`${product.id}`}
                  className="relative aspect-w-1 aspect-h-1"
                >
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="w-full h-full object-cover rounded-md"
                  />
                </Link>
                <div className="flex justify-between">
                  <span className="font-medium">{product.title}</span>
                  <span className="font-semibold">${product.actualPrice}</span>
                </div>
                <div className="text-sm text-gray-500 line-clamp-2">
                  {product.description}
                </div>
                <button
                  onClick={() => addToCart(product.id)}
                  className="rounded-2xl ring-1 ring-primary px-4 py-2 text-xs hover:bg-primary hover:text-white"
                >
                  {addingStates[product.id] ? (
                    <div className="flex items-center justify-center">
                      <l-tail-chase
                        size="15"
                        speed="1.75"
                        color="black"
                      ></l-tail-chase>
                      <span className="ml-2">Adding...</span>
                    </div>
                  ) : (
                    <span>Add to Cart</span>
                  )}
                </button>
              </div>
            ))}
      </div>
      {/* Pagination */}
      <Pagination
        total={total}
        productPerPage={productPerPage}
        paginate={paginate}
        currentPage={currentPage}
      />
    </>
  );
};

export default ProductList;
