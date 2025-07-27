import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { AppBar } from '../components/AppBar';
import { useState, useEffect } from 'react';
import { workouts } from '../src/assets/workoutData';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const Workout = () => {

  const [search, setSearch] = useState("");
  const [selectedWorkout, setSelectedWorkout] = useState(null); 
  const [filterWorkout, setFilterWorkout] = useState(false);
  const location = useLocation();
  const [filterbutton, setFilterButton] = useState([]);

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

const filterWorkouts = workouts.filter((work) => {
  const matchesSearch = work.name.toLowerCase().includes(search.toLowerCase());
  const matchesFilter =
    filterbutton === "default" || filterbutton.length === 0 || filterbutton.includes(work.type?.toLowerCase());
  return matchesSearch && matchesFilter;
});

 

    const toggleFilter = (type) => {
  setFilterButton((prev) =>
    prev.includes(type)
      ? prev.filter((item) => item !== type)
      : [...prev, type]
  );
};



  return (
    <motion.div
    className='bg-gradient-to-r from-slate-300 to-slate-300 min-h-screen'>
      <AppBar />
      
  {/* Header Section - Enhanced Mobile Responsive */}
  <div className="flex justify-center items-center space-x-2 sm:space-x-4 px-2 sm:px-4">
    <FontAwesomeIcon icon={faDumbbell} className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl mt-16 sm:mt-18 md:mt-20 lg:mt-26 rotate-105 vibrate" />
    <p className="font-Poppin text-xl sm:text-2xl md:text-3xl lg:text-6xl text-black mt-22 sm:mt-18 md:mt-20 lg:mt-29 bg-violet-500 rounded-full inline-block px-2 py-1 sm:px-3 md:px-4 lg:px-6 lg:py-3">
      Workouts
    </p>
    <FontAwesomeIcon icon={faDumbbell} className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl mt-16 sm:mt-18 md:mt-20 lg:mt-26 rotate-75 vibrate" />
  </div>

{/* Search and Filter Section - Enhanced Mobile Responsive */}
<form className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-2 sm:gap-3 md:gap-4 mt-4 px-2 sm:px-3 md:px-4"
 onSubmit={(e) => {
  e.preventDefault()
 }}>    
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-2 sm:ps-3 pointer-events-none">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        
        <input type="text" id="default-search" className="block w-full p-2.5 sm:p-3 md:p-3.5 lg:p-4 ps-8 sm:ps-10 text-xs sm:text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 space focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={(e) => {
          setTimeout(() => {
            setSearch(e.target.value)
          }, 800)
        }} placeholder="Search workouts" required />    
        <button type="submit" className="text-white absolute end-1.5 sm:end-2.5 bottom-1.5 sm:bottom-2.5 bg-violet-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
        
    </div>
    
<button 
 onClick={() => setFilterWorkout(prev => !prev)}
  className="cursor-pointer flex rounded-lg bg-gray-700 py-2 sm:py-2.5 md:py-3 px-3 sm:px-3.5 md:px-4 text-neutral-300 text-xs sm:text-sm md:text-md font-Poppin hover:text-slate-300 w-full sm:w-auto justify-center sm:justify-start mt-2 sm:mt-0">
  FILTER  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="ml-1 size-4 sm:size-5 md:size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
</svg>

</button>

</form>

