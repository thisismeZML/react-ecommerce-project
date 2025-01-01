import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const value = e.target.value.trim(); // Remove leading/trailing spaces
    setSearchText(value);

    // Dynamically update the URL
    if (value) {
      navigate(`/shop?name=${value}`);
    } else {
      navigate("/shop"); // Remove 'name' parameter if the input is empty
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Prevent page refresh on Enter
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-between gap-4 bg-gray-100 rounded-md p-2 flex-1">
      <input
        name="name"
        type="text"
        placeholder="Search"
        value={searchText}
        onChange={handleInputChange}
        className="bg-transparent outline-none focus-visible:outline-none flex-1"
      />
      <button type="submit" className="cursor-pointer">
        <img src="/search.png" alt="search icon" width={16} height={16} />
      </button>
    </form>
  );
};

export default Searchbar;
