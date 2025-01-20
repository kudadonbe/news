import React from "react";
import vite from "../assets/vite.svg";
import react from "../assets/react.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const linkClass = ({isActive}) => isActive ? 'rounded-md bg-indigo-900 px-3 py-2 text-sm font-medium text-white' : 'rounded-md px-3 py-2 text-sm font-medium text-indigo-300 hover:bg-indigo-700 hover:text-white';


  return (
    <nav className="bg-indigo-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img className="h-8 w-auto" src={vite} alt="News" />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                <NavLink
                  to="/"
                  className={linkClass}
                  aria-current="page"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/users"
                  className={linkClass}
                >
                  Users
                </NavLink>
                <NavLink
                  to="/about"
                  className={linkClass}
                >
                  About
                </NavLink>
              </div>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="relative ml-3">
              <button
                type="button"
                className="relative flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-500"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <img
                  className="size-8 rounded-full"
                  src={react}
                  alt="profile"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
