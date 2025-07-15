import { AppBar } from "../components/AppBar"

export const DietPlan = () => {
    return(
        <div className="bg-slate-300 h-screen"> 
        <AppBar />
         <div className="text-6xl text-center pt-30 font-Poppin">
               <p className="text-black bg-violet-500 p-2 rounded-full inline-block px-6 py-3"> Diet planner </p> 
          </div>
        </div>
    )
}