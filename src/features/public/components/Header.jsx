import React from "react";
import { NavLink } from "react-router-dom";
import Menu from "./Menu";
import Searchbar from "./Searchbar";
import NavIcons from "./NavIcons";

const Header = () => {
  return <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-63 relative">
    {/* Mobile Navbar */}
    <div className="h-full flex items-center justify-between md:hidden">
      <NavLink to="/">
        <div className="text-2xl tracking-wide">RAYY</div>
      </NavLink>
      <Menu/>
    </div>
    {/* Desktop Navbar */}
    <div className="hidden md:flex h-full items-center justify-between gap-8">
      {/* Left Side */}
      <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
        <NavLink to="/">
          <div className="text-2xl tracking-wide text-primary font-bold">RAYY</div>
        </NavLink>
        <div className="hidden xl:flex items-center gap-10">
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
        </div>
      </div>
      {/* Right Side */}
      <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
        <Searchbar/>
        <NavIcons/>
      </div>
    </div>
  </div>;
};

export default Header;
