import React from "react";
import Users from "../components/Users";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="p-8">

    <div className="p-4 bg-indigo-300 rounded-lg">
      <h1 className="text-5xl font-bold">User Information</h1>
      <p className="text-2xl mt-4">
        Efficiently manage user data with React, Tailwind CSS, and data from API built with Laravel.
      </p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6">
        <Link to={"/users"}>
          View Users
        </Link>
      </button>
    </div>
    </div>
  );
};

export default HomePage;
