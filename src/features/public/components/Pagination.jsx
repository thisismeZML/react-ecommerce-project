import React from "react";

const Pagination = ({ total, paginate, productPerPage, currentPage }) => {
  const totalPages = Math.ceil(total / productPerPage);

  return (
    <div className="mt-7">
      <div className="flex justify-end gap-4">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-primary text-white py-2 px-4 rounded-md disabled:opacity-60 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="bg-primary text-white py-2 px-4 rounded-md disabled:opacity-60 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
