import React from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const Breadcrumb = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Split the pathname into parts
  const pathParts = location.pathname.split("/").filter((part) => part);

  // Define a mapping for custom breadcrumb labels
  const breadcrumbLabels = {
    product: "Edit Product",
    voucher: "Voucher Detail",
  };

  const breadcrumbs = pathParts.map((part, index) => {
    const path = `/${pathParts.slice(0, index + 1).join("/")}`;

    const isDynamicRoute = !isNaN(part);
    const parentSegment = pathParts[index - 1];
    const name = isDynamicRoute
      ? breadcrumbLabels[parentSegment]
      : part.charAt(0).toUpperCase() + part.slice(1);

    const isActive = location.pathname === path;

    return (
      <li key={index} className="inline-flex items-center">
        {!isDynamicRoute && index < pathParts.length - 1 ? (
          <Link
            to={path}
            className={`${
              isActive ? "text-primary font-semibold" : "text-gray-500"
            } hover:text-blue-600 hover:underline transition duration-150`}
          >
            {name}
          </Link>
        ) : (
          <span
            className={`${
              isActive ? "text-primary font-semibold" : "text-gray-500"
            }`}
          >
            {name}
          </span>
        )}
        {index < pathParts.length - 1 && (
          <span className="mx-2 text-gray-400">/</span>
        )}
      </li>
    );
  });

  return (
    <div className="flex items-center justify-between mb-4">
      {/* Breadcrumb Navigation */}
      <nav aria-label="breadcrumb">
        <ol className="flex flex-wrap list-none p-0">{breadcrumbs}</ol>
      </nav>

      {/* Back and Forward Buttons */}
      {/* <div className="flex gap-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition duration-150"
        >
          <FiArrowLeft />
        </button>
        <button
          onClick={() => navigate(1)}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition duration-150"
        >
          <FiArrowRight />
        </button>
      </div> */}
    </div>
  );
};

export default Breadcrumb;
