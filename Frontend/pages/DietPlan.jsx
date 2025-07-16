import { AppBar } from "../components/AppBar"
import { SeachBar } from "../components/SearchBar"
import RotatingText from "../components/TrueFocus"
import { motion } from "framer-motion"
import Home from "../components/Spline3D"

export const DietPlan = () => {
    return(
        <div className="bg-slate-300 h-screen"
         style={{
    boxShadow:
      "10px 1px 1px rgba(0,0,0,0.05), 0px 4px 6px rgba(34,42,53,0.04), 8px 24px 68px rgba(47,48,55,0.05), 0px 2px 3px rgba(0,0,0,0.04)",
  }}> 
        <AppBar />
         <div className="text-6xl text-center pt-30 font-Poppin">
            
               <p className="text-black bg-violet-500  p-2 rounded-full inline-block px-6 py-3 "> Diet Planner </p> 
          </div>

          <div className="absolute left-50 text-5xl flex items-center top-80 text-center pt-10 font-Poppin">
            KNOW YOUR <p className="  p-4 rounded-full ml-2"> <RotatingText
  texts={['BODY MASS INDEX', 'HEALTH WEIGHT RATIO']}
  mainClassName="px-2 sm:px-2 md:px-3 bg-blue-500 text-black overflow-hidden p-4 sm:py-1  md:py-2 justify-center rounded-md"
  staggerFrom={"last"}
  
  initial={{ y: "100%" }}
  animate={{ y: 0 }}
  exit={{ y: "-120%" }}
  staggerDuration={0.025}
  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
  transition={{ type: "spring", damping: 30, stiffness: 400 }}
  rotationInterval={2000}
/> </p> 
          </div>

          <div className="">
            <SeachBar />
            </div>

            <motion.div>

                <motion.input
                initial={{opacity:0 , y:0}}
                animate={{ opacity:1, y:10}} 
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                 type="search" placeholder="                             WEIGHT (KG)" className="shadow-10_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),8_24px_68px_rgba(47,48,55.8.

05),0_2px_3px_rgba(0,0,0,0.04)1 text-black text-lg absolute right-110 bottom-148  rounded-md w-90 font-Poppin bg-slate-400 p-4  " />
                    <motion.input
                    initial={{opacity:0 , y:10}}
                animate={{ opacity:1, y:0 }} 
                whileHover={{ scale: 1.04 }}
                transition={{duration: 0.4, ease: "easeInOut" }}
                 type="search" placeholder="                            HEIGHT (CM)" className="shadow-10_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),8_24px_68px_rgba(47,48,55.8.

05),0_2px_3px_rgba(0,0,0,0.04)1 absolute right-110 bottom-125 rounded-md text-lg block w-90 font-Poppin bg-slate-400 p-4 " />
            
       <div className="absolute right-0 bottom-100 w-[400px] h-[320px]  overflow-hidden rounded-xl">
  <Home />
</div>


            </motion.div>
            
        </div>
    )
}