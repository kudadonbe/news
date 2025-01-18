import React from "react";
import vite from "../assets/vite.svg";
import react from "../assets/react.svg";

const Navbar = () => {
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
                <a
                  href="#"
                  className="rounded-md bg-indigo-900 px-3 py-2 text-sm font-medium text-white"
                  aria-current="page"
                >
                  News
                </a>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-indigo-300 hover:bg-indigo-700 hover:text-white"
                >
                  Recent
                </a>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-indigo-300 hover:bg-indigo-700 hover:text-white"
                >
                  All
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
