import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "motion/react";
import API from "../src/axios";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  let navigate = useNavigate();

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-white via-slate-300 to-slate-300">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-wide"
      >
        <span className="text-violet-700 font-Poppin">Fit</span>
        <span className="font-Poppin"> Metrix</span>
      </motion.h1>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col md:flex-row w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden h-[80%]"
      >
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="hidden md:flex md:w-1/2"
        >
          <img
            src="fitness.jpg"
            alt="Fitness"
            className="object-cover w-full h-full"
          />
        </motion.div>

        <div className="w-full md:w-1/2 p-10 sm:p-14 flex flex-col justify-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-10">
            Sign In
          </h2>
          <form className="flex flex-col gap-6">
            <input
              type="email"
              placeholder="Email"
              className="p-4 rounded-xl border border-gray-300 bg-slate-50 focus:ring-2 focus:ring-violet-600 focus:outline-none text-lg"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="p-4 rounded-xl border border-gray-300 bg-slate-50 focus:ring-2 focus:ring-violet-600 focus:outline-none text-lg"
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && (
              <p className="text-red-600 text-sm text-center">{error}</p>
            )}

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="w-full bg-violet-700 text-white py-4 rounded-xl font-semibold text-xl shadow-md hover:bg-violet-800 transition"
              onClick={async (e) => {
                e.preventDefault();
                setError("");

                if (!email || !password) {
                  setError("Please fill all the fields");
                  return;
                }

                if (!validateEmail(email)) {
                  setError("Please enter the correct email");
                  return;
                }

                try {
                  const response = await API.post(
                    "/user/signin",
                    { email, password }
                  );

                  if (response.data?.token) {
                    localStorage.setItem("token", response.data.token);
                    setTimeout(() => {
                      navigate("/dashboard");
                    }, 1000);
                  } else {
                    setError(response.data?.message || "User not exists");
                  }
                } catch (error) {
                  setError(error.response?.data?.message || "Login failed");
                }
              }}
            >
              Login
            </motion.button>
          </form>

          <p className="text-gray-500 text-center mt-6 text-sm">
            Don't have an account?{" "}
            <span
              className="text-violet-600 cursor-pointer hover:underline"
              onClick={() => {
                navigate("/");
              }}
            >
              Sign Up
            </span>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Signin;
