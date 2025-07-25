
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { nav } from "motion/react-client";
import { set } from "mongoose";

export const AppBar = () => {
    const navigate = useNavigate();
    const location = useLocation(); 
    const [activeButton, setActiveButton] = useState("home");
    const [workoutButton, setWorkoutButton] = useState("workouts");

    const isActive = (path) => location.pathname === path;

    return(
<motion.div
initial={{
    opacity:0, y:0
}}
animate={{
    opacity:1, y:0
}}
transition={{
    duration:0.2, ease:"easeInOut"
}}
className="fixed top-1 left-1/2 transform -translate-x-1/2 backdrop-blur-xl bg-white/40 w-[90%] z-50 flex justify-between items-center h-20 border-2 border-violet-600 rounded-full px-6">
     <div className="m-6 text-5xl flex space-x-2 ">
        <p className="font-Poppin"> Fit</p> 
        <p className="text-violet-700 font-Poppin"> Metrix</p>
    </div>

    <div 
    className="flex justify-between space-x-8 m-6">
        <div className="text-xl font-Poppin transition delay-1 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 ">
            <button 
                className={isActive("/dashboard") ? "cursor-pointer p-2 rounded-2xl bg-violet-400" : "cursor-pointer p-2 rounded-2xl hover:bg-violet-400"} 
                onClick={() => {
                    setActiveButton("home");
                    setTimeout(() => {
                        navigate("/dashboard")
                    },200 )                    
                }}  
            >Home</button>
        </div>
        <div className="text-center text-xl font-Poppin transition delay-150 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110">
            <button 
                className={isActive("/dashboard/workout") ? "cursor-pointer p-2 rounded-2xl bg-violet-400" : "cursor-pointer p-2 rounded-2xl hover:bg-violet-400"}  
                onClick={() => {
                    setTimeout(() => {
                        navigate("/dashboard/workout")
                        setActiveButton("workout");
                    }, 200)
                }}
            >Workouts</button>
        </div>
        <div className="text-center text-xl font-Poppin transition delay-1 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110">
            <button 
                className={isActive("/dashboard/dietplan") ? "cursor-pointer p-2 rounded-2xl bg-violet-400" : "cursor-pointer p-2 rounded-2xl hover:bg-violet-400"} 
                onClick={() => {
                    setTimeout(() => {
                        navigate("/dashboard/dietplan")
                        setActiveButton("dietplan");
                    }, 200)
                }} 
            >Diet Plan</button>
        </div>
        <div className="text-center text-xl font-Poppin transition delay-1 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110">
            <button 
                className={isActive("/dashboard/aboutus") ? "cursor-pointer p-2 rounded-2xl bg-violet-400" : "cursor-pointer p-2 rounded-2xl hover:bg-violet-400"} 
                onClick={() => {
                    setTimeout(() => {
                        navigate("/dashboard/aboutus")
                        setActiveButton("aboutus");
                    } , 200)
                }} 
            >About us</button>
        </div>
        <div className="text-center text-xl font-Poppin transition delay-1 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110">
            <button 
                className={isActive("/dashboard/ai") ? "cursor-pointer p-2 rounded-2xl bg-violet-400" : "cursor-pointer p-2 rounded-2xl hover:bg-violet-400"}
                onClick={() => {
                    setTimeout(() => {
                        navigate("/dashboard/ai")
                        setActiveButton("ai");
                    }, 200)
                }} 
            >AI Assistant</button>
        </div>
    </div>
    <div className="m-6 text-2xl font-Poppin">
        User
    </div>
</motion.div>
    )
}
