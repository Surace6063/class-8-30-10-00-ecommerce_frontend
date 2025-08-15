import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-slate-50 my-10">
      <div className="bg-white shadow-md rounded-lg px-8 py-10 w-full max-w-md">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Create Account</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-slate-700">First Name</label>
            <input
              type="text"
              className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-500"
              placeholder="John"
            />
          </div>
          <div>
            <label className="block text-slate-700">Last Name</label>
            <input
              type="text"
              className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-500"
              placeholder="Doe"
            />
          </div>
          <div>
            <label className="block text-slate-700">Email</label>
            <input
              type="email"
              className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-slate-700">Password</label>
            <input
              type="password"
              className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-500"
              placeholder="••••••••"
            />
          </div>
          <div>
            <label className="block text-slate-700">Confirm Password</label>
            <input
              type="password"
              className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-500"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-slate-800 text-white py-2 rounded hover:bg-slate-700 transition"
          >
            Register
          </button>
        </form>
        <p className="text-sm text-slate-600 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-slate-800 font-medium hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