{/* Filter Buttons - Enhanced Mobile Responsive */}
{filterWorkout && (
<div className="bg-slate-200 p-2 sm:p-3 md:p-3.5 lg:p-4 rounded-2xl shadow-lg grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3 text-xs sm:text-sm mt-4 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-4xl mx-auto">

    <button onClick={() => {
      toggleFilter("upper")
    }} className= {filterbutton.includes("upper") ? "cursor-pointer px-2 py-1.5 text-white h-8 sm:h-8 font-Poppin bg-gray-700 rounded text-xs sm:text-sm" : "cursor-pointer px-2 py-1.5 h-8 sm:h-8 bg-slate-300 font-Poppin rounded text-xs sm:text-sm"} >Upper</button>
    <button onClick={() => {
      toggleFilter("lower")
    }} className={filterbutton.includes("lower") ? "cursor-pointer px-2 py-1.5 text-white font-Poppin h-8 sm:h-8 bg-gray-700 rounded text-xs sm:text-sm" : "cursor-pointer h-8 sm:h-8 px-2 py-1.5 bg-slate-300 font-Poppin rounded text-xs sm:text-sm"}>Lower</button>
    <button onClick={() => {
      toggleFilter("core")
    }} className= {filterbutton.includes("core") ? "cursor-pointer px-2 py-1.5 text-white font-Poppin h-8 sm:h-8 bg-gray-700 rounded text-xs sm:text-sm" : "cursor-pointer px-2 py-1.5 h-8 sm:h-8 bg-slate-300 font-Poppin rounded text-xs sm:text-sm"}  >Core</button>
    <button onClick={() => {
      toggleFilter("full")
    }} className= {filterbutton.includes("full") ? "cursor-pointer px-2 py-1.5 text-white font-Poppin h-8 sm:h-8 bg-gray-700 rounded text-xs sm:text-sm" : "cursor-pointer px-2 h-8 sm:h-8 py-1.5 bg-slate-300 font-Poppin rounded text-xs sm:text-sm"} >Full</button>
    <button onClick={() => {
      toggleFilter("arms")
    }} className = {filterbutton.includes("arms") ? "cursor-pointer px-2 py-1.5 text-white font-Poppin h-8 sm:h-8 bg-gray-700 rounded text-xs sm:text-sm" : "cursor-pointer px-2 py-1.5 h-8 sm:h-8 bg-slate-300 font-Poppin rounded text-xs sm:text-sm"} >Arms
     </button>
    <button onClick={() => {
      toggleFilter("cardio")
    }} className= {filterbutton.includes("cardio") ? "cursor-pointer px-2 py-1.5 text-white font-Poppin h-8 sm:h-8 bg-gray-700 rounded text-xs sm:text-sm" : "cursor-pointer h-8 sm:h-8 px-2 py-1.5 bg-slate-300 font-Poppin rounded text-xs sm:text-sm"} >Cardio</button>
    <button onClick={() => {
      toggleFilter("legs")
    }} className = {filterbutton.includes("legs") ? "cursor-pointer px-2 py-1.5 text-white font-Poppin h-8 sm:h-8 bg-gray-700 rounded text-xs sm:text-sm" : "cursor-pointer h-8 sm:h-8 px-2 py-1.5 bg-slate-300 font-Poppin rounded text-xs sm:text-sm"} >Legs
     </button>
      <button onClick={() => {
      toggleFilter("shoulder")
    }} className = {filterbutton.includes("shoulder") ? "cursor-pointer px-2 py-1.5 text-white font-Poppin h-8 sm:h-8 bg-gray-700 rounded text-xs sm:text-sm" : "cursor-pointer h-8 sm:h-8 px-2 py-1.5 bg-slate-300 font-Poppin rounded text-xs sm:text-sm"} >Shoulders
     </button>   
  </div>
)}

