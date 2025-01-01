import React from "react";
import { useSearchParams } from "react-router-dom";

const Filter = () => {

  //   Filter
  const [searchParams, setSearchParams] = useSearchParams();
  const type = searchParams.get("type") || "";
  const category = searchParams.get("category") || "";
  const sort = searchParams.get("sort") || "";

  const handleTypeChange = (e) => {
    const newType = e.target.value;
    if (newType) {
      searchParams.set("type", newType);
    } else {
      searchParams.delete("type");
    }
    setSearchParams(searchParams);
  };

  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    if (newCategory) {
      searchParams.set("category", newCategory);
    } else {
      searchParams.delete("category");
    }
    setSearchParams(searchParams);
  };

  const handleSortChange = (e) => {
    const sortOrder = e.target.value;
    if (sortOrder) {
      searchParams.set("sort", sortOrder);
    } else {
      searchParams.delete("sort");
    }
    setSearchParams(searchParams);
  };

  const handleClearFilters = () => {
    searchParams.delete("type");
    searchParams.delete("category");
    searchParams.delete("sort");
    setSearchParams(searchParams);
  };

  // Check if any filter is active
  const isFilterApplied = type || category || sort;

  return (
    <div className="mt-12 flex justify-between items-center flex-wrap gap-8">
      <div className="flex items-center gap-6">
        {/* TYPE */}
        <select
          onChange={handleTypeChange}
          value={type}
          name="type"
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200"
        >
          <option value="">Type</option>
          <option value="Shirt">Shirt</option>
          <option value="T-Shirt">T-Shirt</option>
          <option value="Jacket">Jacket</option>
          <option value="Sweatshirt">Sweatshirt</option>
          <option value="Sweater">Sweater</option>
          <option value="Pants">Pants</option>
          <option value="Shorts">Shorts</option>
          <option value="Blazer">Blazer</option>
          <option value="Suit">Suit</option>
          <option value="Top">Top</option>
          <option value="Vest">Vest</option>
          <option value="Coat">Coat</option>
          <option value="Tracksuit">Tracksuit</option>
          <option value="Blouse">Blouse</option>
          <option value="Tank Top">Tank Top</option>
          <option value="Swimwear">Swimwear</option>
        </select>

        {/* CATEGORY */}
        <select
          onChange={handleCategoryChange}
          value={category}
          name="category"
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option value="">Category</option>
          <option value="Men's Clothing">Men's Clothing</option>
          <option value="Women's Clothing">Women's Clothing</option>
        </select>
      </div>

      {/* SORT & CLEAR */}
      <div className="flex items-center gap-4">
        <select
          name="sort"
          onChange={handleSortChange}
          value={sort}
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option value="">Sort By</option>
          <option value="asc">Price (Low to high)</option>
          <option value="desc">Price (High to low)</option>
        </select>
        {isFilterApplied && (
          <button
            onClick={handleClearFilters}
            className="py-2 px-4 bg-red-500 text-white rounded-2xl text-xs font-medium hover:bg-red-600"
          >
            Clear Filters
          </button>
        )}
      </div>
    </div>
  );
};

export default Filter;
