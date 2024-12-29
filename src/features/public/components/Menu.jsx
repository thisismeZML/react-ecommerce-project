import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <img
        onClick={() => setIsOpen((prev) => !prev)}
        src="/menu.png"
        alt="menu"
        width={28}
        height={28}
        className="cursor-pointer"
      />
      {isOpen && (
        <div className="absolute bg-black text-white left-0 w-full top-20 h-[calc(100vh-80px)] text-xl flex items-center justify-center flex-col gap-8 z-10">
          <NavLink to="/">
            <div>Home</div>
          </NavLink>
          <NavLink to="shop">
            <div>Shop</div>
          </NavLink>
          <NavLink to="about">
            <div>About</div>
          </NavLink>
          <NavLink to="contact">
            <div>Contact</div>
          </NavLink>
          <NavLink to="/login">
            <div>Logout</div>
          </NavLink>
          <NavLink to="cart">
            <div>Cart (1)</div>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Menu;
