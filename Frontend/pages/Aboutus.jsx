// AboutUs.jsx
import { useNavigate } from "react-router-dom";
import { AppBar } from "../components/AppBar";
import { motion } from "framer-motion";

export const AboutUs = () => {
  
  const navigate = useNavigate();

  return (
    <div>
      <AppBar />
      <div className="min-h-screen pt-20 sm:pt-20 md:pt-24 bg-slate-300 flex items-center justify-center px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="max-w-xs sm:max-w-md md:max-w-3xl lg:max-w-5xl w-full bg-slate-300 rounded-2xl sm:rounded-3xl  p-4 sm:p-6 md:p-8 lg:p-10 border border-violet-200 flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-10">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="flex-1 flex flex-col justify-center">
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-Poppin text-violet-700 mb-3 sm:mb-4 md:mb-5 lg:mb-6 text-center md:text-left">
              About FitMetrix
            </h1>
            
            <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-3 sm:mb-4 leading-relaxed text-center md:text-left">
              FitMetrix is your all-in-one fitness tracker, designed to help you stay consistent with workouts, monitor your progress, and stay motivated.
            </p>
            
            <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-3 sm:mb-4 leading-relaxed text-center md:text-left">
              Whether you're just starting or looking to level up, FitMetrix personalizes your experience with tailored routines and real-time tracking.
            </p>
            
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed text-center md:text-left">
              Built by passionate developers, our mission is to simplify fitness and make healthy living accessible to everyone.
            </p>

            {/* Credit to Developer */}
            <p className="text-gray-800 font-medium text-xs sm:text-sm md:text-base mt-4 text-center md:text-left italic">
              Crafted with ❤️ by Ishant
            </p>
            
            {/* Additional Features Section for Mobile */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
              className="mt-6 sm:mt-8 md:mt-10 space-y-3 sm:space-y-4">
              
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-violet-600 text-center md:text-left">
                Key Features
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-violet-100 p-3 sm:p-4 rounded-xl border border-violet-200">
                  <h3 className="font-semibold text-violet-700 text-sm sm:text-base mb-1 sm:mb-2">Workout Tracking</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">Monitor your daily exercises and progress</p>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-violet-100 p-3 sm:p-4 rounded-xl border border-violet-200">
                  <h3 className="font-semibold text-violet-700 text-sm sm:text-base mb-1 sm:mb-2">Diet Planning</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">Calculate BMI and plan your nutrition</p>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-violet-100 p-3 sm:p-4 rounded-xl border border-violet-200">
                  <h3 className="font-semibold text-violet-700 text-sm sm:text-base mb-1 sm:mb-2">Progress Analytics</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">Visualize your fitness journey</p>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-violet-100 p-3 sm:p-4 rounded-xl border border-violet-200">
                  <h3 className="font-semibold text-violet-700 text-sm sm:text-base mb-1 sm:mb-2">Custom Routines</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">Personalized workout plans</p>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Call to Action Button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
              className="mt-6 sm:mt-8 text-center md:text-left">
              
              <motion.button
              onClick={() => {
                setTimeout(() => {
                  navigate("/dashboard")
                }, 500)
                window.scrollTo(0,0)
              }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="bg-violet-600 hover:bg-violet-700 text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-xl transition-colors duration-200 text-sm sm:text-base">
                Start Your Journey
              </motion.button>
            </motion.div>
            
          </motion.div>
        </div>
      </div>
    </div>
  );
};
