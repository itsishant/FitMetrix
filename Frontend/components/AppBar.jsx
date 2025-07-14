import { useNavigate } from "react-router-dom"
    import { useEffect, useState } from "react";
import { nav } from "motion/react-client";
import { set } from "mongoose";


export const AppBar = () => {
    const navigate = useNavigate();
    const [activeButton, setActiveButton] = useState("home");
    //      document.body.style.backgroundColor = color;
    // }, [color])

    return(
<div className="fixed top-1 w-[94%] ml-10 z-50 flex justify-between items-center h-20 bg-slate-300 border-3 border-violet-600 rounded-3xl px-6">
<div className="m-6 text-5xl flex space-x-2">
            
                <p className="font-Poppin"> Fit</p> 
                <p className="text-violet-700 font-Poppin"> Metrix</p>
            </div>

            <div className="flex justify-between space-x-8 m-6">
                <div className="text-xl font-Poppin transition delay-1 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 ">
                   <button className={activeButton === "home" ? "cursor-pointer p-2 rounded-2xl bg-violet-400" : "cursor-pointer p-2 rounded-2xl hover:bg-violet-400"} onClick={() => {
                    setActiveButton("home");
                setTimeout(() => {
                        navigate("/dashboard")
                        
                    },200 )                    
                                   
                   }}>Home</button>
                </div>
                <div className="text-center text-xl font-Poppin transition delay-150 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110">
                   <button className={activeButton === "workout" ? "cursor-pointer p-2 rounded-2xl bg-violet-400" : "cursor-pointer p-2 rounded-2xl hover:bg-violet-400"}  onClick={() => {
                        setTimeout(() => {
                            navigate("/dashboard/workout")
                            setActiveButton("workout");
                        }, 200)
                   }}>Workouts</button>
                </div>
                <div className="text-center text-xl font-Poppin transition delay-1 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110">
                     <button className={activeButton === "dietplan" ? "cursor-pointer p-2 rounded-2xl bg-violet-400" : "cursor-pointer p-2 rounded-2xl hover:bg-violet-400"} onClick={() => {
                        
                        setTimeout(() => {
                            navigate("/dashboard/dietplan")
                            setActiveButton("dietplan");
                        }, 200)
                     }} >Diet Plan</button>
                </div>
                <div className="text-center text-xl font-Poppin transition delay-1 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110">
                     <button className={activeButton === "contactus" ? "cursor-pointer p-2 rounded-2xl bg-violet-400" : "cursor-pointer p-2 rounded-2xl hover:bg-violet-400"} 
                     onClick={() => {
                        setTimeout(() => {
                            navigate("/dashboard/contactus")
                            setActiveButton("contactus");
                        }   , 200)
                     }} >Contact Us</button>
                </div>
                <div className="text-center text-xl font-Poppin transition delay-1 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110">
                   <button className={activeButton === "ai" ? "cursor-pointer p-2 rounded-2xl bg-violet-400" : "cursor-pointer p-2 rounded-2xl hover:bg-violet-400"}
                   onClick={() => {
                    setTimeout(() => {
                        navigate("/dashboard/ai")
                        setActiveButton("ai");
                    }, 200)
                   }} >AI Assistant</button>
                </div>
            </div>
            <div className="m-6 text-2xl font-Poppin">
                User
            </div>
        </div>
    )
}