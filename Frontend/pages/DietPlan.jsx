import { AppBar } from "../components/AppBar"
import { SeachBar } from "../components/SearchBar"
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
    <svg aria-hidden="true" class="w-18 h-18 text-gray-200 animate-spin dark:text-gray-600 fill-blue-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="sr-only">Loading...</span>
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
    <div className="text-4xl font-Poppin text-blue-600 mt-4">{category}</div>
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
        <div className="bg-slate-300 relative h-screen"
         style={{
    boxShadow:
      "10px 1px 1px rgba(0,0,0,0.05), 0px 4px 6px rgba(34,42,53,0.04), 8px 24px 68px rgba(47,48,55,0.05), 0px 2px 3px rgba(0,0,0,0.04)",
  }}> 
        <AppBar />
         <div className="text-6xl text-center pt-30 font-Poppin">
            
               <p className="text-black bg-violet-500  p-2 rounded-full inline-block px-6 py-3 "> Diet Planner </p> 
          </div>
          
          <div className="absolute left-50 md:left-18 text-5xl flex items-center top-80 text-center pt-10 font-Poppin">
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

            <motion.div className="" >

                <motion.input
                initial={{opacity:0 , y:0}}
                animate={{ opacity:1, y:10}} 
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                 type="weight"
                  placeholder="                             WEIGHT (KG)" className="shadow-10_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),8_24px_68px_rgba(47,48,55.8.
05),0_2px_3px_rgba(0,0,0,0.04)1 text-black text-lg absolute right-45 bottom-88  rounded-md w-90 font-Poppin bg-slate-400 p-4  "
                    onChange={(e) => {
                      setWeight(e.target.value);
                    }} />
                    <motion.input
                    initial={{opacity:0 , y:10}}
                animate={{ opacity:1, y:0 }} 
                whileHover={{ scale: 1.04 }}
                transition={{duration: 0.4, ease: "easeInOut" }}
                 type="height" placeholder="                            HEIGHT (CM)" className="shadow-10_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),8_24px_68px_rgba(47,48,55.8.

05),0_2px_3px_rgba(0,0,0,0.04)1 absolute right-45 bottom-65 rounded-md text-lg block w-90 font-Poppin bg-slate-400 p-4 "
                    onChange={(e) => {
                      setHeight(e.target.value);
                    }}
                    />
          


            </motion.div>

            <motion.div 
             >
              <motion.button 

              initial={{
                opacity:0, y:0
              }}

              animate={{
                opacity:1, y:0
              }}
              
            whileHover={{
              rotateX: 20,
              rotateY:10,
              y:-12
              
             
            }}
            whileTap={{
              y:0
            }}
            style={{
              translateZ:100
            }}           
            transition={{
              duration:0.3, ease:"easeInOut"
            }}
           motion className="cursor-pointer absolute bottom-45 left-20 w-70  rounded-xl bg-gray-900 text-neutral-300 text-5xl font-Poppin p-6 hover:text-blue-500"
           
           onClick={Handleclick}

           >  GET BMI </motion.button>
          <div className="absolute right-200 bottom-49">{loader} </div>
           {bmi && <motion.div
           className="absolute right-190  font-Poppin bottom-40 text-7xl"

           >{bmi} </motion.div>}
           {error && <motion.span 
           initial={{
            opacity:1, x:[0]
           }}
           
           animate={{
            opacity:1, x:[-3,3,-3,3 ,]
           }} 
           transition={{
            duration:0.2,
            repeat:1
           }} 
           className="text-red-500 text-2xl font-Poppin absolute right-68 bottom-52"> {error} </motion.span>}
            </motion.div>
            
        </div>
    )
}