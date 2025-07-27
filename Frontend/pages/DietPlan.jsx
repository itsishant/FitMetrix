import { AppBar } from "../components/AppBar"
import RotatingText from "../components/TrueFocus"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { BMI } from "../components/BMI"
import CountUp from "../components/Counter"
import { useNavigate } from "react-router-dom"

export const DietPlan = () => {

  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmi, setBmi] = useState();
  const [error, setError] = useState();
  const [loader, setLoader] = useState();
  const [category, setCategory] = useState("");

      const navigate = useNavigate();
  
      useEffect(() => {
          const checkToken = async () => {
          const token = localStorage.getItem("token");
          if(!token){
              setTimeout(() => {
                  alert("Hold up! You need an account to see this")
                  navigate("/");
              }, 2000)
          }
      };
  
      checkToken();
      }, [])

  const lodingComp = <div role="status">
    <svg aria-hidden="true" className="w-12 h-12 sm:w-16 sm:h-16 md:w-18 md:h-18 text-gray-200 animate-spin dark:text-gray-600 fill-blue-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span className="sr-only">Loading...</span>
</div>
 
  const Handleclick = () =>{
    if(weight && height){
      setLoader(lodingComp);
      setBmi();
      setTimeout(() => {
const result = Math.round((weight * 10000) / (height * height) * 10) / 10;
let category = "";

if (result < 18.5) category = "UNDERWEIGHT";
else if (result < 25) category = "NORMAL";
else if (result < 30) category = "OVERWEIGHT";
else if (result < 35) category = "OBESITY I";
else if (result < 40) category = "OBESITY II";
else category = "Obesity III";      
setBmi(
  <div className="text-center">
    <CountUp
      from={0}
      to={result}
      separator=","
      direction="up"
      duration={1}
      className="count-up-text"
    />
    <div className="text-2xl sm:text-3xl md:text-4xl font-Poppin text-blue-600 mt-2 sm:mt-3 md:mt-4">{category}</div>
  </div>
);

      setError();
      setLoader();
      },500)
    }
    else{
      const message = "⚠️ Fill all fields"
      setError(message);
    }
  }



    return(
        <div className="bg-slate-300 relative min-h-screen overflow-hidden"
         style={{
    boxShadow:
      "10px 1px 1px rgba(0,0,0,0.05), 0px 4px 6px rgba(34,42,53,0.04), 8px 24px 68px rgba(47,48,55,0.05), 0px 2px 3px rgba(0,0,0,0.04)",
  }}> 
        <AppBar />
        
         {/* Main Title - Responsive */}
         <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-center pt-28 sm:pt-20 md:pt-24 lg:pt-30 font-Poppin px-4">
            <p className="text-black bg-violet-500 p-2 rounded-full inline-block px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3"> 
              Diet Planner 
            </p> 
          </div>
          
          {/* Know Your BMI Section - Responsive */}
          <div className="flex flex-col sm:flex-row items-center justify-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-8 sm:mt-12 md:mt-16 lg:mt-20 text-center px-4 font-Poppin">
            <span className="mb-2 sm:mb-0 sm:mr-2">KNOW YOUR</span>
            <div className="p-2 sm:p-3 md:p-4 rounded-full">
              <RotatingText
                texts={['BODY MASS INDEX', 'HEALTH WEIGHT RATIO']}
                mainClassName="px-2 sm:px-3 md:px-4 bg-blue-500 text-black overflow-hidden p-2 sm:p-3 md:p-4 justify-center rounded-md text-2xl sm:text-base md:text-4xl lg:text-4xl"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </div>
          </div>



          {/* Input Fields - Responsive Layout */}
          <div className="flex flex-col items-center space-y-4 sm:space-y-6 mt-8 sm:mt-12 md:mt-16 px-4">
            <motion.input
              initial={{opacity:0 , y:0}}
              animate={{ opacity:1, y:10}} 
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              type="number"
              placeholder="WEIGHT (KG)" 
              className="text-black text-sm sm:text-base md:text-lg rounded-md w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg font-Poppin bg-slate-400 p-3 sm:p-4 text-center placeholder:text-gray-700 shadow-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              onChange={(e) => {
                setWeight(e.target.value);
              }} 
            />
            
            <motion.input
              initial={{opacity:0 , y:10}}
              animate={{ opacity:1, y:0 }} 
              whileHover={{ scale: 1.04 }}
              transition={{duration: 0.4, ease: "easeInOut" }}
              type="number" 
              placeholder="HEIGHT (CM)" 
              className="text-black text-sm sm:text-base md:text-lg rounded-md w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg font-Poppin bg-slate-400 p-3 sm:p-4 text-center placeholder:text-gray-700 shadow-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              onChange={(e) => {
                setHeight(e.target.value);
              }}
            />
          </div>

          {/* Button and Results Section - Responsive */}
          <div className="flex flex-col items-center mt-8 sm:mt-12 md:mt-16 px-4">
            <motion.button 
              initial={{ opacity:0, y:0 }}
              animate={{ opacity:1, y:0 }}
              whileHover={{
                rotateX: 20,
                rotateY:10,
                y:-12
              }}
              whileTap={{ y:0 }}
              style={{ translateZ:100 }}           
              transition={{ duration:0.3, ease:"easeInOut" }}
              className="cursor-pointer w-full max-w-xs sm:max-w-sm md:max-w-md rounded-xl bg-gray-900 text-neutral-300 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-Poppin p-4 sm:p-5 md:p-6 hover:text-blue-500 mb-6 sm:mb-8"
              onClick={Handleclick}
            >  
              GET BMI 
            </motion.button>
            
            {/* Loading Indicator */}
            {loader && (
              <div className="mb-6 sm:mb-8">
                {loader}
              </div>
            )}
            
            {/* BMI Result */}
            {bmi && (
              <motion.div className="text-center font-Poppin text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 sm:mb-8">
                {bmi}
              </motion.div>
            )}
            
            {/* Error Message */}
            {error && (
              <motion.span 
                initial={{ opacity:1, x:[0] }}
                animate={{ opacity:1, x:[-3,3,-3,3] }} 
                transition={{ duration:0.2, repeat:1 }} 
                className="text-red-500 text-lg sm:text-xl md:text-2xl font-Poppin text-center"
              > 
                {error} 
              </motion.span>
            )}
          </div>
            
        </div>
    )
}