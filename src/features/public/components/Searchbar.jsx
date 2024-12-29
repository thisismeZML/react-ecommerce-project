import React from "react";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formdata = new FormData(e.currentTarget);
        const name = formdata.get("name");
        
        if(name) {
            navigate(`/shop?name=${name}`);
        } 
    }
  return (
    <form onSubmit={handleSubmit} className="flex item-center justify-between gap-4 bg-gray-100 rounded-md p-2 flex-1">
      <input name="name" type="text" placeholder="Search" className="bg-transparent outline-none focus-visible:outline-none flex-1" />
      <button className="cursor-pointer">
        <img src="/search.png" alt="search icon" width={16} height={16} />
      </button>
    </form>
  );
};

export default Searchbar;
