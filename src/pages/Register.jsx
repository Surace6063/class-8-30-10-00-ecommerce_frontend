import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { newRequest } from "../utils/newRequest";
import toast from "react-hot-toast";

const Register = () => {
  const {register,handleSubmit} = useForm()

  const navigate = useNavigate()

  const onSubmit = async (data) =>{
    try {
      await newRequest.post('/auth/register/',data)
      toast.success("User registered sucessfully.")
      navigate('/login')
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 my-10">

      <div className="bg-white shadow-md rounded-lg px-8 py-10 w-full max-w-md">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Create Account</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-slate-700">First Name</label>
            <input
              {...register('first_name')}
              type="text"
              className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-500"
              placeholder="John"
            />
          </div>
          <div>
            <label className="block text-slate-700">Last Name</label>
            <input
            {...register('last_name')}
              type="text"
              className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-500"
              placeholder="Doe"
            />
          </div>
          <div>
            <label className="block text-slate-700">Email</label>
            <input
            {...register('email')}
              type="email"
              className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-500"
              placeholder="you@example.com"
            />
          </div>
           <div>
            <label className="block text-slate-700">Username</label>
            <input
            {...register('username')}
              type="text"
              className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-500"
              placeholder="user.."
            />
          </div>
          <div>
            <label className="block text-slate-700">Password</label>
            <input
            {...register('password')}
              type="password"
              className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-500"
              placeholder="••••••••"
            />
          </div>
          <div>
            <label className="block text-slate-700">Confirm Password</label>
            <input
            {...register('password2')}
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
