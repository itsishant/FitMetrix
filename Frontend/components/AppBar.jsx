import { useNavigate } from "react-router-dom"
import { Workout } from "../pages/Workout";
import { PhotoDashboard } from "./PhotoDashboard";

export const AppBar = () => {
    const navigate = useNavigate();

    return(
<div className="fixed top-1 w-[94%] ml-10 z-50 flex justify-between items-center h-20 bg-slate-300 border-3 border-violet-600 rounded-3xl px-6">
<div className="m-6 text-5xl flex space-x-2">
            
                <p className="font-Poppin"> Fit</p> 
                <p className="text-violet-700 font-Poppin"> Metrix</p>
            </div>

            <div className="flex justify-between space-x-8 m-6">
                <div className="text-xl font-Poppin transition delay-1 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 ">
                   <button className="cursor-pointer  hover:bg-violet-400  p-2 rounded-2xl" onClick={() => {
                    setTimeout(() => {
                        navigate("/dashboard")
                    }, )
                   }}>Home</button>
                </div>
                <div className="text-center text-xl font-Poppin transition delay-150 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110">
                   <button className="cursor-pointer  hover:bg-violet-400 p-2 rounded-2xl "  onClick={() => {
                    setTimeout(() => {
                        navigate("/dashboard/workout");
                    },)
                   }}>Workouts</button>
                </div>
                <div className="text-center text-xl font-Poppin transition delay-1 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110">
                     <button className="cursor-pointer  hover:bg-violet-400  p-2 rounded-2xl " onClick={() => {
                        setTimeout(() => {
                            navigate("/dashboard/dietplan")
                        },)
                     }} >Diet Plan</button>
                </div>
                <div className="text-center text-xl font-Poppin transition delay-1 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110">
                     <button className="cursor-pointer  hover:bg-violet-400  p-2 rounded-2xl " >Contact Us</button>
                </div>
                <div className="text-center text-xl font-Poppin transition delay-1 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110">
                   <button className="cursor-pointer  hover:bg-violet-400  p-2 rounded-2xl " >AI Assistant</button>
                </div>
            </div>
            <div className="m-6 text-2xl font-Poppin">
                User
            </div>
        </div>
    )
}