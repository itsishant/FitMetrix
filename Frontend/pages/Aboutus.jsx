// AboutUs.jsx

import { AppBar } from "../components/AppBar";
import { motion } from "framer-motion";

export const AboutUs = () => {
  return (
    <div className="min-h-screen pt-24 bg-slate-300 flex items-center justify-center px-4">
      <AppBar />
      <div className="max-w-5xl w-full bg-slate-200 rounded-3xl shadow-2xl p-10 border border-violet-200 flex flex-col md:flex-row gap-10">
        
        {/* Left section – text */}
        <motion.div
        initial={{opacity:0, scale:0.98}}
        animate={{opacity:1, scale:1}}
        transition={{duration:0.4, ease:"easeInOut"}}
        className="flex-1 flex flex-col justify-center">
          <h1 className="text-5xl font-extrabold text-violet-700 mb-6">About FitMetrix</h1>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed">
            FitMetrix is your all-in-one fitness tracker, designed to help you stay consistent with workouts, monitor your progress, and stay motivated.
          </p>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed">
            Whether you're just starting or looking to level up, FitMetrix personalizes your experience with tailored routines and real-time tracking.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Built by passionate developers, our mission is to simplify fitness and make healthy living accessible to everyone.
          </p>
        </motion.div>

        {/* Right section – image or illustration */}
        
        
      </div>
    </div>
  );
};
