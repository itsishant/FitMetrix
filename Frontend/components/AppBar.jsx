import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { User } from "./User";

export const AppBar = () => {
    const navigate = useNavigate();
    const location = useLocation(); 
    const [activeButton, setActiveButton] = useState("home");
    const [workoutButton, setWorkoutButton] = useState("workouts");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const isActive = (path) => location.pathname === path;

    return(
        <>
            {/* Desktop AppBar */}
            <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="hidden lg:flex fixed top-1 left-1/2 transform -translate-x-1/2 backdrop-blur-xl bg-white/40 w-[90%] xl:w-[80%] z-50 justify-between items-center h-20 border-2 border-violet-600 rounded-3xl px-4 xl:px-6"
            >
                <div className="text-3xl xl:text-5xl flex space-x-2">
                    <p className="font-Poppin">Fit</p> 
                    <p className="text-violet-700 font-Poppin">Metrix</p>
                </div>

                <div className="flex justify-between space-x-4 xl:space-x-10">
                    <div className="text-lg xl:text-xl font-Poppin transition delay-1 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110">
                        <button 
                            className={isActive("/dashboard") ? "cursor-pointer p-2 rounded-2xl bg-violet-400" : "cursor-pointer p-2 rounded-2xl hover:bg-violet-400"} 
                            onClick={() => {
                                setActiveButton("home");
                                setTimeout(() => {
                                    navigate("/dashboard")
                                }, 200)   
                                window.scrollTo(0, 0);                 
                            }}  
                        >Home</button>
                    </div>
                    <div className="text-center text-lg xl:text-xl font-Poppin transition delay-150 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110">
                        <button 
                            className={isActive("/dashboard/workout") ? "cursor-pointer p-2 rounded-2xl bg-violet-400" : "cursor-pointer p-2 rounded-2xl hover:bg-violet-400"}  
                            onClick={() => {
                                setTimeout(() => {
                                    navigate("/dashboard/workout")
                                    setActiveButton("workout");
                                }, 200)
                                window.scrollTo(0, 0);
                            }}
                        >Workouts</button>
                    </div>
                    <div className="text-center text-lg xl:text-xl font-Poppin transition delay-1 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110">
                        <button 
                            className={isActive("/dashboard/dietplan") ? "cursor-pointer p-2 rounded-2xl bg-violet-400" : "cursor-pointer p-2 rounded-2xl hover:bg-violet-400"} 
                            onClick={() => {
                                setTimeout(() => {
                                    navigate("/dashboard/dietplan")
                                    setActiveButton("dietplan");
                                }, 200)
                                window.scrollTo(0, 0);
                            }} 
                        >Diet Plan</button>
                    </div>
                    <div className="text-center text-lg xl:text-xl font-Poppin transition delay-1 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110">
                        <button 
                            className={isActive("/dashboard/aboutus") ? "cursor-pointer p-2 rounded-2xl bg-violet-400" : "cursor-pointer p-2 rounded-2xl hover:bg-violet-400"} 
                            onClick={() => {
                                setTimeout(() => {
                                    navigate("/dashboard/aboutus")
                                    setActiveButton("aboutus");
                                }, 200)
                                window.scrollTo(0, 0);
                            }} 
                        >Discover</button>
                    </div>
                </div>

                <div className="text-center text-black text-base xl:text-lg font-Poppin transition delay-1 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110">
                    <button 
                        className="cursor-pointer p-2 rounded-2xl hover:bg-red-500 hover:text-white"
                        onClick={() => {
                            localStorage.removeItem("token")
                            setTimeout(() => {
                                navigate("/")
                                setActiveButton("ai");
                            }, 500)
                            window.scrollTo(0, 0);
                        }} 
                    >Logout</button>
                </div>

                <div className="fixed top-3 right-4 xl:right-8 z-50">
                    <div className="p-3 xl:p-4 bg-gray-300 border-2 border-violet-600 py-1 xl:py-2 text-2xl xl:text-3xl rounded-full font-Poppin shadow-lg">
                        <User />
                    </div>
                </div>
            </motion.div>

            {/* Mobile/Tablet AppBar */}
            <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="lg:hidden fixed top-1 left-1/2 transform -translate-x-1/2 backdrop-blur-xl bg-white/40 w-[95%] z-50 flex justify-center items-center h-16 sm:h-18 border-2 border-violet-600 rounded-3xl px-4"
            >
                <div className="text-3xl sm:text-3xl md:text-4xl flex space-x-1 sm:space-x-2">
                    <p className="font-Poppin">Fit</p> 
                    <p className="text-violet-700 font-Poppin">Metrix</p>
                </div>

                {/* Hamburger Menu Button */}
                <button
                    className="absolute right-4 flex flex-col space-y-1 p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <div className={`w-6 h-0.5 bg-violet-600 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                    <div className={`w-6 h-0.5 bg-violet-600 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
                    <div className={`w-6 h-0.5 bg-violet-600 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
                </button>
            </motion.div>

            {/* Mobile Menu Dropdown */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ 
                    opacity: isMobileMenuOpen ? 1 : 0, 
                    y: isMobileMenuOpen ? 0 : -20,
                    display: isMobileMenuOpen ? 'block' : 'none'
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="lg:hidden fixed top-20 left-1/2 transform -translate-x-1/2 backdrop-blur-xl bg-white/40 w-[95%] z-40 border-2 border-violet-600 rounded-3xl px-4 py-6"
            >
                <div className="flex flex-col space-y-4">
                    <div className="text-center text-lg sm:text-xl font-Poppin">
                        <button 
                            className={isActive("/dashboard") ? "cursor-pointer p-3 rounded-2xl bg-violet-400 w-full" : "cursor-pointer p-3 rounded-2xl hover:bg-violet-400 w-full"} 
                            onClick={() => {
                                setActiveButton("home");
                                setIsMobileMenuOpen(false);
                                setTimeout(() => {
                                    navigate("/dashboard")
                                }, 200)                    
                            }}  
                        >Home</button>
                    </div>
                    <div className="text-center text-lg sm:text-xl font-Poppin">
                        <button 
                            className={isActive("/dashboard/workout") ? "cursor-pointer p-3 rounded-2xl bg-violet-400 w-full" : "cursor-pointer p-3 rounded-2xl hover:bg-violet-400 w-full"}  
                            onClick={() => {
                                setIsMobileMenuOpen(false);
                                setTimeout(() => {
                                    navigate("/dashboard/workout")
                                    setActiveButton("workout");
                                }, 200)
                            }}
                        >Workouts</button>
                    </div>
                    <div className="text-center text-lg sm:text-xl font-Poppin">
                        <button 
                            className={isActive("/dashboard/dietplan") ? "cursor-pointer p-3 rounded-2xl bg-violet-400 w-full" : "cursor-pointer p-3 rounded-2xl hover:bg-violet-400 w-full"} 
                            onClick={() => {
                                setIsMobileMenuOpen(false);
                                setTimeout(() => {
                                    navigate("/dashboard/dietplan")
                                    setActiveButton("dietplan");
                                }, 200)
                            }} 
                        >Diet Plan</button>
                    </div>
                    <div className="text-center text-lg sm:text-xl font-Poppin">
                        <button 
                            className={isActive("/dashboard/aboutus") ? "cursor-pointer p-3 rounded-2xl bg-violet-400 w-full" : "cursor-pointer p-3 rounded-2xl hover:bg-violet-400 w-full"} 
                            onClick={() => {
                                setIsMobileMenuOpen(false);
                                setTimeout(() => {
                                    navigate("/dashboard/aboutus")
                                    setActiveButton("aboutus");
                                }, 200)
                            }} 
                        >Discover</button>
                    </div>
                    <div className="text-center text-black text-lg sm:text-xl font-Poppin border-t pt-4">
                        <button 
                            className="cursor-pointer p-3 rounded-2xl hover:bg-red-500 hover:text-white w-full"
                            onClick={() => {
                                localStorage.removeItem("token")
                                setIsMobileMenuOpen(false);
                                setTimeout(() => {
                                    navigate("/")
                                    setActiveButton("ai");
                                }, 500)
                            }} 
                        >Logout</button>
                    </div>
                </div>
            </motion.div>
        </>
    )
}