{/* Empty State */}
{filterWorkouts.length === 0 ? (
  <div className="text-center text-base sm:text-lg md:text-xl lg:text-2xl font-Poppin text-gray-700 mt-6 sm:mt-8 md:mt-9 lg:mt-10 px-4">
    No workouts found 😔
  </div>
) : (
  /* Workout Cards Grid - Enhanced Mobile Responsive */
  <motion.div 
      initial={{ opacity:0 , y: 50 }}
      animate={{ opacity: 1, y: 10 }}
      transition={{ duration: 1.6 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6 justify-center p-3 sm:p-4 mt-3 sm:mt-5 md:mt-6">
          {filterWorkouts.map((workout, index) => (
            <motion.div 
            whileHover={{ scale: 1.02 }}
              key={index}
              className="bg-slate-200 p-2 shadow-2xl border-gray-600 border-0 h-[280px] sm:h-[320px] md:h-[360px] lg:h-[470px] w-full max-w-[350px] sm:max-w-[300px] md:max-w-[340px] lg:max-w-[450px] lg:w-[450px] rounded-2xl mx-auto relative overflow-hidden hover:scale-105 transition"
              
            >
              <img
                src={workout.image}
                alt={workout.name}
                className="w-full object-cover h-[200px] sm:h-[220px] md:h-[250px] lg:h-[360px] rounded-2xl opacity-85"
              />
              <div
                className="text-center relative cursor-pointer p-1 sm:p-1.5 font-bold font-Poppin hover:text-violet-600 text-sm sm:text-base md:text-lg lg:text-2xl text-gray-800"
               onClick={() => setSelectedWorkout(workout)}

              >
                {workout.name}
              </div>
              <div className="text-center ml-1 sm:ml-2 text-xs sm:text-sm text-gray-600 px-1 sm:px-2 line-clamp-2">{workout.descriptions}</div>
            </motion.div>
          ))}
          
        </motion.div>
)}

{/* Workout Detail Modal - Enhanced Mobile Responsive with Fixed Close Button */}
{selectedWorkout && (
  <motion.div
  initial={{
    opacity: 0, scale: 0.8
  }}
  animate={{
    opacity: 1, scale:1
  }}
  transition={{ duration: 0.4} }
  className="fixed inset-2 sm:inset-4 sm:top-[100px] md:top-[120px] lg:top-[220px] sm:left-1/2 sm:translate-x-[-50%] z-50 flex items-center justify-center">
    <div
    className="bg-slate-300 text-white h-full sm:h-[480px] md:h-[500px] lg:h-[440px] w-full sm:w-[580px] md:w-[600px] lg:w-[800px] flex flex-col items-center justify-start pt-3 sm:pt-4 border-2 border-black rounded-2xl overflow-y-auto relative"
    
    >
      <motion.div 
      whileHover={{ scale: 1.05 }}
      initial={{
        opacity: 0, scale:0.4
      }}
      animate={{
        opacity: 1, scale:1
      }} 
      transition={{
        duration: 0.2
      }}   className='text-lg sm:text-xl md:text-2xl lg:text-4xl text-black font-Poppin mb-3 sm:mb-4 bg-violet-500 p-2 rounded-2xl text-center mx-3 sm:mx-4'
      >

        <motion.p 
        initial={{
          opacity:1, scale:0.8
        }} 
        className='text-center'
       >{selectedWorkout.name}
       </motion.p>
       
       </motion.div>  
       <div className='absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 lg:top-4 lg:right-6 z-20'>
       <motion.img
      initial={{ scale: 0.8 }}
       whileHover={{ scale: 1.05 }}
       transition={{
        duration:0.2
       }} 
       src="/delete.png" alt="Close" className="cursor-pointer size-5 sm:size-6 md:size-7 lg:size-8" 
       onClick={() => {setSelectedWorkout(null)}}/>
       </div>
       <div className='text-left text-xs sm:text-sm md:text-base lg:text-lg text-black font-Poppin mt-2 sm:mt-3 md:mt-4 space-y-2 sm:space-y-3 md:space-y-4 px-3 sm:px-4 md:px-5 lg:px-6 pb-4 sm:pb-6'>

        {selectedWorkout.details.map((steper,index) => (
          
            <motion.p 
            initial = {{
              opacity: 0, x: -20
            }}
            animate = {{
              opacity: 1, x: 0    

            }}
            transition={{
              duration: 0.4, delay: index * 0.1 , ease: "easeInOut"
            }}
             key={index} className='text-xs sm:text-sm md:text-base lg:text-xl text-left leading-relaxed'> 
            {"➤ " +steper}
            </motion.p>
        ))} 
       </div>
       
    
    </div>
  </motion.div>
)}

  </motion.div>
  
);

}