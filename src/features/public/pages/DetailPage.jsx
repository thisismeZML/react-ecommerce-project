import React from "react";
import ProductImage from "../components/ProductImage";
import CustomizeProduct from "../components/CustomizeProduct";
import Add from "../components/Add";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import Breadcrumb from "../components/Breadcrumb";
import DetailLoader from "../components/DetailLoader";

const DetailPage = () => {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { id } = useParams();

  const { data: product, isLoading } = useSWR(
    `${import.meta.env.VITE_API_URL}/products/${id}`,
    fetcher
  );
  console.log(product);

  return (
    <>
      {isLoading ? (
        <DetailLoader />
      ) : (
        <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 ">
          <Breadcrumb />
          <div className="relative flex flex-col lg:flex-row gap-16">
            {/* IMAGE */}
            <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
              <ProductImage images={product?.images} />
            </div>
            {/* DESCRIPTION */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <h1 className="text-4xl font-medium">{product?.title}</h1>
              <p className="text-gray-500">{product?.description}</p>
              <div className="h-[2px] bg-gray-100" />
              <div className="flex items-center gap-4">
                <h3 className="text-xl text-gray-500 line-through">
                  ${product?.actualPrice}
                </h3>
                <h2 className="font-medium text-2xl">
                  ${product?.discountPrice}
                </h2>
              </div>
              <div className="h-[2px] bg-gray-100" />
              <CustomizeProduct colors={product?.color} sizes={product?.size} />
              <Add stock={product?.stock} productId={product?.id} />
              <div className="h-[2px] bg-gray-100" />
              <div className="text-sm">
                <h4 className="font-medium mb-4">Product Info</h4>
                <p>
                  Discover the perfect blend of quality and style with this
                  product. Designed with premium materials and attention to
                  detail, it offers exceptional durability and comfort. Ideal
                  for any occasion, this product ensures you look and feel your
                  best.
                </p>
              </div>
              <div className="text-sm">
                <h4 className="font-medium mb-4">Return & Refund Policy</h4>
                <p>
                  Your satisfaction is our priority. If you're not completely
                  happy with your purchase, you can return it within 30 days of
                  delivery for a full refund or exchange. Items must be unused
                  and in their original packaging. Please refer to our detailed
                  return policy for more information.
                </p>
              </div>
              <div className="text-sm">
                <h4 className="font-medium mb-4">Shipping Info</h4>
                <p>
                  Enjoy fast and reliable shipping for all your orders. Most
                  items are dispatched within 1-2 business days, with estimated
                  delivery times of 3-7 business days depending on your
                  location. International shipping options are also available.
                  Stay updated with tracking information provided after
                  purchase.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailPage;
