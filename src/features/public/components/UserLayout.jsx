import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-32 2xl:px-64 mt-12">
      <div className="flex flex-col md:grid md:grid-cols-6 gap-5">
        <ul className="col-span-2 flex flex-row md:flex-col gap-4 bg-gray-100 p-3">
          <NavLink to="." end className={({ isActive }) => (isActive ? "text-primary" : "")}>
            <li className="cursor-pointer">User Information</li>
          </NavLink>
          <NavLink to="setting" className={({ isActive }) => (isActive ? "text-primary" : "")}>
            <li className="cursor-pointer">Setting</li>
          </NavLink>
        </ul>
        <div className="col-span-4 p-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserLayout;
