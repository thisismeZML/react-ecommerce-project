import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import CartModal from "./CartModal";

const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const [isCartOpen, setisCartOpen] = useState(false);

  const navigate = useNavigate();

  const isLoggedIn = true;
  const handleProfile = () => {
    if (!isLoggedIn) {
      navigate("/login");
    }
    setIsProfileOpen((prev) => !prev);
  };

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <img
        src="/profile.png"
        alt="cart"
        width={22}
        height={22}
        className="cursor-pointer"
        onClick={handleProfile}
      />
      {isProfileOpen && (
        <div className="absolute bg-white p-4 top-12 left-0 rounded-md shadow-[0px_3px_10px_rgba(0,0,0,0.2)]">
          <NavLink to="/profile">
            <div>Profile</div>
          </NavLink>
          <NavLink to="/login">
            <div className="cursor-pointer mt-2">Logout</div>
          </NavLink>
        </div>
      )}
      <img
        src="/notification.png"
        alt="user"
        width={22}
        height={22}
        className="cursor-pointer"
      />
      <div className="relative cursor-pointer">
        <img
          src="/cart.png"
          alt="cart"
          width={22}
          height={22}
          className="cursor-pointer"
          onClick={() => setisCartOpen((prev) => !prev)}
        />
        <div className="absolute bg-primary text-white text-xs w-4 h-4 rounded-full flex items-center justify-center -top-3 -right-2">
          1
        </div>
      </div>
      {isCartOpen && <CartModal />}
    </div>
  );
};

export default NavIcons;