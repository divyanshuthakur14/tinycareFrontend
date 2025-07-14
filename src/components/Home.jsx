import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-pink-50 px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-4 text-center">
        Welcome to TinyCare 👶
      </h1>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-md">
        Your trusted partner in baby health and wellness. Book appointments, access care tips, and more.
      </p>
      <div className="flex flex-col md:flex-row gap-4">
        <button
          onClick={() => navigate("/login")}
          className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full shadow-md transition"
        >
          Login
        </button>
        <button
          onClick={() => navigate("/signup")}
          className="bg-white border border-pink-500 hover:bg-pink-100 text-pink-600 px-6 py-3 rounded-full shadow-md transition"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Home;
